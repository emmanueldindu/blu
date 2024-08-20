import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'

const Search = () => {
  return (
    <View className='px-7'>
    <View className="flex-row bg-[#F5F5F5]   content-center    rounded-3xl px-3 my-6 h-14 w-full">
          <TouchableOpacity className="my-auto">
            <Feather name="search" size={19} className="my-auto" />
          </TouchableOpacity>
          <View className="rounded-sm justify-start items-start">
            <TextInput
              className="w-full h-full px-2"
              placeholder="Search anything here"
            />
          </View>
          <View>
          
            </View>
          </View>
    </View>
  )
}

export default Search