import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, Image, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
// import { useFonts, Figtree_300Light, Figtree_400Regular, Figtree_500Medium, Figtree_600SemiBold, Figtree_700Bold } from '@expo-google-fonts/figtree';

import styles from './style';

export default function Splash() {

  const navigation = useNavigation();
  // const [fontLoaded] = useFonts({
  //   Poppins_400Regular,
  //   Poppins_500Medium,
  //   Poppins_700Bold,
  //   Poppins_600SemiBold
  // });

  // if(!fontLoaded){
  //   return null;
  // }
  
  function loading(){
      setTimeout(() => {  
        navigation.navigate('Index');      
      }, 2000)
    }
    loading();

    return(
      <LinearGradient
      colors={['transparent', 'rgba(0,0,0,0.8)']}
      style={styles.background}
      >
        <View style={styles.container}>
            <Image source={require('../../assets/logo.png')} style={styles.logo}/>
        </View>
      </LinearGradient>
    )
}