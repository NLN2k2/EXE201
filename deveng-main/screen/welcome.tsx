import { Image, StyleSheet, View } from "react-native";
import { SignInWelcomeLayout } from "../components/layout/signin-welcome";
import { Button, Text } from "react-native-paper";
import { ContainedButton } from "../components/common/button";
import { Spacing } from "../components/common/spacing";

const logo = require("../assets/images/logo.png");

export default function WelcomeScreen({ navigation }: any) {
  return (
    <SignInWelcomeLayout>
      <View style={{ flex: 0.9 }}>
        <View style={styles.imageContainer}>
          <Image 
          style={{
            flex: 1,
            width: 350,
            height: 350,
            resizeMode: 'contain'
          }}
          source={logo} />
        </View>
        <View style={styles.detailContainer}>
          <Text
            style={{
              textAlign: "center",
              color: "#364356",
              fontSize: 20,
              fontWeight: "700",
            }}
          >
            Let's find the "A" with us
          </Text>
          <Text
            style={{
              marginTop: 10,
              textAlign: "center",
              color: "#364356",
              fontSize: 20,
              fontWeight: "500",
            }}
          >
            Please Sign in to view personalized recommendations
          </Text>
        </View>
        <View style={styles.detailContainer}>
        <ContainedButton onPress={() => {
              navigation.navigate("Login")
            }}>
              Sign in
        </ContainedButton>
        <Spacing spacing={1} />
          <ContainedButton onPress={() => {
              navigation.navigate("SignUp-Email")
            }}>
              Sign up
              </ContainedButton>
        </View>
      </View>
    </SignInWelcomeLayout>
  );
}
{
  /* <View style={{ flex: 0.9 }}></View> */
}

const styles = StyleSheet.create({
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 3,
  },
  detailContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 2,
  },
});
