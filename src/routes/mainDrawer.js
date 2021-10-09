import * as React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/home';
import Stores from '../pages/stores';
import NewsList from '../pages/newsList';
import About from '../pages/about';
import Login from '../pages/login';
import NewsDetails from '../pages/newsDetails';
import { MaterialIcons } from '@expo/vector-icons';

export const AuthContext = React.createContext();

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function AppDrawer() {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }  
  );

  const authContextValue = React.useMemo(
      () => ({
          signIn: async (data) => {
          dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
          },
          signOut: () => dispatch({ type: 'SIGN_OUT' }),
      }),
      []
  );

  return (
    <AuthContext.Provider value={authContextValue}>
      { state.userToken !== null ?
      <Drawer.Navigator initialRouteName="Home" drawerContent={(props) => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="My Pintos" component={Home} />
        <Drawer.Screen name="Stores" component={Stores} />
        <Drawer.Screen name="News" component={NewsStack} options={{headerShown: false}} />
        <Drawer.Screen name="About" component={About} />
      </Drawer.Navigator>
      :
      <Stack.Navigator initialRouteName="About">
        <Stack.Screen name="Login" component={Login}/>
      </Stack.Navigator> 
      }
    </AuthContext.Provider>
  );
}

function NewsStack() {
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

function Logout() {
  const { signOut } = React.useContext(AuthContext);
  return (
    <Text onPress={ signOut() }>Logout</Text>
  );
}

function CustomDrawerContent(props) {
  const { signOut } = React.useContext(AuthContext);
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Logout"
        onPress={() =>signOut()}
      />
    </DrawerContentScrollView>
  );
}

export default AppDrawer;