import React from "react";
import { Image } from "react-native";

const ImageIcon = ({ source, size, color }) => {
  return (
    <Image
      source={source}
      style={{
        width: size,
        height: size,
      }}
    />
  );
};

export default ImageIcon;
