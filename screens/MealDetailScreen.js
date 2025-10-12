import { Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";

function MealDetailScreen({ route }) {
  const mealId = route.params.mealId;
  const meal = MEALS.find((meal) => meal.id == mealId);

  return (
    <View>
      <Text>{meal.duration}</Text>
      <Text>{meal.complexity}</Text>
      <Text>{meal.steps}</Text>
    </View>
  );
}

export default MealDetailScreen;
