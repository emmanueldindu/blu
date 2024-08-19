import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather, Ionicons } from "@expo/vector-icons";
import Home from "../tabs/Home";
import Browse from "../tabs/Browse";
import Upcoming from "../tabs/Upcoming";
import Learn from "../tabs/Learn";
import Account from "../tabs/Account";


const Tab = createBottomTabNavigator();
const ButtonTab = () => {
  const screenOptions = {
    tabBarShowLabel: false,
    tabBarHideOnKeyboard: true,
    headerShown: false,
    tabBarStyle: {
      position: "absolute",
      bottom: 0,
      right: 0,
      left: 0,
      // marginBottom: 10,
      elevation: 0,
      height: 100,
      backgroundColor: "white", // Set the background color to black
      borderRadius: 0, // Set the top-left border radius
    },
  };

  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Feather
                // name={focused ? "home" : "home-outline"}
                name="home"
                size={24}
                color={focused ? "#00472B" : "#BEBEBE"}
              />
            );
          },
        }}
      ></Tab.Screen>


<Tab.Screen
        name="browse"
        component={Browse}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                // name={focused ? "home" : "home-outline"}
                name="apps"
                size={24}
                color={focused ? "#00472B" : "#BEBEBE"}
              />
            );
          },
        }}
      ></Tab.Screen>



<Tab.Screen
        name="upcoming"
        component={Upcoming}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                // name={focused ? "home" : "home-outline"}
                name="calendar-outline"
                size={24}
                color={focused ? "#00472B" : "#BEBEBE"}
              />
            );
          },
        }}
      ></Tab.Screen>



<Tab.Screen
        name="learn"
        component={Learn}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Feather
                // name={focused ? "home" : "home-outline"}
                name="book"
                size={24}
                color={focused ? "#00472B" : "#BEBEBE"}
              />
            );
          },
        }}
      ></Tab.Screen>



<Tab.Screen
        name="account"
        component={Account}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                // name={focused ? "home" : "home-outline"}
                name="person-outline"
                size={24}
                color={focused ? "#00472B" : "#BEBEBE"}
              />
            );
          },
        }}
      ></Tab.Screen>




    </Tab.Navigator>
  );
};

export default ButtonTab;
