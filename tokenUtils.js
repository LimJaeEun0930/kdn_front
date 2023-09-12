import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { Toast } from "react-native-toast-message/lib/src/Toast";

const URL = 'http://localhost:3000'

const showToast = (text) =>{
    Toast.show({
        type: 'error',
        position: 'bottom',
        text1: text,
      });
};

export const getTokens = (email, password, navigation) => { //로그인버튼 클릭시 호출
    axios.post(`${URL}/login`,
    {
      "userId":email,
      "userpw":password
    })
    .then(res =>{{
          //accessToken, refreshToken 로컬에 저장
          if (res.status === 200){
            AsyncStorage.setItem('Tokens', JSON.stringify({
              'accessToken': res.data.accessToken,
              'refreshToken': res.data.refreshToken,
              'userId': res.data.userId
            }))
            navigation.navigate('Home');
          }

    }})
    .catch(error =>{
            if(error.response.status === 401){
                showToast(error.response.data)
            }
            else{
                showToast("알수없는 오류")
            } 
          
    })
};

const getTokenFromLocal = async () => { // verifyTokens에서 호출되는 함수
  try {
    const value = await AsyncStorage.getItem("Tokens");
    if (value !== null) {
      return JSON.parse(value)
    }
    else{
      return null;
    }
  } catch (e) {
    console.log(e.message);
  }
};


export const verifyTokens = async (navigation) => { //SplashPage에서 uesEffect로 사용됨.
  const Token = await getTokenFromLocal();

  // 최초 접속
  if (Token === null){
    navigation.reset({routes: [{name: "AuthPage"}]});//로그인페이지>
  }
  // 로컬 스토리지에 Token데이터가 있으면 -> 토큰들을 헤더에 넣어 검증 
  else{
    const headers_config = {
      "refresh": Token.refreshToken,
      Authorization: `Bearer ${Token.accessToken}`   
    };

    try {
      const res = await axios.get(`${URL}/refresh`, {headers: headers_config})

      // accessToken 만료, refreshToken 정상 -> 재발급된 accessToken 저장 후 자동 로그인
      AsyncStorage.setItem('Tokens', JSON.stringify({
        ...Token,
        'accessToken': res.data.data.accessToken,
      }))
      navigation.reset({routes: [{name: "Home"}]});

    } catch(error){
      const code = error.response.data.code; 

      // accessToken 만료, refreshToken 만료 -> 로그인 페이지
      if(code === 401){
        navigation.reset({routes: [{name: "AuthPage"}]});
      }
      // accessToken 정상, refreshToken 정상 -> 자동 로그인
      else{
        navigation.reset({routes: [{name: "Home"}]});
      }
    }

  }
};