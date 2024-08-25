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
    initialRouteName="Home"
    screenOptions={{
      ...defaultScreenOptions,
    }}
  >
    <Drawer.Screen
      name="Home"
      component={Home}
      options={{
        title: "Home",
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

const MainStack = () => (
  <Stack.Navigator
    initialRouteName="Splash"
    screenOptions={defaultScreenOptions}
  >
    <Stack.Screen name="Splash" component={Splash} />
    <Stack.Screen name="SignIn" component={SignIn} />
    <Stack.Screen name="SignUp" component={SignUp} />
    <Stack.Screen name="Index" component={Index} />
    <Stack.Screen name="DrawerContent" component={DrawerContent} options={{ headerShown: false }} />
  </Stack.Navigator>
);

export default function App() {
  useEffect(() => {
    loadFonts();
  }, []);

  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}
