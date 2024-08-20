import { View, Text, Image } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import hospital from "../../../assets/images/hospital.png";
import record from "../../../assets/images/record.png";
import history from "../../../assets/images/history.png";

const Category = () => {
  return (
    <View className="p-4 h-[80px] w-full  items-center justify-between flex-row">
      <View className="grid gap-2 justify-center items-center ">
        <Ionicons name="heart-outline" size={20} />
        <Text className="text-xs font-[600]">Saved</Text>
      </View>

      <View className="grid gap-2 justify-center items-center ">
        <Image source={hospital} size={20} />
        <Text className="text-xs font-[600]">Hospitals</Text>
      </View>

      <View className="grid gap-2 justify-center items-center ">
        <Image source={record} size={20} />
        <Text className="text-xs font-[600]">Health Data</Text>
      </View>
      <View className="grid gap-2 justify-center items-center ">
        <Image source={history} size={20} />
        <Text className="text-xs font-[600]">History</Text>
      </View>
      
    </View>
  );
};

export default Category;
