import { Image, StyleSheet, View } from "react-native";
import { TitleInput } from "../components/common/input";
import { SetStateAction, useEffect, useState } from "react";
import { Spacing } from "../components/common/spacing";
import { Text } from "react-native-paper";
import { ContainedButton } from "../components/common/button";
import { SignInWelcomeLayout } from "../components/layout/signin-welcome";
import axios from "axios";

const loginLogo = require("../assets/images/login-logo.png");

export default function LoginScreen({ navigation }: any) {
  const apiUrl = 'https://localhost:7052/api/Authenticate/Login';

  // State để lưu giá trị của email và password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Hàm xử lý khi nhấn nút Sign in
  const handleSignIn = async () => {
    console.log("email: "+email+"\npwd: "+password);
    try {
      // Gửi yêu cầu POST đến backend với email và password
      const response = await axios.post(apiUrl+"/"+email+"/"+password);

      // Xử lý kết quả từ backend      
      console.log('Response:', response.data);

      const jsonResponse = JSON.stringify(response.data, null, 2);

      // Log the JSON string
      console.log('Response JSON:', jsonResponse);
    
      // Check the "result" property
      if (response.data && response.data.result) {
        // Handle the case when "result" is truthy
        console.log('Result is truthy:', response.data.result);
        // Chuyển hướng đến màn hình HomeNavigation
        navigation.navigate("HomeNavigation");
      } else {
        // Handle the case when "result" is falsy or undefined
        console.log('Result is falsy or undefined');
      }

    } catch (error) {
      // Xử lý lỗi nếu có
      console.error('Error:', error);
    }
  };

  return (
    <SignInWelcomeLayout paddingTop={100}>
      <View style={{ flex: 0.9 }}>
        <View style={styles.imageContainer}>
          <Image source={loginLogo} />
        </View>
        <View style={styles.inputContainer}>
          {/* Email input */}
          <TitleInput
            onChangeText={(text: SetStateAction<string>) => setEmail(text)}
            placeholder="name@example.com"
            title="Email address"
          />
          <Spacing spacing={1} />
          {/* Password input */}
          <TitleInput
            onChangeText={(text: SetStateAction<string>) => setPassword(text)}
            placeholder="*******"
            title="Password"
            password={true}
          />
          <Spacing spacing={1} />
          <View>
            {/* Sign in button */}
            <ContainedButton onPress={handleSignIn}>
              Sign in
            </ContainedButton>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 18 }}>Don't have account? </Text>
        <Text
          style={{ color: "#5667FD", fontSize: 18 }}
          onPress={() => {
            navigation.navigate("SignUp-Email");
          }}
        >
          Sign up
        </Text>
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
  copyright: {
    textAlign: "center",
    fontSize: 12,
    color: "#989191",
    fontWeight: "bold",
  },
});
