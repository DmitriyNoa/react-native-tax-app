import {Text, View, StyleSheet, TouchableOpacity, SafeAreaView, TextInput} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import tw from "tailwind-react-native-classnames";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {setAuth} from "../slices/loginSlice";
import {CustomTextInput} from "../components/TextInput";
import {useNavigation} from "@react-navigation/native";

const storeAuth = async (value) => {
    try {
        await AsyncStorage.setItem('auth', value)
    } catch (e) {
        // saving error
    }
}

const FoodScreen = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const handleChange = (text, input) => {

        switch (input) {
            case "login":
                setLogin(text)
                break;
            case "password":
                setPassword(text);
                break;
            default:
        }
    }

    const handleLogin = async () => {
        const auth = "adsfsdfsddfsdf";

        await storeAuth(auth);
        dispatch(setAuth(auth));
    };

    return (
        <SafeAreaView style={tw`flex-1 justify-center`}>
            <View style={tw`p-5`}>
                <View style={tw`mb-5`}>
                    <CustomTextInput placeholder="Username"  value={login} onChange={(text) => handleChange(text, "login")}  />
                </View>
                <View style={tw`mb-5`}>
                    <CustomTextInput placeholder="Password"  value={password} onChange={(text) => handleChange(text, "password")}  />
                </View>
                <TouchableOpacity style={tw`ml-5 mr-5 bg-black ${(!login || !password) && "bg-gray-200" }`}
                                  onPress={handleLogin}
                                  disabled={!login && !password}>
                    <Text style={tw`text-white text-xl font-semibold text-center p-2`}>Login</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity
                                  onPress={() => navigation.navigate("Register")}
                                  >
                    <Text style={tw`text-xl font-semibold text-center p-2`}>Register</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default FoodScreen;

const styles = StyleSheet.create({});
