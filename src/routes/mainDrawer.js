import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
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
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
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
          // In a production app, we need to send some data (usually username, password) to server and get a token
          // We will also need to handle errors if sign in failed
          // After getting token, we need to persist the token using `SecureStore` or any other encrypted storage
          // In the example, we'll use a dummy token

          dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
          },
          signOut: () => dispatch({ type: 'SIGN_OUT' }),
          signUp: async (data) => {
          // In a production app, we need to send user data to server and get a token
          // We will also need to handle errors if sign up failed
          // After getting token, we need to persist the token using `SecureStore` or any other encrypted storage
          // In the example, we'll use a dummy token

          dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
          },
      }),
      []
  );

  return (
    <AuthContext.Provider value={authContextValue}>
      { state.userToken !== null ?
      <Drawer.Navigator initialRouteName="Home">
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

export default AppDrawer;