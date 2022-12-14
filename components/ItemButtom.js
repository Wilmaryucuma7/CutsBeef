import React from "react";
import tw from "twrnc";
import { View, Text, Image, TouchableOpacity } from "react-native";

const ItemButtom = ({ text, onPress, color, image }) => {
    return (
        <TouchableOpacity
            style={[
                tw`flex flex-row justify-center items-center p-2 rounded-full w-full`,
                { backgroundColor: color },
            ]}
            onPress={onPress}
            activeOpacity={0.6}
        >
            <Text style={tw`text-center text-gray-900`}>{text}</Text>
        </TouchableOpacity>
    );
}

export default ItemButtom;