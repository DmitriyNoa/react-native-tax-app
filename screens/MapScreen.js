import {Text, View, StyleSheet} from "react-native";
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps'
import {selectOrigin} from "../slices/navSlice";
import tw from "tailwind-react-native-classnames";
import {useSelector} from "react-redux";

const MapScreen = () => {
    const origin = useSelector(selectOrigin)

    return (
        <View style={tw`h-full`}>
            <View style={tw`h-1/2`}>
                <MapView
                    style={tw`h-full`}
                    provider={PROVIDER_GOOGLE}
                    initialRegion={origin && {
                        latitude: origin.location.lat,
                        longitude: origin.location.lng,
                        latitudeDelta: 0.05,
                        longitudeDelta: 0.05,
                    }}
                >
                    { origin && (
                        <>
                            <Marker coordinate={{
                                latitude: origin.location.lat,
                                longitude: origin.location.lng
                            }} />
                        </>
                    )}
                </MapView>
                <View style={tw`h-1/2`}>
                    {origin && <Text>{origin.description}</Text> }
                </View>
            </View>
        </View>
    )
}

export default MapScreen;

const styles = StyleSheet.create({});
