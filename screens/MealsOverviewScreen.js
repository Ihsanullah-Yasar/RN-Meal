import { View, Text } from "react-native";

function MealsOverviewScreen({ route }) {
  const categoryId = route.params.categoryId;
  return (
    <View>
      <Text>Meals overview screen - {categoryId}</Text>
    </View>
  );
}

export default MealsOverviewScreen;
