import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Header from "../components/Home/Header";
import Search from "../components/Home/Search";
import Category from "../components/Home/Category";

const Home = () => {
  return (
    <SafeAreaView className="bg-white">
      <ScrollView>
        <Header />
        <Search />
        <Category />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
