import { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { SignInWelcomeLayout } from "../../components/layout/signin-welcome";
import { TitleInput } from "../../components/common/input";
import { Spacing } from "../../components/common/spacing";
import { ContainedButton } from "../../components/common/button";
import axios from "axios";
const signupLogo = require("../../assets/images/signup-logo.png");



export default function SignUpEmail({ navigation }: any) {
  const [input, setInput] = useState("");
  const apiUrl = 'https://localhost:7052/api/Authenticate/Verify';

  const navigateToVerify = () => {
    // Navigate to SignUp-Verify and pass the email as a parameter
    navigation.navigate("SignUp-Verify", { email: input });
  };

  const handleSendOTP = async () => {
    try {
      // Gửi yêu cầu POST đến backend với email và password
      const response = await axios.get(apiUrl + "/" + input);

      // Xử lý kết quả từ backend      
      console.log('Response:', response.data);

      const jsonResponse = JSON.stringify(response.data, null, 2);

      // Log the JSON string
      console.log('Response JSON:', jsonResponse);

      // After handling the response, navigate to SignUp-Verify
      navigateToVerify();

    } catch (error) {
      // Xử lý lỗi nếu có
      console.error('Error:', error);
    }
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
            placeholder="name@example.com"
            title=" Email address"
          />
          <Spacing spacing={1.5} />
          <View>
            {/* Trigger handleSendOTP when the button is pressed */}
            <ContainedButton onPress={handleSendOTP}>Next</ContainedButton>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignContent: "center",
              justifyContent: "center",
              marginTop: 30,
            }}
          >
            <Text style={{ fontSize: 18 }}>You have an account? </Text>
            <Text
              style={{ color: "#5667FD", fontSize: 18 }}
              onPress={() => {
                navigation.navigate("Login");
              }}
            >
              Sign in
            </Text>
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
