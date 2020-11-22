import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Text, TouchableWithoutFeedback, View } from 'react-native';
import { Album } from '../../types';
import styles from './styles';

export type AlbumProps = {
    album: Album
}

const AlbumComponent = (props: AlbumProps) => {
    const navigation = useNavigation()

    const onPress = () => {
        navigation.navigate('AlbumScreen', { id: props.album.id })
    }

    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                {/* Image of the album */}
                <Image source={{ uri: props.album.imageUri }} style={styles.image} />
                {/* Artist headline */}
                <Text style={styles.text}>{props.album.artistsHeadline}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default AlbumComponent;
