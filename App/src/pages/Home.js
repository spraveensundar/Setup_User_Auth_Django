import React from 'react';
import { View } from 'react-native';

import { Text } from '../components/Typography';

import styles from './Guest/styles';

const Home = ({ route }) => {
    const username = route.params?.username;

    return (
        <View style={styles.content}>
            <Text tag="h1">Welcome</Text>
            <Text tag="h1">{username}!</Text>
        </View>
    )
}

export default Home;