import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput, Button } from 'react-native';
import { AsyncStorageStatic} from '@react-native-async-storage/async-storage'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import * as React from 'react';
import { useState,useEffect } from 'react';
import { useAuth } from './app/context/AuthContext';
import axios from 'axios';


const Login = () => {

const [email,setEmail] = useState('');
const [password,setPassword] = useState('');
const {onLogin,onRegister} = useAuth();

  const onChangeEmail = (email) => setEmail(email);
  const onChangePw = (pw) => setPassword(pw);
  const API_URL = 'local...' // backend server url

// useEffect(()=>{
//   const testCall = async() => {
//     const result = await axios.get(`${API_URL}/users`);

//     console.log("testcall result: ",result);
//   };
//   testCall();

// },[]); 

const login = async()=> {

  const result = await onLogin!(email,password);
  if (result && result.error){
    alert(result.msg);
  }
};

//We automatically call the login after a successful registration
const register = async()=>{
  const result = async () => {
    const result = await onRegister!(email,password);
    if (result && result.error){
      alert(result.msg);
    } else {
      login();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>

      <TextInput 
      style={styles.input}
        value={email}
        onChangeText={(email: string)=>onChangeEmail(email)}
        placeholder='ID'/>

       <TextInput 
        style={styles.input}
        value={password}
        onChangeText={onChangePw}
        secureTextEntry={true}
        placeholder='Password'
        />

        <Button onPress={login} title="Sign in"/>
        <Button onPress={register} title="Create Account" />
      </View>
      
    </View>
  )

}
}

  const styles = StyleSheet.create({
    input: {
      height: 44,
      borderWidth: 1,
      borderRadius: 4,
      padding: 10,
      backgroundColor: '#fff',
    },
    container: {
      alignItems: 'center',
      width: '100%',
    },
    form: {
      gap:10,
      width: '60%',
    },
    formArea: {
      width: '100%',
      paddingBottom: wp('10%'),
    },

    button: {
        backgroundColor: "#46c3ad",
        width: "100%",
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonTitle: {
        color: 'white',
    },
})

export default Login;
// export default function LoginScreen({navigation}) {
//   const[id,setId] = useState('');
//   const[pw,setPw] = useState('');

//   const onChangeId = (id) => setId(id);
//   const onChangePw = (pw) => setPw(pw);

  
//     const loginBut = async () => {
//       try {
//         // POST 요청을 보내는 부분
//         const response = await axios.post('백엔드 API URL', {
//           id: id,
//           password: pw,
//         });
  
//         // 로그인 성공 시
//         if (response.status === 200) {
//           // 백엔드에서 받은 JWT 토큰을 저장하고, 홈 화면으로 이동
//           const jwtToken = response.data.token; // 백엔드에서 토큰 필드에 따라 수정
//           // 여기에서 토큰을 저장하거나 관리하세요 (예: AsyncStorage 사용)
//           navigation.navigate('Home');
//         } else {
//           // 로그인 실패 시
//           Alert.alert('로그인 실패', '아이디 또는 비밀번호가 일치하지 않습니다.');
//         }
//       } catch (error) {
//         // 오류 처리
//         console.error('로그인 오류:', error);
//       }
//     }
  
 
//     return (
//       <View>
//         <TextInput 
//         style={styles.formArea}
//         value={id}
//         onChangeText={onChangeId}
//         placeholder='ID'/>

//         <TextInput 
//         value={pw}
//         onChangeText={onChangePw}
//         placeholder='Password'/>

//         <TouchableOpacity 
//         style={styles.button}
//         onPress={loginBut}>
//          <Text style={styles.buttonTitle}>Login</Text>
//         </TouchableOpacity>



//       </View>

//     );

//   }