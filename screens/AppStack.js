import {StyleSheet} from "react-native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import LoginScreen from "./LoginScreen";
import {NavigationContainer} from "@react-navigation/native";
import HomeScreen from "./HomeScreen";
import MapScreen from "./MapScreen";
import FoodScreen from "./FoodScreen";

const Stack = createNativeStackNavigator();
const AppStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator  initialRouteName={"Home"}>
                <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
                <Stack.Screen name="Map" component={MapScreen} />
                <Stack.Screen name="Food" component={FoodScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppStack;

const styles = StyleSheet.create({});
