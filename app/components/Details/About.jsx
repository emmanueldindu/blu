import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const About = () => {
  const routes = useRoute();
  const { item } = routes.params;
  return (
    <View className="p-4 px-6 mt-5">
      <View className="w-[95%] h-[125px] bg-[#F5F5F5] rounded-[20px] flex-row flex-row justify-between p-6 mx-auto items-center ">
        <View className="grid text-center gap-y-3 justify-center">
          <Text className="text-[30px] mx-auto leading-[37.8px]">{item.patients}</Text>
          <Text className="text-[#8E8E93] mx-auto text-[12px] ">patients</Text>
        </View>

        <View className="grid text-center  gap-y-3 justify-center">
          <Text className="text-[30px] mx-auto leading-[37.8px]">
            {item.experience}
          </Text>
          <Text className="text-[#8E8E93] mx-auto text-[12px] ">Yrs of experience</Text>
        </View>

        <View className="grid text-center gap-y-3 justify-center">
          <Text className="text-[30px] mx-auto leading-[37.8px]">{item.ratings}</Text>
          <Text className="text-[#8E8E93] text-[12px] mx-auto ">Ratings</Text>
        </View>
      </View>

      <View className="grid mt-8">
        <Text className="text-[#8E8E93] text-[16px]">Biography</Text>
        <Text className="text-[12px] mt-5 leading-[19.12px] spacing-2 ">
          {item.biography}
        </Text>
      </View>

      <View className="mt-5 grid">
        <View className="flex-row ">
          <Ionicons name="flash-outline" color="#8E8E93" size={19} />
          <Text className="text-[14px] mx-3 text-center">
            Family, Medicine, Physiotherapist
          </Text>
        </View>

        <View className="flex-row mt-2 ">
          <Ionicons name="location-outline" color="#8E8E93" size={19} />
          <Text className="text-[14px] mx-3 text-center">
            {item.location}
          </Text>
        </View>
      </View>

      <TouchableOpacity className='w-[95%]  h-[48px] items-center justify-center rounded-[30px] mt-12 bg-[#00472B] mx-auto' >
        <Text className='text-white'>Book a session </Text>
    </TouchableOpacity>
    </View>
  );
};

export default About;
