import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Header from "../components/Home/Header";
import Search from "../components/Home/Search";
import Category from "../components/Home/Category";
import DoctorList from "../components/Home/DoctorList";

const Home = () => {
  return (
    <SafeAreaView className="bg-white">
      <ScrollView className=''>
        <Header />
        <Search />
        <Category />
        <DoctorList />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
