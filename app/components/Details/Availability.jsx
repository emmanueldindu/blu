import { View, Text, TouchableOpacity, FlatList, Dimensions } from 'react-native'
import React, {useState, useRef} from 'react'
import { Calendar } from 'react-native-calendars';
import RBSheet from 'react-native-raw-bottom-sheet';
import { Ionicons } from '@expo/vector-icons';

const Availability = () => {
    const [selected, setSelected] = useState("");
    const times = ["01:00 AM", "02:00 AM", "03:00 AM"];
    const refRBSheet = useRef();

    const screenHeight = Dimensions.get('window').height;
    const sheetHeight = screenHeight * 0.85;
  
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

    <TouchableOpacity onPress={() => refRBSheet.current.open()} className='w-[95%] h-[48px] items-center justify-center rounded-[30px] mt-5 bg-[#00472B] mx-auto' >
        <Text className='text-white'>Book a call</Text>
    </TouchableOpacity>
    <RBSheet
        ref={refRBSheet}
        height={sheetHeight}
        openDuration={250}
        customStyles={{
          container: {
            // justifyContent: "center",
            // alignItems: "center",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20
          }
        }}
      >
<View className='p-4 flex gap-x-3 '>
  <TouchableOpacity onPress={() =>	refRBSheet.current.close()} className='flex-row gap-x-1 mt-4' >
    <Ionicons
    name='chevron-back-outline'
    size={19}
    />
    <Text>cancel</Text>

</TouchableOpacity>


</View>
      </RBSheet>
  </View>
  )
}

export default Availability