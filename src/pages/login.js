import * as React from 'react';
import { View, Text } from 'react-native';
import { AuthContext } from '../routes/mainDrawer';

export default function newsDetails({navigation}) {
    const { signIn } = React.useContext(AuthContext);
    return (
        <View >
            <Text onPress={() => { signIn({ userName: '1', password: '1' })} }>Login Page</Text>
        </View>
    )
}