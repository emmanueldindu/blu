import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import user from '../../assets/images/user.png'

const Details = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { item } = route.params;

  return (
    <SafeAreaView className="bg-white ">
      <View className="w-full flex-row px-6 h-[80px] bg-white justify-between">
        <View className="w-[50%] my-auto">
          <TouchableOpacity
            className="w-[40px] h-[40px] bg-white items-center rounded-2xl  justify-center "
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="chevron-back-outline" size={22} />
          </TouchableOpacity>
        </View>

        <View className="flex-row my-auto gap-x-4">
          <TouchableOpacity className="w-[40px] h-[40px] bg-white items-center rounded-2xl flex-row justify-center ">
            <Ionicons name={"share-social-outline"} color={"#000"} size={23} />
          </TouchableOpacity>

          <TouchableOpacity className="w-[40px] h-[40px] bg-white items-center rounded-2xl flex-row justify-center ">
            <Ionicons name={"bookmark-outline"} color={"#000"} size={23} />
          </TouchableOpacity>
        </View>
      </View>

      <View className="w-full  h-[200px] flex-row justify-between p-6">
        <View className="w-[20%]">
          <Image source={item.img} className="w-16 h-16 rounded-full" />
          <View className="w-3 h-3 bg-white mt-[-14] items-center justify-center z-[100] mx-12 rounded-full">
            <View className="w-2 h-2 bg-[#00472B] rounded-full"></View>
          </View>
        </View>

        <View className="w-[80%] gap-[10px] grid">
          <Text className="text-[18px] tracking-wider font-[600]">{item.name}</Text>
          <Text className="text-[15px] leading-[18.9px] tracking-wider   font-[400] text-[#BEBEBE]">
            {item.role}
          </Text>
          <View className='flex-row  items-center text-center my-auto  '>
           <Ionicons
        name='person-outline'
        size={19}
        color='#00472B'
           />

           <Text className='text-[#8E8E93] text-[14px] mx-2 text-center'>{item.location} - 02:20pm local time</Text>

          </View>
          <View className='flex-row justify-between'>
            <View className='bg-[#00472B] items-center justify-center flex-row h-[28px] w-[105px] rounded-[20px]'>
<Ionicons
    name='flash-outline'
    color='#DBE64C'
    size={20}
/>
<Text className='text-[#DBE64C] text-[11px]'>Available now</Text>
            </View>

          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Details;
