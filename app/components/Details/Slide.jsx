import { View, Text } from 'react-native'
import React, {useState} from 'react'
import { TouchableOpacity } from 'react-native'
import { Calendar } from "react-native-calendars";
import Availability from './Availability'
import Reviews from './Reviews'
import About from './About'
const Slide = () => {


    const [activeTab, setActiveTab] = useState("Availability");
    const renderContent = () => {
        switch (activeTab) {
          case "Availability":
            return (
            <Availability />
            );
          case "Reviews":
            return (
            <Reviews />
            );
          case "About":
            return (
              <About /> 
            );
          default:
            return null;
        }
      };



  return (
    <View>
  <View
     style={{
       flexDirection: "row",
       justifyContent: "space-around",
       borderBottomWidth: 1,
       borderBottomColor: "#e0e0e0",
     }}
   >
     {["Availability", "Reviews", "About"].map((tab) => (
       <TouchableOpacity
         key={tab}
         onPress={() => setActiveTab(tab)}
         style={{
           paddingVertical: 10,
           borderBottomWidth: 2,
           borderBottomColor: activeTab === tab ? "green" : "transparent",
         }}
       >
         <Text
           style={{
             color: activeTab === tab ? "black" : "gray",
             fontWeight: "400",
           }}
         >
           {tab}
         </Text>
       </TouchableOpacity>
     ))}
 </View>

   {/* Tab Content */}
   <View style={{ flex: 1 }}>{renderContent()}</View>
    </View>
  )
}

export default Slide