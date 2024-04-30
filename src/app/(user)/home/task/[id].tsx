import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ImageSourcePropType,
} from 'react-native';
// import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Link, Stack, useLocalSearchParams, useRouter } from 'expo-router';

import Colors from '@/constants/Colors';
import HeaderStyle from '@/constants/HeaderStyle';
import { IconStyle } from '@/constants/Icons';
import TextStyles from '@/constants/TextStyles';

import BackButton from '@/components/BackButton';
import IconButton from '@/components/IconButton';

import { posts } from '@assets/data/posts';
import Button from '@/components/Button';

const defaultUserImage = require('@assets/images/default-user.png');

const PostDetails = () => {
    // const insets = useSafeAreaInsets();
    const router = useRouter();

    const { id } = useLocalSearchParams();

    const post = posts.find(post => post.id.toString() === id);

    if (!post) {
        return (
            // <View style={(styles.container, { marginTop: insets.top })}>
            <Text>Post not found</Text>
            // </View>
        );
    }

    return (
        <View style={{ ...styles.container }}>
            <Stack.Screen
                options={{
                    // statusBarTranslucent: true,
                    // statusBarStyle: 'light',
                    headerTransparent: true,
                    headerTitle: '',
                    ...{
                        ...HeaderStyle,
                        headerShadowVisible: false,
                        headerStyle: { backgroundColor: 'transparent' },
                    },
                    headerLeft: () => {
                        return (
                            <View
                                style={{
                                    backgroundColor: Colors.blue,
                                    ...IconStyle.fill,
                                    alignItems: 'flex-start',
                                }}>
                                <BackButton
                                    icon="chevron-left-fill"
                                    router={router}
                                    color={Colors.white}
                                />
                            </View>
                        );
                    },
                    headerRight: () => {
                        return (
                            <View
                                style={{
                                    backgroundColor: Colors.blue,
                                    ...IconStyle.fill,
                                }}>
                                <IconButton
                                    icon="more-options"
                                    color={Colors.white}
                                    strokeWidth={0}
                                />
                            </View>
                        );
                    },
                }}
            />
            <Image
                source={post.imageList[0] as ImageSourcePropType}
                style={styles.image}
            />
            <View style={{ flex: 1 }}>
                <View style={styles.textContainer}>
                    <View style={styles.userTag}>
                        <Image
                            source={defaultUserImage}
                            style={styles.userImage}
                        />
                        <Text
                            style={{
                                ...TextStyles.medium2,
                                minWidth: 20,
                                maxWidth: 200,
                                flexShrink: 0,
                            }}
                            numberOfLines={1}>
                            {post.author.fullName}
                        </Text>

                        <Text
                            style={{
                                ...TextStyles.medium2,
                            }}>
                            •
                        </Text>
                        <Text
                            style={{
                                ...TextStyles.medium2,
                                flexShrink: 0,
                                flex: 1,
                            }}>
                            {post.createdAt}
                        </Text>
                    </View>
                    <View style={styles.header}>
                        <Text style={styles.title} numberOfLines={2}>
                            {post.title}
                        </Text>
                        <Text style={styles.rate} numberOfLines={2}>
                            ₱{post.rate.toLocaleString()}
                        </Text>
                    </View>
                    <Link href={'/apply'} asChild>
                        <Button
                            text={'Apply'}
                            style={{
                                width: '100%',
                                maxWidth: '100%',
                                borderRadius: 8,
                            }}
                        />
                    </Link>

                    <Text style={styles.description}>{post.description}</Text>
                </View>
            </View>
        </View>
    );
};

export default PostDetails;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: 16,
        backgroundColor: Colors.white,
        gap: -32,
        // paddingTop: 8,
        // paddingHorizontal: 16,
    },
    image: {
        height: 300,
        width: '100%',
        resizeMode: 'cover',
    },
    textContainer: {
        minWidth: '100%',
        flex: 1,
        gap: 16,
        padding: 16,
        borderRadius: 40,
        borderBottomStartRadius: 0,
        borderBottomEndRadius: 0,
        backgroundColor: Colors.white,
        elevation: 5,
        borderColor: Colors.placeholder,
    },
    header: {
        gap: 4,
    },
    title: {
        ...TextStyles.bold6,
    },
    rate: {
        ...TextStyles.medium6,
        color: Colors.blue,
    },
    description: {
        textAlign: 'justify',
        ...TextStyles.medium2,
    },
    userTag: {
        alignItems: 'center',
        flexDirection: 'row',
        gap: 8,
    },
    userImage: {
        alignSelf: 'flex-start',
        width: 24,
        height: 24,
    },
});
