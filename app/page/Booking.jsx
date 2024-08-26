import { View, Text, ScrollView, SafeAreaView } from "react-native";
import React from "react";
import Header from "../components/Details/Header";
import Layout from "../components/Details/Layout";
import Slide from "../components/Details/Slide";

const Booking = () => {
  return (
    <SafeAreaView className='w-full bg-white h-full'>
      <ScrollView>
        <Header />
 
        <Slide />

      </ScrollView>
    </SafeAreaView>
  );
};

export default Booking;
