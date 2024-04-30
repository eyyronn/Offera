import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import { posts } from '@assets/data/posts';

import Colors from '@/constants/Colors';

import PostItem from '@/components/PostItem';
import Separator from '@/components/Separator';
import ListHeader from '@/components/ListHeader';
import { useRouter } from 'expo-router';

const HomeScreen = () => {
    const router = useRouter();
    console.log('HOME');

    return (
        <View style={styles.container}>
            <FlatList
                alwaysBounceVertical={true}
                showsVerticalScrollIndicator={false}
                data={posts.filter(post => post.type === 'task')}
                renderItem={({ item }) => <PostItem post={item} />}
                contentContainerStyle={{ gap: 16 }}
                ListHeaderComponent={() => (
                    <View style={{ gap: 16 }}>
                        <View style={{ gap: 8 }}>
                            <ListHeader
                                title={'Featured Services'}
                                onPress={() =>
                                    router.push('/home/service/feed')
                                }
                            />
                            <FlatList
                                style={{ flex: 1 }}
                                horizontal
                                data={posts.filter(
                                    post => post.type === 'service',
                                )}
                                renderItem={({ item }) => (
                                    <PostItem post={item} variant="portrait" />
                                )}
                                contentContainerStyle={{
                                    maxWidth: '150%',
                                    gap: 16,
                                }}
                            />
                        </View>
                        <ListHeader
                            title={'Tasks'}
                            onPress={() => router.push('/home/task/feed')}
                            style={{ top: 8 }}
                        />
                    </View>
                )}
                ItemSeparatorComponent={() => (
                    <Separator style={{ marginTop: 16 }} />
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        padding: 16,
        paddingVertical: 8,
    },
});

export default HomeScreen;
