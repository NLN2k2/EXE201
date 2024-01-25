import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import SplashWelcomeScreen from "./screen/splash-welcome";
import LoginScreen from "./screen/login";
import WelcomeScreen from "./screen/welcome";
import SignUpEmail from "./screen/sign-up/email";
import SignUpVerify from "./screen/sign-up/verify";
import SignUpPassword from "./screen/sign-up/password";
import ContactScreen from "./screen/contact";
import BasketScreen from "./screen/basket";
import { TitleHeader } from "./components/header/title-header";
import HomeNavigation from "./screen/home";
import { View } from "react-native";
import BookingScreen from "./screen/home/booking";
import CourseDetails from "./screen/home/course-details";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeNavigation"
          component={HomeNavigation}
          options={{ headerShown: false }}
        // options={{ headerTitle: () => <TitleHeader title="Your basket" /> }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Basket"
          component={BasketScreen}
          options={{
            headerTitle: () => <TitleHeader title="Your basket" />,
          }}
        />
        <Stack.Screen
          name="Contact"
          component={ContactScreen}
          options={{ headerTitle: "" }}
        />
        <Stack.Screen
          name="SignUp-Email"
          component={SignUpEmail}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp-Password"
          component={SignUpPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp-Verify"
          component={SignUpVerify}
          options={{ headerShown: false }}
        /> 
        <Stack.Screen
          name="jjjjgj"
          component={BookingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="course-details"
          component={CourseDetails}
/>



      </Stack.Navigator>
    </NavigationContainer>
  );
}
