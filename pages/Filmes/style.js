import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "#000",
    gap: 60,
    paddingBottom: 40,
    paddingHorizontal: 20,
    position: "relative",
    paddingTop: 160,
  },
  hero: {
    height: 600,
    position: "relative",
    justifyContent: "flex-end",
    border: "1px solid rgba(255,255,255,0.5)",
    borderRadius: 20,
    overflow: "hidden",
    padding: 20,
  },
  heroContent: {
    gap: 20,
  },
  h1: {
    fontFamily: "Figtree-Bold",
    fontSize: 50,
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
