import { Image, StyleSheet, View } from "react-native";
import { SignInWelcomeLayout } from "../components/layout/signin-welcome";
import { Button, Text } from "react-native-paper";
import {
  IconDescription,
  IconDescriptionProps,
} from "../components/icon-description";

const contactImage = require("../assets/images/logo.png");
const phoneIcon = require("../assets/icons/phone.png");
const mailIcon = require("../assets/icons/mail.png");
const locationIcon = require("../assets/icons/location.png");
const socialIcons = require("../assets/icons/social-button.png");
const iconDescriptionList: IconDescriptionProps[] = [
  {
    iconSrc: phoneIcon,
    description: "+1012 3456 789",
  },
  {
    iconSrc: mailIcon,
    description: "demo@gmail.com",
  },
  {
    iconSrc: locationIcon,
    description:
      "132 Dartmouth Street Boston, Massachusetts 02156 United States",
  },
];

export default function ContactScreen({ navigation }: any) {
  return (
    <SignInWelcomeLayout>
      <View style={styles.imageContainer}>
        <Image
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
          source={contactImage}
        />
      </View>
      <View style={styles.contactContainer}>
        <View
          style={{
            backgroundColor: "#3d5cff",
            height: 400,
            width: 310,
            borderRadius: 4,
            paddingVertical: 15,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontWeight: "700",
              fontSize: 20,
            }}
          >
            Contact Information
          </Text>
          <Text style={{ textAlign: "center", color: "#C9C9C9", fontSize: 11, marginTop: 10 }}>
            Say something to start a live chat!
          </Text>
          {iconDescriptionList.map((iconDescription, index) => (
            <IconDescription
              key={index}
              description={iconDescription.description}
              iconSrc={iconDescription.iconSrc}
            />
          ))}
          <View style={{
            justifyContent: "center",
            alignItems: "center",
            flex: 1
          }}>
            <Image source={socialIcons} />
          </View>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          mode="contained"
          style={{
            borderRadius: 4,
            backgroundColor: "#3d5cff",
            width: 280,
            // height: 38,
          }}
          onPress={() => {
            navigation.navigate("Home")
          }}
        >
          <Text
            style={{
              fontSize: 13,
              fontWeight: "500",
              color: "white",
            }}
          >
            Back to Home
          </Text>
        </Button>
      </View>
    </SignInWelcomeLayout>
  );
}
const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
  },
  contactContainer: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    flex: 0.7,
    justifyContent: "center",
    alignItems: "center",
  },
});
