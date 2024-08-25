import { Image } from "react-native";

export default function Logo({ width = 192, height = 209 }) {
  return (
    <Image
      source={require("../assets/logo.png")}
      style={{
        width: width,
        height: height,
      }}
    />
  );
}

export function LogoIcon({ size = 40 }) {
  return (
    <Image
      source={require("../assets/icon.png")}
      style={{
        width: size,
        height: size,
      }}
    />
  );
}
