import { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { SignInWelcomeLayout } from "../../components/layout/signin-welcome";
import { NumberInput, TitleInput } from "../../components/common/input";
import { Spacing } from "../../components/common/spacing";
import { ContainedButton } from "../../components/common/button";

const signupLogo = require("../../assets/images/signup-logo.png");
export default function SignUpVerify({ navigation }: any) {
  const [input, setInput] = useState("");
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
            title="Enter Verifycation code"
          />
          <Spacing spacing={1} />
          <View>
            <ContainedButton onPress={() => {
              navigation.navigate("HomeNavigation")
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
