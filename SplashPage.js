import React, { useEffect } from 'react';
import { Text, View, } from 'react-native';
import { verifyTokens } from './tokenUtils';

const SplashPage = ({navigation}) => {
    useEffect(()=>{
        verifyTokens(navigation);
    },[])
    
  return (
    <View style ={{padding: 50}}>
      <Text style={{padding: 10, fontSize: 42}}>
        SPLASH
      </Text>
    </View>
    );
}

export default SplashPage;