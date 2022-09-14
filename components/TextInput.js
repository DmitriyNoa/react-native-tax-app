import {TextInput} from "react-native";
import tw from "tailwind-react-native-classnames";

export const CustomTextInput = ({value, onChange, ...restProps}) => {
    return (
        <TextInput style={tw`bg-white p-3 text-xl`}  value={value} onTextInput={onChange} {...restProps}  />
    )
}
