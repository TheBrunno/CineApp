// fonts.js
import * as Font from "expo-font";
import {
  Figtree_300Light,
  Figtree_400Regular,
  Figtree_500Medium,
  Figtree_600SemiBold,
  Figtree_700Bold,
} from "@expo-google-fonts/figtree";

const loadFonts = async () => {
  await Font.loadAsync({
    "Figtree-Light": Figtree_300Light,
    "Figtree-Regular": Figtree_400Regular,
    "Figtree-Medium": Figtree_500Medium,
    "Figtree-Semi": Figtree_600SemiBold,
    "Figtree-Bold": Figtree_700Bold,
  });
};

export { loadFonts };
