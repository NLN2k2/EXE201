import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeScreen from "./home";
import { TitleHeader } from "../../components/header/title-header";
import BookingScreen from "./booking";
import BookingDetailScreen from "./booking-detail";

const Stack = createNativeStackNavigator();
export default function HomeNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="BookingDetail"
        component={BookingDetailScreen}
        options={{ headerTitle: () => <TitleHeader title="Booking Detail" /> }}
      />
      <Stack.Screen
        name="Booking"
        component={BookingScreen}
        options={{ headerTitle: () => <TitleHeader title="Booking" /> }}
      />
    </Stack.Navigator>
  );
}
