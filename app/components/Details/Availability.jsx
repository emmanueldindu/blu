import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React, {useState} from 'react'
import { Calendar } from 'react-native-calendars';

const Availability = () => {
    const [selected, setSelected] = useState("");
    const times = ["01:00 AM", "02:00 AM", "03:00 AM"];
  return (
    <View style={{ flex: 1, padding: 20 }}>
    <Calendar
      onDayPress={(day) => {
        setSelected(day.dateString);
      }}
      style={{
        borderColor: "gray",
      }}
      markedDates={{
        [selected]: {
          selected: true,
          disableTouchEvent: true,
          selectedColor: "#00472B",
        },
      }}
      theme={{
        backgroundColor: "#ffffff",
        calendarBackground: "#ffffff",
        textSectionTitleColor: "#b6c1cd",
        selectedDayBackgroundColor: "#00adf5",
        selectedDayTextColor: "#ffffff",
        todayTextColor: "#00adf5",
        dayTextColor: "#2d4150",
        textDisabledColor: "gray",
      }}
    />
    <Text className="mt-4 px-4">Select Time</Text>
    <View className="mt-4 w-full justify-between flex-row">
      <FlatList
        data={times}
        horizontal
        renderItem={({ item }) => (
          <TouchableOpacity
            className="justify-center  items-center"
            style={{
              padding: 10,
              margin: 15,
              backgroundColor: "#F5F5F5",
              borderRadius: 10,
              height: 38,
              width: 100,
            }}
          >
            <Text className="text-[#8E8E93]">{item}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item}
      />
    </View>

    <TouchableOpacity className='w-[95%] h-[48px] items-center justify-center rounded-[30px] mt-5 bg-[#00472B] mx-auto' >
        <Text className='text-white'>Book a call</Text>
    </TouchableOpacity>
  </View>
  )
}

export default Availability