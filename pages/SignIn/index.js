import { StatusBar } from 'expo-status-bar';
import React, { useState, createRef } from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useFonts, Figtree_300Light, Figtree_400Regular, Figtree_500Medium, Figtree_600SemiBold, Figtree_700Bold } from '@expo-google-fonts/figtree';
import * as Animatable from 'react-native-animatable';

import styles from './style';

export default function SignIn() {
    const navigation = useNavigation();

    const inputRefOne = createRef();
    const inputRefTwo = createRef();
  
    const [isFocusedOne, setFocusOne] = useState(false);
    const [isFocusedTwo, setFocusTwo] = useState(false);
  
    const [textOne, setTextOne] = useState('');
    const [textTwo, setTextTwo] = useState('');

    const [fontLoaded] = useFonts({
        Figtree_300Light,
        Figtree_400Regular,
        Figtree_500Medium,
        Figtree_600SemiBold,
        Figtree_700Bold
    });

    if (!fontLoaded) {
        return null;
    }

    const toTop = {
        from: {
          top: 20
        },
        to: {
          top: -8,
        }
      };
    
      const toBottom = {
        from: {
          top: -8
        },
        to: {
          top: 20,
        }
      };

    return (
        <LinearGradient
            colors={['transparent', 'rgba(0,0,0,0.8)']}
            style={styles.background}
        >
            <View style={styles.container}>
                <View style={styles.main}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <AntDesign name="left" size={30} color='#fff'/>
                    </TouchableOpacity>
                    <Text style={ styles.title }>Vamos fazer o seu login.</Text>
                    <Text style={ styles.secondary }>Bem-vindo de volta. Sentimos sua falta!</Text>
                </View>
                <View style={styles.textBoxes}>
                    <View style={styles.textBox}>
                        <Animatable.Text
                            animation={isFocusedOne || textOne ? toTop : toBottom} 
                            duration={100} 
                            delay={0} 
                            style={isFocusedOne || textOne ? [styles.inputText, { top: -8 }] : styles.inputText} 
                            onPress={() => inputRefOne.current.focus()}>
                            E-mail
                        </Animatable.Text>
                        <TextInput
                            style={styles.input}
                            keyboardType='default'
                            onFocus={() => setFocusOne(true)}
                            onBlur={() => setFocusOne(false)}
                            onChangeText={newText => setTextOne(newText)}
                            ref={inputRefOne}
                        />
                    </View>
                    <View style={styles.textBox}>
                        <Animatable.Text 
                            animation={isFocusedTwo || textTwo ? toTop : toBottom} 
                            duration={100} 
                            delay={0} 
                            style={isFocusedTwo || textTwo ? [styles.inputText, { top: -8 }] : styles.inputText} 
                            onPress={() => inputRefTwo.current.focus()}>
                            Senha
                        </Animatable.Text>
                        <TextInput
                            style={styles.input}
                            keyboardType='default'
                            onFocus={() => setFocusTwo(true)}
                            onBlur={() => setFocusTwo(false)}
                            onChangeText={newText => setTextTwo(newText)}
                            ref={inputRefTwo}
                            secureTextEntry={true}
                        />
                    </View>
                </View>
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity style={styles.signinButton} onPress={() => navigation.navigate('Home')}>
                        <Text style={styles.signinText}>Entrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </LinearGradient>
    );
}
