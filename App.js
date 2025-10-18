import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import CategoryScreen from "./screens/Category";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { Provider } from "react-redux";
import { store } from "./store/redux/store";
// import FavotitesContextProvider from "./store/context/favorites-context";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#521c1cff" },
        headerTintColor: "white",
        sceneStyle: {
          backgroundColor: "#5a3b3bff",
        },
        drawerContentContainerStyle: { backgroundColor: "#521c1cff", flex: 1 },
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: "#351401",
        drawerActiveBackgroundColor: "#e4bba1",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoryScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => (
            <AntDesign name="unordered-list" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <AntDesign name="star" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.root}>
        <StatusBar style="light" />
        {/* <FavotitesContextProvider> */}
        <Provider store={store}>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerStyle: { backgroundColor: "#521c1cff" },
                headerTintColor: "white",
                contentStyle: {
                  backgroundColor: "#572f2fff",
                },
              }}
            >
              <Stack.Screen
                options={{
                  headerShown: false,
                }}
                name="drawer"
                component={DrawerNavigator}
              />
              <Stack.Screen
                name="mealsOverview"
                component={MealsOverviewScreen}
                // options={({ route, navigation }) => {
                //   const catId = route.params.categoryId;
                //   return { title: catId };
                // }}
              />
              <Stack.Screen
                name="mealDetail"
                component={MealDetailScreen}
                // options={({ route, navigation }) => {
                //   const catId = route.params.categoryId;
                //   return { title: catId };
                // }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </Provider>
        {/* </FavotitesContextProvider> */}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
