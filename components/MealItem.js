import { Image, Pressable, Text, View } from "react-native";

function MealItem({ title, iamgeUrl }) {
  return (
    <View>
      <Pressable>
        <View>
          <Image source={{ uri: iamgeUrl }} />
          <Text>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default MealItem;
