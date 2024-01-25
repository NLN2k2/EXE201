import { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { SignInWelcomeLayout } from "../../components/layout/signin-welcome";
import { TitleInput } from "../../components/common/input";
import { Spacing } from "../../components/common/spacing";
import { ContainedButton } from "../../components/common/button";
import axios from "axios";

const signupLogo = require("../../assets/images/signup-logo.png");

export default function SignUpPassword({ navigation, route }: any) {
  const [input, setInput] = useState("");
  const { email, otp } = route.params;  // Corrected line

  const apiUrl = 'https://localhost:7052/api/Authenticate/Register';
 

  const navigateToSignin = () => {
    const response = axios.post(apiUrl + '/' + otp + '?Email=' + email + '&Password=' + input);
    console.log(response);
    // Navigate to Login
    navigation.navigate("Login");
  };

  return (
    <SignInWelcomeLayout paddingTop={100}>
      <View style={{ flex: 0.8 }}>
        <View style={styles.imageContainer}>
          <Image source={signupLogo} />
        </View>
        <View style={styles.inputContainer}>
          <TitleInput
            onChangeText={setInput}
            placeholder="**********"
            password={true}
            title="Enter Password"
          />
          <Spacing spacing={1.5} />
          <View>
            <ContainedButton
              onPress={() => {
                // Access email, otp, and input in your logic
                console.log("Email:", email);
                console.log("Verification Code (OTP):", otp);
                console.log("Password:", input);
                // Perform other actions, e.g., navigate to HomeNavigation
                navigateToSignin();
              }}
            >
              Next
            </ContainedButton>
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
