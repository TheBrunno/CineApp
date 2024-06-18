import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";

import Splash from "./pages/Splash";
import Home from "./pages/Home";
import Filmes from "./pages/Filmes";
import Index from "./pages/Index";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Devs from "./pages/Devs";
import { loadFonts } from "./fonts";
import { CardStyleInterpolators } from "@react-navigation/stack";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const defaultScreenOptions = {
  headerShown: false,
  cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
};

const DrawerContent = () => (
  <Drawer.Navigator
    initialRouteName="Filmes"
    screenOptions={{
      ...defaultScreenOptions,
      // drawerStyle: {
      //   backgroundColor: "#000",
      //   padding: 40,
      //   justifyContent: "center",
      //   display: "flex",
      // },
      // drawerItemStyle: {
      //   height: 50,
      //   paddingHorizontal: 20,
      //   borderLeft: "5px solid #fff",
      //   borderRadius: "none",
      //   backgroundColor: "none",
      //   color: "#fff",
      // },
    }}
  >
    <Drawer.Screen
      name="Home"
      component={Home}
      options={{
        title: "Início",
      }}
    />
    <Drawer.Screen
      name="Devs"
      component={Devs}
      options={{
        title: "Desenvolvedores",
      }}
    />
    <Drawer.Screen
      name="Filmes"
      component={Filmes}
      options={{
        title: "Filmes",
      }}
    />
  </Drawer.Navigator>
);

export default function App() {
  useEffect(() => {
    loadFonts();
  }, []);

  return (
    <NavigationContainer>
      <DrawerContent />
    </NavigationContainer>
  );
}
