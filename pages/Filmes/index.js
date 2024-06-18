import { React, useState } from "react";
import {
  Text,
  View,
  Image,
  Pressable,
  FlatList,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import styles from "./style";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Entypo,
  FontAwesome,
  Ionicons,
  Feather,
  MaterialCommunityIcons,
  AntDesign,
} from "@expo/vector-icons";
import style from "./style";
import Navbar from "../../components/Navbar";

export default function Home() {
  const navigation = useNavigation();

  const [images, setImages] = useState([
    require("../../assets/breakingBad.png"),
    require("../../assets/gambit.jpg"),
    require("../../assets/squid.jpg"),
  ]);

  const [moreImages, setMoreImages] = useState([
    require("../../assets/saul.png"),
    require("../../assets/blackmirror.jpg"),
    require("../../assets/squid.jpg"),
    require("../../assets/orange.jpg"),
    require("../../assets/wednesday.jpg"),
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <Navbar type={1} />
      <View style={styles.hero}>
        <ImageBackground
          source={require("../../assets/blackclover.jpg")}
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            left: 0,
            top: 0,
          }}
        >
          <LinearGradient
            colors={["rgba(0,0,0,0)", "#000"]}
            locations={[0.4, 0.8]}
            style={{
              flex: 1,
            }}
          />
        </ImageBackground>
        <View style={styles.heroContent}>
          <Text style={styles.h1}>Black Clover</Text>

          <View style={styles.tags}>
            <Text style={styles.tag}>Animes</Text>
            <Text style={styles.tag}>Lançamento</Text>
            <Text style={styles.tag}>2h 35m</Text>
          </View>

          <Text style={styles.description}>
            Alguma sinopse interessante aqui que faça você querer assistir essa
            série
          </Text>

          <View style={{ flexDirection: "row", gap: 10 }}>
            <View style={[styles.actionButtons, { backgroundColor: "#fff" }]}>
              <Pressable>
                <Text style={styles.actionButtonsText}>Assistir</Text>
              </Pressable>
            </View>
            <View
              style={[
                styles.actionButtons,
                { backgroundColor: "rgba(255,255,255,0.1)" },
              ]}
            >
              <Pressable>
                <Text style={[styles.actionButtonsText, { color: "#fff" }]}>
                  Minha Lista
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.carrossel}>
        <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
          <Text style={styles.categoryTitle}>Lançamentos</Text>
          <AntDesign name="like1" size={30} color="#fff" />
        </View>
        <FlatList
          horizontal={true}
          data={images}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ alignItems: "center", flex: 1, gap: 10 }}
          renderItem={({ item }, index) => (
            <Pressable
              onPress={() => navigation.navigate("SignIn")}
              style={styles.movieBanner}
            >
              <Image
                source={item}
                key={index}
                style={{ flex: 1, resizeMode: "cover" }}
              />
            </Pressable>
          )}
        />
      </View>

      <View style={styles.carrossel}>
        <Text style={styles.categoryTitle}>Só no CineApp</Text>
        <FlatList
          horizontal={true}
          data={moreImages}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ alignItems: "center", flex: 1, gap: 20 }}
          renderItem={({ item }, index) => (
            <Pressable
              onPress={() => navigation.navigate("SignIn")}
              style={[styles.movieBanner, { width: 390, height: 600 }]}
            >
              <Image
                source={item}
                key={index}
                style={{ flex: 1, resizeMode: "cover" }}
              />
            </Pressable>
          )}
        />
      </View>
    </SafeAreaView>
  );
}
