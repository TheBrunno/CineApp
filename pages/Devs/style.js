import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "#000",
    flex: 1,
    padding: 20,
    justifyContent: "center",
    gap: 50,
  },
  icon: {
    position: "absolute",
    top: 20,
    left: 20,
  },
  title: {
    fontFamily: "Figtree-Semi",
    fontSize: 22,
    color: "#fff",
    textAlign: "center",
  },
  dev: {
    display: "flex",
    gap: 30,
    flexDirection: "row",
    marginHorizontal: "auto",
    position: "relative",
  },
  person: {
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  profile: {
    width: 160,
    height: 191,
  },
  name: {
    fontFamily: "Figtree-Regular",
    color: "#fff",
    fontSize: 16,
  },
  devsGrid: {
    gap: 20,
  },
  loading: {
    position: "absolute",
  },
});
