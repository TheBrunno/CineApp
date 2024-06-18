import { React } from "react";
import { Text, View, Image, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import styles from "./style";
import { LogoIcon } from "../../components/LogoIcon";

export default function Devs() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Pressable style={styles.icon} onPress={() => navigation.toggleDrawer()}>
        <LogoIcon size={50} />
      </Pressable>
      <Text style={styles.title}>Quem está desenvolvendo?</Text>
      <View style={styles.devsGrid}>
        <View style={styles.dev}>
          <View style={styles.person}>
            <Image
              source={require("../../assets/westwitt.png")}
              style={styles.profile}
            />
            <Text style={styles.name}>Westwitt</Text>
          </View>
          <View style={styles.person}>
            <Image
              source={require("../../assets/thebrunno.png")}
              style={styles.profile}
            />
            <Text style={styles.name}>TheBrunno</Text>
          </View>
        </View>
        <View style={styles.dev}>
          <View style={styles.person}>
            <Image
              source={require("../../assets/souzasantosk.png")}
              style={styles.profile}
            />
            <Text style={styles.name}>SouzaSantosK</Text>
          </View>
          <View style={styles.person}>
            <Image
              source={require("../../assets/dos4002.png")}
              style={styles.profile}
            />
            <Text style={styles.name}>DOS4002</Text>
            <AntDesign
              style={styles.loading}
              name="loading1"
              size={50}
              color="#fff"
            />
          </View>
        </View>
      </View>
    </View>
  );
}
