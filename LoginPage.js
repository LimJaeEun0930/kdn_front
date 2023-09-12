import { View, StyleSheet,TextInput,Button} from 'react-native';
import { getTokens } from './tokenUtils';
import { useState } from "react";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const AuthPage = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const onChangeEmail = (email) => setEmail(email);
    const onChangePw = (pw) => setPassword(pw);

    const onPressLoginButton = () =>{
        getTokens(email, password, navigation);
    }

    const goRegisterButton = () =>{
      navigation.navigate('SignUpPage');
      }
   

  return (
    <View style={styles.container}>
      <View style={styles.form}>

      <TextInput 
      style={styles.input}
        value={email}
        onChangeText={onChangeEmail}
        placeholder='email'/>

       <TextInput 
        style={styles.input}
        value={password}
        onChangeText={onChangePw}
        secureTextEntry={true}
        placeholder='Password'
        />

        <Button onPress={onPressLoginButton} title="log in"/>
        <Button onPress={goRegisterButton} title="Create Account" />
      </View>
      
    </View>
    );
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
export default AuthPage; 
