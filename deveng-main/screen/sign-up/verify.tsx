import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { SignInWelcomeLayout } from "../../components/layout/signin-welcome";
import { NumberInput, TitleInput } from "../../components/common/input";
import { Spacing } from "../../components/common/spacing";
import { ContainedButton } from "../../components/common/button";
import axios from "axios";

const signupLogo = require("../../assets/images/signup-logo.png");

export default function SignUpVerify({ navigation, route }: any) {

  // Retrieve the email parameter from the route
  const { email } = route.params;
  const navigateToPassword = () => {
    // Navigate to SignUp-Verify and pass the email as a parameter
    navigation.navigate("SignUp-Password", { email, otp: input });
  };

  const [input, setInput] = useState("");
  
    // Hàm xử lý khi nhấn nút Sign in
    
  
  return (
    <SignInWelcomeLayout paddingTop={100}>
      <View style={{ flex: 0.8 }}>
        <View style={styles.imageContainer}>
          <Image source={signupLogo} />
        </View>
        <View style={styles.inputContainer}>
          <NumberInput
            placeholder=""
            onChangeText={setInput}
            title="Enter Verification code"
          />
          <Spacing spacing={1} />
          <Text>Email from SignUpEmail: {email}</Text>
          <Spacing spacing={1} />
          <View>
            <ContainedButton onPress={() => {
              // Access email and input in your logic
              console.log("Email:", email);
              console.log("Verification Code:", input);
              // Navigate to HomeNavigation or perform other actions
              navigateToPassword();
            }}>Next</ContainedButton>
          </View>
        </View>
      </View>
    </SignInWelcomeLayout>
  );
}
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 0.5,
  },
});
