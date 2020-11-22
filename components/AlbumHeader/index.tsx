import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Album } from '../../types';
import styles from './styles';

export type AlbumHeaderProps = {
    album: Album
}

const AlbumHeader = (props: AlbumHeaderProps) => {
    const { album } = props

    return (
        <View style={styles.container}>
            {/* Cover image */}
            <Image source={{ uri: album.imageUri }} style={styles.image} />
            {/* Name */}
            <Text style={styles.name}>{album.name}</Text>
            {/* Creator     Number of Likes */}
            <View style={styles.creatorContainer}>
                <Text style={styles.creator}>By {album.by}</Text>
                <Text style={styles.likes}>{album.numberOfLikes} {album.numberOfLikes > 1 ? 'likes' : 'like'}</Text>
            </View>
            {/* Play button */}
            <TouchableOpacity>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>PLAY</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default AlbumHeader;
