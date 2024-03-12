import { StatusBar } from 'expo-status-bar';
import React, { useState, createRef } from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useFonts, Figtree_300Light, Figtree_400Regular, Figtree_500Medium, Figtree_600SemiBold, Figtree_700Bold } from '@expo-google-fonts/figtree';
import * as Animatable from 'react-native-animatable';
import creditCardType from 'credit-card-type';

import styles from './style';

export default function SignUp() {
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
                            onChangeText={newText => {
                                setTextOne(newText)
                                let cards = creditCardType(textOne)

                                for(let card of cards){
                                    console.log(card.niceType)
                                }
                                console.log('-------')
                            }}
                            ref={inputRefOne}
                        />
                    </View>
                </View>
            </View>
        </LinearGradient>
    );
}
