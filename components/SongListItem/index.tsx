import React, { useContext } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { AppContext } from '../../AppContext';
import { Song } from '../../types';
import styles from './styles';

export type SongListItemProps = {
    song: Song
}

const SongListItem = (props: SongListItemProps) => {
    const { song } = props

    const { setSongId } = useContext(AppContext)

    const onPlay = () => {
        setSongId(song.id)
    }

    return (
        <TouchableOpacity onPress={onPlay}>
            <View style={styles.container}>
                <Image source={{ uri: song.imageUri }} style={styles.image} />
                <View style={styles.rightContainer}>
                    <Text style={styles.title}>{song.title}</Text>
                    <Text style={styles.artist}>{song.artist}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default SongListItem;
