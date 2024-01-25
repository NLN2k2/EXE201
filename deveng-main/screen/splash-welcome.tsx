import { Image, StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";
import { SignInWelcomeLayout } from "../components/layout/signin-welcome";

const logo = require("../assets/images/logo.png");

export default function SplashWelcomeScreen({ navigation }: any) {
  return (
    <SignInWelcomeLayout>
      <View style={styles.imageContainer}>
        <Image source={logo} />
        <Button
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          Login Page
        </Button>
      </View>
      <Text style={styles.copyright}>
        ©2023 DevEducation JSC. All right reserved.
      </Text>
    </SignInWelcomeLayout>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 0.9,
  },
  copyright: {
    textAlign: "center",
    fontSize: 12,
    color: "#989191",
    fontWeight: "bold",
  },
});
