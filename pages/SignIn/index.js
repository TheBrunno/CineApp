import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useFonts, Figtree_300Light, Figtree_400Regular, Figtree_500Medium, Figtree_600SemiBold, Figtree_700Bold } from '@expo-google-fonts/figtree';

import styles from './style';

export default function SignIn() {
    const navigation = useNavigation();

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
                        <Text style={ styles.inputText }>E-mail</Text>
                        <TextInput
                        style={styles.input}
                        keyboardType='default'
                        />
                    </View>
                    <View style={styles.textBox}>
                        <Text style={ styles.inputText }>Senha</Text>
                        <TextInput
                        style={styles.input}
                        keyboardType='default'
                        secureTextEntry={true}
                        />
                    </View>
                </View>
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity style={styles.signinButton}>
                        <Text style={styles.signinText}>Entrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </LinearGradient>
    );
}