import {Text, View, StyleSheet, SafeAreaView, TouchableOpacity, FlatList, Image} from "react-native";
import tw from "tailwind-react-native-classnames";
import Icon from "react-native-vector-icons/FontAwesome";
import {useNavigation} from "@react-navigation/native";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {selectTravelTimeInformation} from "../../slices/navSlice";

const RideOptionsCard = () => {
    const navigation = useNavigation();
    const [selected, setSelected] = useState(null);
    const travelTimeInformation = useSelector(selectTravelTimeInformation);
    const costPerKm = 2;

    useEffect(() => {
        console.log("travelTimeInformation", travelTimeInformation);
    }, [travelTimeInformation]);

    const data = [
        {
            id: "234",
            title: "UberX",
            multiplier: 1,
            image: "https://cdn-icons-png.flaticon.com/128/3097/3097136.png"
        },
        {
            id: "345",
            title: "Uber Premium",
            multiplier: 1.5,
            image: "https://cdn-icons-png.flaticon.com/128/744/744465.png"
        }
        ,
        {
            id: "3434",
            title: "Uber Black",
            multiplier: 2,
            image: "https://cdn-icons-png.flaticon.com/128/55/55283.png"
        }
    ]

    return (
        <SafeAreaView style={tw`bg-white flex-grow`}>
            <View>
                <TouchableOpacity style={tw`absolute top-5 left-5 p-1 rounded-full z-50`} onPress={() => navigation.navigate("NavigateCard")}>
                    <Icon size={18}
                          name="chevron-left"
                          color='black' />
                </TouchableOpacity>
                <Text style={tw`text-center py-5 text-xl`}>Select a ride {travelTimeInformation && travelTimeInformation?.distance.text}</Text>
            </View>
            <View>

                <FlatList data={data} keyExtractor={(item) => item.id} renderItem={({item : {title, image, multiplier, id}, item}) => {
                    return (
                        <TouchableOpacity style={tw`flex-row items-center justify-between px-10 ${selected && id === selected.id ? "bg-gray-200" : ""}`}

                                          onPress={() => {
                                              setSelected(item);
                                          }}
                        >
                            <Image style={{
                                width: 50,
                                height: 50,
                                resizeMode: "contain"
                            }}
                            source={{
                                uri: image
                            }}
                            />
                            <View style={tw`-ml-6`}>
                                <Text style={tw`text-xl font-semibold`}>{title}</Text>
                                <Text>Travel time  {travelTimeInformation && travelTimeInformation?.duration.text}</Text>
                            </View>
                            <Text style={tw`text-xl`}>{travelTimeInformation && (new Intl.NumberFormat("en-gb", {
                                style: "currency",
                                currency: "GBP"
                            }).format(travelTimeInformation?.distance?.value * costPerKm * multiplier / 1000))}</Text>
                        </TouchableOpacity>
                    )
                }} />
            </View>
            <View>
                <TouchableOpacity style={tw`bg-black py-3 m-3  ${!selected && "bg-gray-300"}`} disabled={!selected}>
                    <Text style={tw`text-center text-white text-xl`}>Choose ${selected?.title}</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default RideOptionsCard;

const styles = StyleSheet.create({});
