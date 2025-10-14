import { Pressable, StyleSheet } from "react-native";

import AntDesign from "@expo/vector-icons/AntDesign";

function IconButton({ icon, color, size, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <AntDesign name={icon} color={color} size={size} />
    </Pressable>
  );
}

export default IconButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});
