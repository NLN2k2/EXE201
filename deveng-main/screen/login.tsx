import { Image, StyleSheet, View } from "react-native";
import { TitleInput } from "../components/common/input";
import { useState } from "react";
import { Spacing } from "../components/common/spacing";
import { Text } from "react-native-paper";
import { ContainedButton } from "../components/common/button";
import { SignInWelcomeLayout } from "../components/layout/signin-welcome";
const loginLogo = require("../assets/images/login-logo.png");
export default function LoginScreen({ navigation }: any) {
  const [input, setInput] = useState("");
  return (
    <SignInWelcomeLayout paddingTop={100}>
      <View style={{ flex: 0.9 }}>
        <View style={styles.imageContainer}>
          <Image source={loginLogo} />
        </View>
        <View style={styles.inputContainer}>
          <TitleInput
            onChangeText={setInput}
            placeholder="name@example.com"
            title="Email address"
          />
          <Spacing spacing={1} />
          <TitleInput
            onChangeText={setInput}
            placeholder="*******"
            title="Password"
            password={true}
          />
          <Spacing spacing={1} />
          <View>
            <ContainedButton
              onPress={() => {
                navigation.navigate("HomeNavigation");
              }}
            >
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
