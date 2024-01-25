import { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { SignInWelcomeLayout } from "../../components/layout/signin-welcome";
import { TitleInput } from "../../components/common/input";
import { Spacing } from "../../components/common/spacing";
import { ContainedButton } from "../../components/common/button";

const signupLogo = require("../../assets/images/signup-logo.png");
export default function SignUpEmail({ navigation }: any) {
  const [input, setInput] = useState("");
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
            <ContainedButton
              onPress={() => {
                navigation.navigate("SignUp-Password");
              }}
            >
              Next
            </ContainedButton>
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
