import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';

import Index from './pages/Index'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'


const Stack = createStackNavigator();

const Stacks = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Index"
        component={Index}
        options={{
          title: 'Index',
          cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
        }}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          title: 'SignIn',
          cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          title: 'SignUp',
          cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
        }}
      />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stacks />
    </NavigationContainer>
  );
}