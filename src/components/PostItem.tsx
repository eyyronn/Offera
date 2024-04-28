import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';

import Colors from '@/constants/Colors';
import TextStyles from '@/constants/TextStyles';

const defaultImage = require('@assets/images/default-img.png');
const defaultUserImage = require('@assets/images/default-user.png');

import { Post } from '@/types';

type PostItemProps = {
    post: Post;
    variant?: 'landscape' | 'portrait';
};

const PostItem = ({ post, variant }: PostItemProps) => {
    const isPortrait = variant === 'portrait';

    const containerStyle = isPortrait
        ? styles.containerPortrait
        : styles.container;

    const imageStyle = isPortrait ? styles.imagePortrait : styles.image;

    return (
        <TouchableOpacity style={containerStyle}>
            <Image source={defaultImage} style={imageStyle} />
            <View style={styles.textContainer}>
                {isPortrait && (
                    <View style={styles.header}>
                        <Text
                            style={{
                                ...TextStyles.medium2,
                                flexDirection: 'row',
                            }}
                            numberOfLines={1}>
                            {post.title}
                        </Text>
                        <View style={styles.userTag}>
                            <Image
                                source={defaultUserImage}
                                style={styles.userImage}
                            />
                            <Text
                                style={{
                                    ...TextStyles.regular1,
                                    minWidth: 20,
                                    maxWidth: 120,
                                    flexShrink: 0,
                                }}
                                numberOfLines={1}>
                                {post.author.fullName}
                            </Text>
                        </View>
                    </View>
                )}

                {!isPortrait && (
                    <View style={styles.header}>
                        <View style={styles.userTag}>
                            <Image
                                source={defaultUserImage}
                                style={styles.userImage}
                            />
                            <Text
                                style={{
                                    ...TextStyles.regular1,
                                    minWidth: 20,
                                    maxWidth: 120,
                                    flexShrink: 0,
                                }}
                                numberOfLines={1}>
                                {post.author.fullName}
                            </Text>
                            <Text
                                style={{
                                    ...TextStyles.regular1,
                                }}>
                                •
                            </Text>
                            <Text
                                style={{
                                    ...TextStyles.regular1,
                                    flexShrink: 0,
                                    flex: 1,
                                }}>
                                {post.createdAt}
                            </Text>
                        </View>
                        <Text
                            style={{
                                ...TextStyles.medium2,
                                flexDirection: 'row',
                            }}
                            numberOfLines={1}>
                            {post.title}
                        </Text>
                    </View>
                )}

                <View
                    style={{
                        flexDirection: 'row',
                    }}>
                    <Text
                        numberOfLines={2}
                        style={
                            isPortrait
                                ? {
                                      ...TextStyles.cardDescription,
                                      paddingTop: 2,
                                  }
                                : TextStyles.cardDescription
                        }>
                        {post.description}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default PostItem;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 16,
        borderColor: Colors.lightGrey,
        borderWidth: 1,
    },
    containerPortrait: {
        width: '50%',
        flexDirection: 'column',
        backgroundColor: 'white',
        borderRadius: 16,
        borderColor: Colors.lightGrey,
        borderWidth: 1,
    },
    image: {
        resizeMode: 'cover',
        borderTopLeftRadius: 16,
        borderBottomLeftRadius: 16,
        width: 120,
        height: 100,
    },
    imagePortrait: {
        resizeMode: 'cover',
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        width: 'auto',
        height: 100,
    },
    textContainer: {
        flex: 1,
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: 8,
    },
    header: {
        gap: 8,
    },
    userTag: {
        flex: 1,
        flexDirection: 'row',
        gap: 8,
    },
    userImage: {
        width: 16,
        height: 16,
    },
});
