import {View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity} from "react-native";
import tw from 'tailwind-react-native-classnames';
import NavOptions from "../components/NavOptions";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {G_KEY} from "@env"
import {useDispatch} from "react-redux";
import {setDestination, setOrigin} from "../slices/navSlice";
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Location from 'expo-location';
import NavFavorites from "../components/NavFavorites";

export const HomeScreen = () => {
    const dispatch = useDispatch();

    const getCurrentLocation = async () => {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status === 'granted') {
            let location = await Location.getCurrentPositionAsync({});
            dispatch(setOrigin({location: {
                    lat: location.coords.latitude,
                    lng: location.coords.longitude
                }, description: "cerrent location"}));

            console.log(location);
        }
    }

    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <View style={tw`p-5`}>
                <Image
                    style={styles.logo}
                    source={{
                    uri: "https://pngimg.com/uploads/taxi_logos/taxi_logos_PNG23.png"
                }} />
                <GooglePlacesAutocomplete
                    placeholder='Where from'
                    onPress={(data, details = null) => {
                        // 'details' is provided when fetchDetails = true
                        dispatch(setOrigin({location: details.geometry.location, description: data.description}));
                        dispatch(setDestination(null))
                    }}
                    nearbyPlacesAPI="GooglePlacesSearch"
                    fetchDetails={true}
                    minLength={2}
                    enablePoweredByContainer={false}
                    styles={{
                        container: {
                            flex: 0
                        },
                        textInput: {
                            fontSize: 18,
                        }
                    }}
                    debounce={400}
                    query={{
                        key: G_KEY,
                        language: 'en',
                    }}
                />
                <TouchableOpacity onPress={getCurrentLocation}>
                    <Icon style={tw`p-2 rounded-full w-10`}
                          name='location-arrow'
                          color='black' />
                </TouchableOpacity>

                <NavOptions />
                <NavFavorites />
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    text: {
        color: "blue"
    },
    logo: {
        width: 100,
        height: 50,
        alignSelf: "center",
        resizeMode: "contain"
    }
});
