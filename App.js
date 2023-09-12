import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View , AsyncStorage} from 'react-native';
import * as React from 'react';
//import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStackNavigator from './AuthStackNavigator';
// import Home from './Homescreen';
// import Login from './LoginScreen'
// import { AuthProvider, useAuth } from './app/context/AuthContext';

// const Stack = createNativeStackNavigator();

export default function App() {
  return (
  <AuthStackNavigator/>
  );
}

// export const Layout = ()=> {
//   const {authState,onLogout} = useAuth();

//   return (
//     <NavigationContainer>
//     <Stack.Navigator>
      
//       {authState?.authenticated ? ( // login 된 상태의 화면과 아닌 상태의 화면 렌더링 결정
//         <Stack.Screen
//         name="Home"
//         component={Home}
//         options={{
//           headerRight: () => <Button onPress={onLogout} title = "Sign Out"/>,
//         }}></Stack.Screen>
//       ) : ( 
//         <Stack.Screen name="Login" component={Login}></Stack.Screen>
//       )}

//     </Stack.Navigator>
//   </NavigationContainer>
//   )
// }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
