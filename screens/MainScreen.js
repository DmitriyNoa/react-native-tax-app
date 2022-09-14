import {useDispatch, useSelector} from "react-redux";
import {selectAuth, setAuth} from "../slices/loginSlice";
import {useEffect, useState} from "react";
import AppStack from "./AppStack";
import AuthStack from "./AuthStack";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {TouchableOpacity, View} from "react-native";
import tw from "tailwind-react-native-classnames";
import {Text} from "@rneui/base";


const MainScreen = () => {
    const auth = useSelector(selectAuth);
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(null);

    const getAuth = async () => {
        setIsLoading(true);
        try {
            const value = await AsyncStorage.getItem('auth')
            if(value !== null) {
                if(value!==null && !auth) {
                    dispatch(setAuth(value));
                }
                return value;
            }
        } catch(e) {
            // error reading value
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        getAuth();
    }, [])

    return (
        <>
            {
                isLoading && (
                    <View style={tw`bg-white flex-1 h-full absolute top-0 left-0 z-50 w-full justify-center`}>
                        <Text style={tw`text-xl text-center`}>Loading</Text>
                    </View>
                )
            }
                {
                    auth ? (
                        <AppStack />
                    ): (
                        <AuthStack />
                    )
                }

                <TouchableOpacity onPress={() => {
                    AsyncStorage.clear();
                }}><Text>Logout</Text></TouchableOpacity>
        </>
    )
}

export default MainScreen;
