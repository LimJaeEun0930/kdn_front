import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";

import Home from "./Homescreen";
import AuthPage from "./AuthPage";
import SplashPage from "./SplashPage";
//import SignUpPage from "../pages/SignUpPage";
//import ResendMailPage from "../pages/ResendMailPage";

export default function AuthStackNavigator  () {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
        <Stack.Navigator>

            <Stack.Screen name='SplashPage' component={SplashPage} />
            <Stack.Screen name='AuthPage' component={AuthPage} />
            <Stack.Screen name='Home' component={Home} />
            {/* <Stack.Screen name='SignUpPage' component={SignUpPage} options={{ headerShown: false}}/>
            <Stack.Screen name='ResendMailPage' component={ResendMailPage} options={{ headerShown: false}}/> */}
       
        </Stack.Navigator>
        </NavigationContainer>
       
  );
}

// export { AuthStackNavigator };