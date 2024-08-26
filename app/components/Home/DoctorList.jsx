import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { doctors } from "../../../assets/data";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const DoctorList = () => {

    const navigation = useNavigation()

  return (
    <View className=" items-center gap-y-2 flex-wrap  justify-between p-4  flex-1 flex-row w-[100%] ">
      {doctors.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => navigation.navigate('Booking', {item})}
          className="rounded-2xl  h-[240px] grid mx-auto w-[45%]"
        >
          <Image
            source={item.img}
            className="h-[165px]  mt-1 w-[99%] rounded-xl mx-auto"
            resizeMode={"cover"}
          />

          <View className="w-full flex-row justify-between absolute z-[100]">
            <TouchableOpacity className="absolute z-[100] mt-3  mx-[134px] rounded-full items-center p-1 flex-row justify-center w-[35px]   h-8  bg-white  ">
              <Ionicons
                name={"heart-outline"}
                className="items-center"
                size={18}
                color={"#00472B"}
              />
            </TouchableOpacity>

            <TouchableOpacity className="absolute gap-x-1 mx-[5] items-center justify-center z-[100] mt-3 flex-row  rounded-2xl  items-center p-1 flex-row justify-center w-[45px]   h-[22px]  bg-white  ">
           
      
              <Ionicons
                name={"star"}
                className="items-center"
                size={14}
                color={"#00472B"}
              />

<Text className='text-[9px]'>{item.star}</Text>
            </TouchableOpacity>
          </View>
          <Text className="p-2 text-[13px] font-[600]">{item.name}</Text>
          <Text className="px-2 text-[#BEBEBE] text-[12px]">{item.role}</Text>
          <Text className="p-2 text-[12px]">₦ {item.price}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default DoctorList;
