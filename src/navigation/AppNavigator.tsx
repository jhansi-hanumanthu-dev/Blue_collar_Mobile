import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LanguageScreen from "../screens/LanguageScreen";
import CategoryScreen from "../screens/CategoryScreen";
import JobListScreen from "../screens/JobListScreen";
import JobDetailScreen from "../screens/JobDetailScreen";
import { RootStackParamList } from "../types/navigation";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Language" component={LanguageScreen} />
        <Stack.Screen name="Category" component={CategoryScreen} />
        <Stack.Screen name="Jobs" component={JobListScreen} />
        <Stack.Screen name="Detail" component={JobDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
