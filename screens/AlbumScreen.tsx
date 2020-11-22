import { useRoute } from '@react-navigation/native';
import { API, graphqlOperation } from 'aws-amplify';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';
import AlbumHeader from '../components/AlbumHeader';
import SongListItem from '../components/SongListItem';
import { getAlbum } from '../graphql/queries';

export type AlbumScreenProps = {}

const AlbumScreen = (props: AlbumScreenProps) => {
    const route = useRoute()
    const albumId = route.params.id

    const [album, setAlbum] = useState(null)

    useEffect(() => {
        const fetchAlbumDetails = async () => {
            try {
                const data = await API.graphql(graphqlOperation(getAlbum, { id: albumId }))

                setAlbum(data.data.getAlbum)
            } catch (e) {
                console.log('fetchAlbumDetails error: ' + e)
            }
        }

        fetchAlbumDetails()
    }, [])

    if (!album) {
        return <ActivityIndicator />
    }

    return (
        <View>
            <FlatList
                data={album.songs.items}
                renderItem={({ item }) => (
                    <SongListItem song={item} />
                )}
                keyExtractor={item => item.id}
                ListHeaderComponent={() => <AlbumHeader album={album} />}
            />
        </View>
    );
};

export default AlbumScreen;
