import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import CategoryScreen from "./screens/Category";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#360b0bff" },
            headerTintColor: "white",
            contentStyle: {
              backgroundColor: "#4b1010ff",
            },
            headerBlurEffect: "extraLight",
            headerShadowVisible: true,
          }}
        >
          <Stack.Screen
            options={{
              title: "All Categories",
            }}
            name="Categories"
            component={CategoryScreen}
          />
          <Stack.Screen
            name="mealsOverview"
            component={MealsOverviewScreen}
            // options={({ route, navigation }) => {
            //   const catId = route.params.categoryId;
            //   return { title: catId };
            // }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
