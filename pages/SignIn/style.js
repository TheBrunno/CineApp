import { StyleSheet } from "react-native";

export default StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "space-between",
  },
  backButton: {
    marginTop: 60,
    marginLeft: 40,
  },
  container: {
    backgroundColor: "rgba(0,0,0,0.9)",
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    paddingHorizontal: 40,
    paddingVertical: 60,
    justifyContent: "space-between",
    gap: 40,
  },
  h1: {
    fontSize: 32,
    fontFamily: "Figtree-Bold",
    color: "white",
  },
  text: {
    fontSize: 16,
    fontFamily: "Figtree-Light",
    color: "#808080",
  },
});
