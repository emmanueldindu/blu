import { View, Text } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const Header = () => {
  return (
    <View className="w-full px-4">
        <View className="h-[60px] justify-between flex-row">
          <View className="w-[60%]  h-full p-4 grid">
            <Text className="text-[#BEBEBE] font-[300] text-sm">
              Your Location
            </Text>
            <Text className=" text-sm text-[400]">12th Ude Street, Nnewi</Text>
          </View>

          <View className="w-[40%] h-full items-center gap-x-5 justify-end  flex-row ">
            <Ionicons name="headset-outline" size={23} />

            <Ionicons name="notifications-outline" size={23} />
          </View>
        </View>
      </View>
  )
}

export default Header