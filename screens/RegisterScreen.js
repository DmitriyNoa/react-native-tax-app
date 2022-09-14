import {Text, View, StyleSheet, SafeAreaView, TouchableOpacity} from "react-native";
import { CustomTextInput} from "../components/TextInput";
import tw from "tailwind-react-native-classnames";

const RegisterScreen = () => {
    const handleRegister = async () => {

    }
    return (
        <SafeAreaView style={tw`flex-1 justify-center`}>
            <View style={tw`p-5`}>
                <View style={tw`mb-5`}>
                    <CustomTextInput placeholder="username" />
                </View>
                <View style={tw`mb-5`}>
                    <CustomTextInput placeholder="email" />
                </View>
                <View style={tw`mb-5`}>
                    <CustomTextInput placeholder="password" />
                </View>
                <View style={tw`mb-5`}>
                    <CustomTextInput placeholder="confirmPassword" />
                </View>
                <View style={tw`mb-5`}>
                    <TouchableOpacity style={tw`ml-5 mr-5 bg-black`}
                                      onPress={handleRegister}>
                        <Text style={tw`text-white text-xl font-semibold text-center p-2`}>Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default RegisterScreen;

const styles = StyleSheet.create({});
