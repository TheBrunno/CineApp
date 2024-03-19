import { StatusBar } from 'expo-status-bar';
import {React, useState} from 'react';
import { Text, View, Image, TouchableOpacity, FlatList} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
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
    const [images, setImages] = useState([
        require('../../assets/breakinglist.png'),
        require('../../assets/gambit.jpg'),
        require('../../assets/squid.jpg'),
      ]);

    const [ moreImages, setMoreImages] = useState([
        require('../../assets/saul.png'),
        require('../../assets/blackmirror.jpg'),
        require('../../assets/squid.jpg'),
        require('../../assets/orange.jpg'),
        require('../../assets/wednesday.jpg'),
      ]);

    if (!fontLoaded) {
        return null;
    }
    

    return (
        <View style={styles.container} >
            <View style={styles.imageContainer}>
                <LinearGradient
                    colors={['transparent', '#000']}
                    style={styles.linearGradientContainer}
                    >
                </LinearGradient>
                <View style={styles.nav}>
                    <View style={styles.navField}>
                        <View style={styles.navFieldSearch}>
                            <Feather name='search' size={20} color='rgb(255, 255, 255)'/>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.devs} onPress={() => navigation.navigate('Devs')}>
                        <MaterialIcons name='info' size={40} color='rgba(255, 255, 255, 0.8)'/>
                    </TouchableOpacity>
                </View>
                <Image source={require('../../assets/breaking.png')} style={styles.mainMovie}/>
                <View style={styles.infoMovie}>
                    <Text style={styles.mainMovieText}>
                        Breaking Bad
                    </Text>
                    <View style={styles.tags}>
                        <View style={styles.tag}>
                            <View style={styles.circle}></View>
                            <Text style={styles.tagText}>Ação</Text>
                        </View>
                        <View style={styles.tag}>
                            <View style={styles.circle}></View>
                            <Text style={styles.tagText}>Suspense</Text>
                        </View>
                        <View style={styles.tag}>
                            <View style={styles.circle}></View>
                            <Text style={styles.tagText}>Crime</Text>
                        </View>
                    </View>
                    <Text style={styles.synopsis}>
                    Um professor de química com cancêr de pulmão terminal junta-se a um ex-aluno para...
                    </Text>
                    <TouchableOpacity style={styles.watch}>
                        <Text style={styles.watchText}>Assistir</Text>
                    </TouchableOpacity>
                </View> 
            </View>
            <View style={styles.exclusives}>
                <Text style={styles.exclusiveTitle}>Exclusivos</Text>
                <View style={styles.exclusiveBox}>
                    <FlatList
                        horizontal={true}
                        style={styles.exclusiveList}
                        data={images}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ alignItems: 'center', flex: 1, gap: 10}}
                        renderItem={({item}, index) => (
                            <Image source={item} key={index} style={styles.exclusiveImg}/>
                        )}
                        ></FlatList>
                </View>
            </View>
            <View style={styles.watchmore}>
                <Text style={styles.exclusiveTitle}>Porque você assistiu 'Breaking Bad'</Text>
                <View style={styles.exclusiveBox}>
                    <FlatList
                        horizontal={true}
                        style={styles.moreList}
                        data={moreImages}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ alignItems: 'center', flex: 1, gap: 10}}
                        renderItem={({item}, index) => (
                            <Image source={item} key={index} style={styles.moreImg}/>
                        )}
                        ></FlatList>
                </View>
            </View>
        </View>
    );
}