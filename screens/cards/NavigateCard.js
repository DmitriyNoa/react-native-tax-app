import {Text, View, StyleSheet, SafeAreaView, TouchableOpacity} from "react-native";
import tw from "tailwind-react-native-classnames";
import {GooglePlacesAutocomplete} from "react-native-google-places-autocomplete";
import {setDestination, setOrigin} from "../../slices/navSlice";
import {G_KEY} from "@env"
import {useDispatch} from "react-redux";
import {useNavigation} from "@react-navigation/native";
import NavFavorites from "../../components/NavFavorites";
import Icon from "react-native-vector-icons/FontAwesome";

const NavigateCard = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    return (
        <SafeAreaView style={tw`flex-1 bg-white`}>
            <Text style={tw`text-center py-5 text-xl`}>Good morning Dmytro</Text>
            <View style={tw`border-t border-gray-200 flex-shrink`}>
                <View>
                    <GooglePlacesAutocomplete
                        placeholder='Where to'
                        onPress={(data, details = null) => {
                            // 'details' is provided when fetchDetails = true
                            dispatch(setDestination({location: details.geometry.location, description: data.description}));
                            navigation.navigate("RideOptionsCard")
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
                </View>
                <NavFavorites />
                <View style={tw`flex flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`}>
                    <TouchableOpacity style={tw`flex flex-row bg-black justify-between w-24 px-4 py-3 rounded-full`} onPress={() => navigation.navigate("RideOptionsCard")}>
                        <Icon name="car" color="white" size={16} />
                        <Text style={tw`text-white text-center`}>Rides</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={tw`flex flex-row bg-black justify-between w-24 px-4 py-3 rounded-full`}>
                        <Icon name="car" color="white" size={16} />
                        <Text style={tw`text-white text-center`}>Rides</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default NavigateCard;

const styles = StyleSheet.create({});
