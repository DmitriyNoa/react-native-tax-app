import {Text, View, StyleSheet} from "react-native";
import HomeScreen from "./HomeScreen";
import MapScreen from "./MapScreen";
import FoodScreen from "./FoodScreen";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import LoginScreen from "./LoginScreen";
import RegisterScreen from "./RegisterScreen";
const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator  initialRouteName={"Login"}>
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Register" component={RegisterScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AuthStack;

const styles = StyleSheet.create({});
