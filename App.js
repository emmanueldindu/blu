import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ButtonTab from "./app/navigation/ButtonTab";
import Browse from "./app/tabs/Browse";
import Home from "./app/tabs/Home";
import Upcoming from "./app/tabs/Upcoming";
import Learn from "./app/tabs/Learn";
import Account from "./app/tabs/Account";
import Details from "./app/screens/Details";
import Booking from "./app/page/Booking";



// com.odoi.axvid
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ButtonTab"
          component={ButtonTab}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="Details"
          component={Details}
          options={{ headerShown: false }}
        ></Stack.Screen>

        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        ></Stack.Screen>

        <Stack.Screen
          name="Browse"
          component={Browse}
          options={{ headerShown: false }}
        ></Stack.Screen>

        <Stack.Screen
          name="Upcoming"
          component={Upcoming}
          options={{ headerShown: false }}
        ></Stack.Screen>

        <Stack.Screen
          name="Learn"
          component={Learn}
          options={{ headerShown: false }}
        ></Stack.Screen>

        <Stack.Screen
          name="Account"
          component={Account}
          options={{ headerShown: false }}
        ></Stack.Screen>

        <Stack.Screen
        name="Booking"
        component={Booking}
        options={{headerShown: false}}
        >

        </Stack.Screen>

        {/*  */}

        {/* 
        <Stack.Screen
          name="Details"
          component={Details}
          options={{ headerShown: false }}
        ></Stack.Screen> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
