import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";

import Home from "./Homescreen";
import AuthPage from "./LoginPage";
import SplashPage from "./SplashPage";
import SignUpPage from "./SignUpPage";


export default function AuthStackNavigator  () {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
        <Stack.Navigator>

            <Stack.Screen name='SplashPage' component={SplashPage} />
            <Stack.Screen name='LoginPage' component={AuthPage} />
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='SignUpPage' component={SignUpPage}/>
            
       
        </Stack.Navigator>
        </NavigationContainer>
       
  );
}

// export { AuthStackNavigator };