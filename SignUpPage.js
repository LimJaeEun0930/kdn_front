import { View, StyleSheet,TextInput,Button} from 'react-native';
import { register } from './tokenUtils';
import { useState } from "react";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const RegisterPage = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState(''); // [1
    const [pw1equlsPw2, setPw1equlsPw2] = useState(false); // [2
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');


    const onChangeEmail = (email) => setEmail(email);
    const onChangePw = (pw) => setPassword(pw);
    const onChangePwConfirm = (passwordConfirm) => setPasswordConfirm(passwordConfirm); // [3
    const onChangeName = (name) => setName(name);
    const onChangePhoneNumber = (phoneNumber) => setPhoneNumber(phoneNumber);

    

    const onPressButton = () =>{
        if (password === passwordConfirm){
            register(email, password,name,password, navigation);
        }
        else{
            alert("비밀번호를 확인해주세요.");
        }
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

        <TextInput
        style={styles.input}
        value={passwordConfirm}
        onChangeText={onChangePwConfirm}
        secureTextEntry={true}
        placeholder='Password Confirm'
        />

        <TextInput
        style={styles.input}
        value={name}
        onChangeText={onChangeName}
        placeholder='Name'
        />

        <TextInput
        style={styles.input}
        value={phoneNumber}
        onChangeText={onChangePhoneNumber}
        placeholder='Phone Number'
        />

        <Button onPress={onPressButton} title="Create Account" />
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
export default RegisterPage; 
