import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/home';
import Points from '../pages/points';
import NewsList from '../pages/newsList';
import NewsDetails from '../pages/newsDetails';
import { MaterialIcons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function AppDrawer() {
  return (
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="News" component={ListItem} options={{headerShown: false}} />
        <Drawer.Screen name="Points" component={Points} />
      </Drawer.Navigator>
  );
}

function ListItem() {
  return (
    <Stack.Navigator initialRouteName="NewsList">
      <Stack.Screen
        name="NewsList"
        component={NewsList}
        options={({ navigation }) => ({
          headerLeft: () => (
            <MaterialIcons 
              name='menu' 
              size={22} 
              onPress={() => navigation.toggleDrawer()}
              style={{ margin: 16 }}/>
          ),
        })}
      />
      <Stack.Screen
        name="NewsDetails"
        component={NewsDetails}
      />
    </Stack.Navigator>
  );
}

export default AppDrawer;