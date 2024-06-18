import { React, useState } from "react";
import { Text, View, Image, Pressable, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Entypo,
  FontAwesome,
  Ionicons,
  Feather,
  MaterialCommunityIcons,
  MaterialIcons,
  AntDesign,
} from "@expo/vector-icons";

import { LogoIcon } from "./LogoIcon";

export default function Navbar({ type = 0 }) {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.navbar}>
      <LinearGradient
        colors={["#000", "rgba(0,0,0,0)"]}
        locations={[0.6, 1]}
        style={styles.navbar}
      >
        <View style={styles.navigationMenu}>
          <Pressable onPress={() => navigation.toggleDrawer()}>
            <LogoIcon />
          </Pressable>
          <View style={{ flexDirection: "row", gap: 10 }}>
            {/* <Image
              source={require("../assets/search.svg")}
              style={{
                width: 40,
                height: 40,
              }}
            /> */}
            <Ionicons name="search-outline" size={40} color="#fff" />
            <Image
              source={require("../assets/dos4002.png")}
              style={{
                width: 40,
                height: 40,
                borderRadius: "100%",
              }}
            />
          </View>
        </View>
        {(type === 1 && <MovieFilters />) || <Filters />}
      </LinearGradient>
    </SafeAreaView>
  );
}

export function Filters() {
  return (
    <>
      <View style={styles.filtersMenu}>
        <Pressable style={styles.filter}>
          <Text style={styles.filterText}>Filmes</Text>
        </Pressable>
        <Pressable style={styles.filter}>
          <Text style={styles.filterText}>Séries</Text>
        </Pressable>
        <Pressable style={styles.filter}>
          <Text style={styles.filterText}>Categorias</Text>
        </Pressable>
      </View>
    </>
  );
}

export function MovieFilters() {
  const [showModal, setShowModal] = useState(true);

  return (
    <>
      <View style={[styles.filtersMenu, { justifyContent: "space-between" }]}>
        <Pressable onPress={() => setShowModal(true)}>
          <Text style={styles.bigTitle}>Filmes</Text>
        </Pressable>
        <Pressable style={styles.filter}>
          <Entypo name="chevron-down" size={30} color="#fff" />
          <Text style={styles.filterText}>Todas as categorias</Text>
        </Pressable>
      </View>

      {showModal && (
        <View style={styles.modal}>
          <Pressable
            onPress={() => navigation.navigate("SignIn")}
            style={styles.movieBanner}
          >
            <Text>Início</Text>
            <Text>Filmes</Text>
            <Text>Séries</Text>
          </Pressable>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  navbar: {
    gap: 20,
    position: "absolute",
    left: 0,
    top: 0,
    padding: 20,
    zIndex: 999,
    width: "100%",
  },
  navigationMenu: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  filtersMenu: {
    flex: 1,
    gap: 10,
    flexDirection: "row",
  },
  filter: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    border: "1px solid rgba(255,255,255,0.4)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    backgroundColor: "rgba(0,0,0,0.5)",
    flexDirection: "row",
    gap: 10,
  },
  bigTitle: {
    fontSize: 40,
    fontFamily: "Figtree-Semi",
    color: "white",
  },
  filterText: {
    fontFamily: "Figtree-Regular",
    color: "white",
    fontSize: 16,
  },
  menu: {
    backgroundColor: "#fff",
    width: "80%",
    gap: 20,
    position: "absolute",
    left: 0,
    top: 0,
    height: "100vh",
  },
  menuOption: {
    flexDirection: "row",
    gap: 40,
    alignItems: "center",
  },
  modal: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.8)",
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "100vh",
  },
});
