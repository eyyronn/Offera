import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

import Colors from '@/constants/Colors';

const addPost = () => {
    console.log('ADD POST');

    return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.white,
    },
    headerRightContainer: {
        flex: 1,
        paddingHorizontal: 16,
        flexDirection: 'row',
        gap: 16,
        alignItems: 'center',
        alignSelf: 'stretch',
    },
});
