import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { useFonts, Figtree_300Light, Figtree_400Regular, Figtree_500Medium, Figtree_600SemiBold, Figtree_700Bold } from '@expo-google-fonts/figtree';

import styles from './style';

export default function Index() {
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
                <View style={styles.mainContainer}>
                    <Image source={require('../../assets/logo.png')} style={styles.logo} />
                    <Text style={styles.mainText}>A plataforma de filmes perfeita.</Text>
                    <Text style={styles.secondaryText}>Algum texto convincente aqui.</Text>
                </View>
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity style={styles.signinButton} onPress={() => navigation.navigate('SignIn')}>
                        <Text style={styles.signinText}>Entrar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.signupButton} onPress={() => navigation.navigate('SignUp')}>
                        <Text style={styles.signupText}>Cadastrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </LinearGradient>
    );
}