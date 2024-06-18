import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "#000",
    flex: 1,
    display: "flex",
    alignItems: "center",
    paddingVertical: 60,
    paddingHorizontal: 40,
  },
  logo: {
    width: 192,
    height: 209,
  },
  content: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  h1: {
    fontSize: 40,
    fontWeight: "700",
    color: "#fff",
    textAlign: "center",
    fontFamily: "Figtree-Bold",
  },
  text: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
    marginTop: 20,
    fontFamily: "Figtree-Light",
  },
  buttons: {
    flexDirection: "row",
    height: 60,
    width: "100%",
    position: "relative",
  },
  signinButton: {
    backgroundColor: "#E50914",
    borderRadius: 15,
    width: "52%",
    justifyContent: "center",
    alignItems: "center",
  },
  signupButton: {
    flex: 1,
    backgroundColor: "#181818",
    position: "absolute",
    borderRadius: 15,
    right: 0,
    bottom: 0,
    width: "55%",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    zIndex: -1,
  },
  buttonText: {
    fontWeight: "600",
    fontSize: 18,
    color: "#fff",
    fontFamily: "Figtree-Semi",
  },
});
