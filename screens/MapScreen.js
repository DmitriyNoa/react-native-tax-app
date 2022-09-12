import {Text, View, StyleSheet, KeyboardAvoidingView, Platform} from "react-native";
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps'
import {selectDestination, selectOrigin} from "../slices/navSlice";
import tw from "tailwind-react-native-classnames";
import {useSelector} from "react-redux";
import NavigateCard from "./cards/NavigateCard";
import {G_KEY} from "@env"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RideOptionsCard from "./cards/RideOptionsCard";
import MapViewDirections from "react-native-maps-directions";
import {useEffect, useRef} from "react";

const Stack = createNativeStackNavigator();

const MapScreen = () => {
    const origin = useSelector(selectOrigin)
    const destination = useSelector(selectDestination)
    const mapRef = useRef(null);

    useEffect(() => {
        if(origin && destination) {
            mapRef.current.fitToSuppliedMarkers(["origin", "destination"], {
                edgePadding: { top: 50, right: 50, bottom: 50, left: 50 }
            });
        }
    }, [origin, destination])

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0} style={{flex: 1}}>
            <View style={tw`h-full`}>
                <View style={tw`h-1/2`}>
                    <MapView
                        ref={mapRef}
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
                                }}
                                        title="Origin"
                                        identifier="origin"
                                />
                            </>
                        )}

                        { destination && (
                            <>
                                <Marker coordinate={{
                                    latitude: destination.location.lat,
                                    longitude: destination.location.lng
                                }}

                                        title="Destination"
                                        identifier="destination"
                                />
                            </>
                        )}

                        {
                            destination && origin && (
                                <MapViewDirections
                                    strokeWidth={3}
                                    strokeColor="hotpink"
                                    origin={{
                                        latitude: origin.location.lat,
                                        longitude: origin.location.lng,
                                    }}
                                    destination={{
                                        latitude: destination.location.lat,
                                        longitude: destination.location.lng,
                                    }}
                                    apikey={G_KEY}
                                />
                            )
                        }
                    </MapView>
                    <View style={tw`h-full`}>
                        <Stack.Navigator initialRouteName="NavigateCard">
                            <Stack.Screen name="NavigateCard" component={NavigateCard} options={{
                                headerShown: false
                            }} />
                            <Stack.Screen name="RideOptionsCard" component={RideOptionsCard} options={{
                                headerShown: false
                            }} />
                        </Stack.Navigator>
                    </View>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

export default MapScreen;

const styles = StyleSheet.create({});
