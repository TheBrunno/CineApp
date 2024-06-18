import { Image } from "react-native";

export default function Logo({ width = 192, height = 209 }) {
  return (
    <Image
      source={require("../assets/logo.svg")}
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
      source={require("../assets/icon.svg")}
      style={{
        width: size,
        height: size,
      }}
    />
  );
}
