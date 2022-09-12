import {Text, View, StyleSheet, FlatList, TouchableOpacity} from "react-native";
import tw from "tailwind-react-native-classnames";
import Icon from "react-native-vector-icons/Ionicons";

const data = [
    {
        id: "123",
        icon: "home",
        location: {
            lat: "",
            lng: ""
        },
        title: "Home",
        description: "Homestr. 8"
    },
    {
        id: "234",
        icon: "briefcase",
        location: {
            lat: "",
            lng: ""
        },
        title: "Work",
        description: "Hackerstr. 8"
    }
]

const NavFavorites = () => {
    return (
        <View>
            <Text style={tw`text-center text-lg font-semibold`}>Favorite places</Text>
            <FlatList ItemSeparatorComponent={() => <View style={styles.separator} />} data={data} keyExtractor={(item) => item.id} renderItem={({item: {icon, title, description}}) => {
                return (
                    <TouchableOpacity style={[{flexDirection: "row", alignContent: "space-around", alignItems: "center"}, tw`p-2`]}>
                      <Icon size={18} style={tw`p-2 rounded-full w-10`}
                                                       name={icon}
                                                       color='black' />
                        <View>
                            <Text style={tw`font-semibold`}>{title}</Text>
                            <Text>{description}</Text>
                        </View>
                    </TouchableOpacity>
                )
            }} />
        </View>
    )
}

export default NavFavorites;

const styles = StyleSheet.create({
    separator: {
        backgroundColor: "#000",
        height: 0.5
    }
});
