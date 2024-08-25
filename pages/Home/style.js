import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "#000",
    gap: 60,
    paddingBottom: 40,
    position: "relative",
    paddingTop: 25,
  },
  hero: {
    paddingHorizontal: 20,
    paddingVertical: 40,
    height: 750,
    position: "relative",
    justifyContent: "flex-end",
  },
  heroContent: {
    gap: 20,
  },
  h1: {
    fontFamily: "Figtree-Bold",
    fontSize: 70,
    color: "#fff",
  },
  tags: {
    flexDirection: "row",
    gap: 10,
  },
  tag: {
    fontSize: 16,
    color: "#808080",
    fontFamily: "Figtree-Semi",
  },
  description: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "Figtree-Light",
  },
  actionButtons: {
    flex: 1,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  actionButtonsText: {
    fontFamily: "Figtree-Bold",
    fontSize: 16,
  },
  carrossel: {
    gap: 20,
    marginHorizontal: 20,
  },
  categoryTitle: {
    fontFamily: "Figtree-Bold",
    color: "#fff",
    fontSize: 30,
  },
  movieBanner: {
    width: 200,
    height: 300,
    borderRadius: 15,
    overflow: "hidden",
  },
});
