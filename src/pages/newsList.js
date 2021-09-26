import * as React from 'react';
import { View, Text } from 'react-native';

export default function newsList({navigation}) {
    return (
        <View >
            <Text onPress={() => navigation.navigate('NewsDetails')}>News List Page</Text>
        </View>
    )
}