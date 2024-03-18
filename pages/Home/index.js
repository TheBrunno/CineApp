import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { useFonts, Figtree_300Light, Figtree_400Regular, Figtree_500Medium, Figtree_600SemiBold, Figtree_700Bold } from '@expo-google-fonts/figtree';

import styles from './style';

export default function Home() {
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
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <LinearGradient
                    colors={['transparent', '#000']}
                    style={styles.linearGradientContainer}
                    >
                </LinearGradient>
                <Image source={require('../../assets/breaking.png')} style={styles.mainMovie}/>
                <View style={styles.infoMovie}>
                    <Text style={styles.mainMovieText}>
                        Breaking Bad
                    </Text>
                    <View style={styles.tags}>
                        <View style={styles.tag}>
                            <View style={styles.circle}></View>
                            <Text style={styles.tagText}>Tag 1</Text>
                        </View>
                        <View style={styles.tag}>
                            <View style={styles.circle}></View>
                            <Text style={styles.tagText}>Tag 2</Text>
                        </View>
                        <View style={styles.tag}>
                            <View style={styles.circle}></View>
                            <Text style={styles.tagText}>Tag 3</Text>
                        </View>
                    </View>
                    <Text style={styles.synopsis}>
                        Alguma sinopse interessante aqui que faça você querer assistir essa série.
                    </Text>
                    <TouchableOpacity style={styles.watch}>
                        <Text>Assitir</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}