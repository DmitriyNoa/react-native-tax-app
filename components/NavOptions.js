import { Icon } from "@rneui/themed";
import {FlatList, Image, Text, TouchableOpacity, View} from "react-native";
import tw from 'tailwind-react-native-classnames';
import {useNavigation} from "@react-navigation/native";

const data = [
    {
        id: "123",
        title: "Get a ride",
        image: "https://webstockreview.net/images/car-icon-png-1.png",
        screen: "Map",
    },
    {
        id: "456",
        title: "Order food",
        image: "http://cdn.onlinewebfonts.com/svg/download_499577.png",
        screen: "Food",
    }
]

const NavOptions = () => {
    const navigation = useNavigation();

    return (
        <View>
            <FlatList keyExtractor={(item) => item.id} data={data} horizontal renderItem={({item}) => {
                return (
                    <TouchableOpacity onPress={() => navigation.navigate(item.screen)} style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}>
                        <View>
                            <Image
                                style={{width: 120, height: 120, resizeMode: "contain"}}
                                source={{
                                uri: item.image
                            }} />
                        </View>
                        <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
                        <Icon style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                              name='arrowright'
                              type='antdesign'
                              color='white' />
                    </TouchableOpacity>
                )
            }} />
        </View>
    )
};

export default NavOptions;
