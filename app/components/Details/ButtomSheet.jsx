import { View, Text,  } from 'react-native'
import React, {useRef} from 'react'
import { TouchableOpacity, Image } from 'react-native'
import { Ionicons } from "@expo/vector-icons";
import paystack from "../../../assets/images/paystack.png";
import RBSheet from "react-native-raw-bottom-sheet";

const ButtomSheet = () => {
    const refRBSheet = useRef();
  return (
    <View className="p-4  ">
          <TouchableOpacity
            onPress={() => refRBSheet.current.close()}
            className="flex-row gap-x-1 mt-4"
          >
            <Ionicons name="chevron-back-outline" size={19} />
            <Text className="text-14px">Cancel</Text>
          </TouchableOpacity>
          <View className="p-4 mt-5">
            <Text className="text-[22px]">Confirm Booking</Text>
            <Text className="text-[#8E8E93] mt-3 leading-5 text-[16px] ">
              Double check your appointment detail before checking out
            </Text>
          </View>

          <View className="p-4">
            <View className="flex-row  w-full h-[80px] gap-x-3 ">
              <View className="justify-center">
                <Ionicons name="calendar-outline" size={19} color={"#8E8E93"} />
              </View>
              <View className="grid justify-center">
                <Text className="text-[16px] font-[700]">Date and time</Text>
                <Text className="mt-2 text-[16px] font-[500] text-[#8E8E93]">
                  20/05/2024 - 02:00 PM
                </Text>
              </View>
            </View>

            <View className="flex-row  w-full h-[80px] gap-x-3 ">
              <View className="justify-center">
                <Ionicons
                  name="notifications-outline"
                  size={22}
                  color={"#8E8E93"}
                />
              </View>
              <View className="grid justify-center">
                <Text className="text-[16px] font-[700]">Notify me </Text>
                <Text className="mt-2 text-[16px] font-[500] text-[#8E8E93]">
                  10 mins before
                </Text>
              </View>
            </View>

            <View className="flex-row  w-full h-[80px] gap-x-3 ">
              <View className="justify-center">
                <Ionicons name="location-outline" size={22} color={"#8E8E93"} />
              </View>
              <View className="grid justify-center">
                <Text className="text-[16px] font-[700]">Meeting Venue </Text>
                <Text className="mt-2 text-[16px] font-[500] text-[#8E8E93]">
                  Google Meet
                </Text>
              </View>
            </View>
          </View>

          <View className="p-4 ">
            <Text className="text-[20px] font-[600]">Payment Method</Text>
            <Text className="text-[#8E8E93] text-[16px] mt-2">
              Choose the method you want to use for this payment
            </Text>
            <View className="flex-row mt-4 w-full h-[80px] gap-x-3 ">
              <View className="justify-center">
                <View className="w-[45px] h-[35px] bg-[#F5F5F5] items-center justify-center rounded-[7px]">
                  <Image
                    source={paystack}
                    className="w-[23px] h-[23px] items-center justify-center "
                  />
                </View>
              </View>
              <View className="grid justify-center">
                <Text className="text-[16px] font-[700]">Paystack </Text>
                <Text className="mt-2 text-[16px] font-[500] text-[#8E8E93]">
                  Pay with transfer
                </Text>
              </View>
            </View>
          </View>

          <TouchableOpacity
    
        className="w-[95%] h-[48px] items-center justify-center rounded-[30px] mt-5 bg-[#00472B] mx-auto"
      >
        <Text className="text-white">Confirm booking</Text>
      </TouchableOpacity>
        </View>
  )
}

export default ButtomSheet