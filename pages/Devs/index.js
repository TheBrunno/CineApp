import { StatusBar } from 'expo-status-bar';
import { React } from 'react';
import { Text, View, Image, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { useFonts, Figtree_300Light, Figtree_400Regular, Figtree_500Medium, Figtree_600SemiBold, Figtree_700Bold } from '@expo-google-fonts/figtree';
import styles from './style';

export default function Devs() {
    const navigation = useNavigation();

    const [fontLoaded] = useFonts({
        Figtree_300Light,
        Figtree_400Regular,
        Figtree_500Medium,
        Figtree_600SemiBold,
        Figtree_700Bold
    });

    return (
        <View style={styles.container}>
            <View style={styles.navContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <AntDesign name="left" size={40} color='#fff'/>
                </TouchableOpacity>
                <Image source={require('../../assets/logo2.png')} style={styles.logo} />
            </View>
            <View style={styles.mainContainer}>
                <Text style={styles.title}>
                    Quem está desenvolvendo?
                </Text>
                <View style={styles.devContainer}>
                    <View style={styles.dev}>
                        <View style={styles.person}>
                            <Image source={require('../../assets/westwitt.png')} style={styles.profile} />
                            <Text style={styles.name}>Westwitt</Text>
                        </View>
                        <View style={styles.person}>
                            <Image source={require('../../assets/thebrunno.png')} style={styles.profile} />
                            <Text style={styles.name}>TheBrunno</Text>
                        </View>
                    </View>
                    <View style={styles.dev}>
                        <View style={styles.person}>
                            <Image source={require('../../assets/souzasantosk.png')} style={styles.profile} />
                            <Text style={styles.name}>SouzaSantosK</Text>
                        </View>
                        <View style={styles.person}>
                            <Image source={require('../../assets/dos4002.png')} style={styles.profile} />
                            <Text style={styles.name}>DOS4002</Text>
                            <MaterialCommunityIcons name="restore" size={90} color='#fff' style={styles.iconDiego} />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}