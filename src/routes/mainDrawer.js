import * as React from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../pages/home";
import Stores from "../pages/stores";
import NewsList from "../pages/newsList";
import About from "../pages/about";
import Login from "../pages/login";
import NewsDetails from "../pages/newsDetails";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { SafeAreaView, View, Image } from "react-native";

export const AuthContext = React.createContext();

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const DEFAULT_MENU_DRAWER_SCREEN_STYLE = {
  drawerActiveBackgroundColor: "#fff",
  drawerActiveTintColor: "#75C8CC",
  drawerInactiveTintColor: "#000",
  drawerItemStyle: {
    borderRadius: 0,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  drawerLabelStyle: {
    fontFamily: "Yanone Kaffeesatz",
    fontSize: 20,
  },
  
  headerTitleStyle: {
    fontFamily: "Yanone Kaffeesatz",
    fontSize: 20,
    color: '#fff'
  },
  headerStyle: {
    backgroundColor: '#75C8CC'
  },
  headerTitleAlign: 'center',
  headerTintColor:  '#fff'
};

function AppDrawer() {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case "SIGN_IN":
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case "SIGN_OUT":
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
      userToken: localStorage.getItem('user'),
    }
  );

  const authContextValue = React.useMemo(
    () => ({
      signIn: async (data) => {
        localStorage.setItem('user', 'userToken');
        dispatch({ type: "SIGN_IN", token: "userToken" });
      },
      signOut: () => {
        localStorage.removeItem('user');
        dispatch({ type: "SIGN_OUT" });
      }
    }),
    []
  );

  return (
    <AuthContext.Provider value={authContextValue}>
      {state.userToken !== null ? (
        <Drawer.Navigator
          initialRouteName="Home"
          drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
          <Drawer.Screen
            name="My Pintos"
            component={Home}
            options={{
              ...DEFAULT_MENU_DRAWER_SCREEN_STYLE,
              drawerIcon: ({ focused, size }) => (
                <MaterialIcons
                  name="qr-code-2"
                  size={size}
                  color={focused ? "#75C8CC" : "#000"}
                />
              ),
            }}
          />
          <Drawer.Screen
            name="Stores"
            component={Stores}
            options={{
              ...DEFAULT_MENU_DRAWER_SCREEN_STYLE,
              drawerIcon: ({ focused, size }) => (
                <MaterialIcons
                  name="storefront"
                  size={size}
                  color={focused ? "#75C8CC" : "#000"}
                />
              ),
            }}
          />
          <Drawer.Screen
            name="News"
            component={NewsStack}
            options={{
              ...DEFAULT_MENU_DRAWER_SCREEN_STYLE,
              headerShown: false,
              drawerIcon: ({ focused, size }) => (
                <Ionicons
                  name="newspaper-outline"
                  size={size}
                  color={focused ? "#75C8CC" : "#000"}
                />
              ),
            }}
          />
          <Drawer.Screen
            name="About"
            component={About}
            options={{
              ...DEFAULT_MENU_DRAWER_SCREEN_STYLE,
              drawerIcon: ({ focused, size }) => (
                <MaterialIcons
                  name="info-outline"
                  size={size}
                  color={focused ? "#75C8CC" : "#000"}
                />
              ),
            }}
          />
        </Drawer.Navigator>
      ) : (
        <Stack.Navigator initialRouteName="About">
          <Stack.Screen name="Login" component={Login} options={{...DEFAULT_MENU_DRAWER_SCREEN_STYLE}}/>
        </Stack.Navigator>
      )}
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
              name="menu"
              size={22}
              onPress={() => navigation.toggleDrawer()}
              style={{ margin: 16 }}
              color="#fff"
            />
          ),
            ...DEFAULT_MENU_DRAWER_SCREEN_STYLE,
        })}
      />
      <Stack.Screen name="NewsDetails" component={NewsDetails} options={{...DEFAULT_MENU_DRAWER_SCREEN_STYLE}}/>
    </Stack.Navigator>
  );
}

function CustomDrawerContent(props) {
  const { signOut } = React.useContext(AuthContext);
  return (
    <DrawerContentScrollView {...props}>
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{
            height: 100,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={require("../../assets/logo.png")}
            style={{
              width: 85,
              height: 34,
            }}
          />
        </View>
        <DrawerItemList {...props} />
      </SafeAreaView>
      <DrawerItem
        label="Logout"
        labelStyle={{
          fontFamily: "Yanone Kaffeesatz",
          fontSize: 20,
        }}
        inactiveTintColor="#000"
        onPress={() => signOut()}
        icon={({ focused, size }) => (
          <MaterialIcons
            name="logout"
            size={size}
            color={focused ? "#75C8CC" : "#000"}
          />
        )}
      />
    </DrawerContentScrollView>
  );
}

export default AppDrawer;
