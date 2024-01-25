import { Text } from "react-native-paper";
import { SignInWelcomeLayout } from "../../components/layout/signin-welcome";
import { Card } from "../../components/common/card";
import { Image, Pressable, ScrollView, StyleSheet, View } from "react-native";
import { HomeCard } from "../../components/card/home-card";

const banner = require("../../assets/images/banner.png");
const student = require("../../assets/images/student.png");
const teacher = require("../../assets/images/teacher.png");
const participant = require("../../assets/images/participant.png");
const calendar = require("../../assets/icons/calendar.png");
const course = require("../../assets/icons/course.png");
const contact = require("../../assets/icons/contact.png");
export default function HomeScreen({ navigation }: any) {
  return (

    <SignInWelcomeLayout paddingTop={80}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.imageContainer}>
          <Image
            source={banner}
            style={{
              width: 390,
              height: 220,
              objectFit: "contain",
              borderRadius: 20,
            }}
          />
        </View>
        <View style={styles.categoryContainer}>
          <Text
            style={{ textAlign: "center", fontSize: 24, fontWeight: "bold" }}
          >
            Categories
          </Text>
          <View style={styles.categoryItemContainer}>
            <Pressable onPress={() => {
              navigation.navigate("Booking")
            }}>
              <Image source={student} style={styles.image} />
            </Pressable>
            <Pressable onPress={() => {
              navigation.navigate("Booking")
            }}>
              <Image source={teacher} style={styles.image} />
            </Pressable>
            <Pressable onPress={() => {
              navigation.navigate("Booking")
            }}>
              <Image source={participant} style={styles.image} />
            </Pressable>
          </View>
        </View>
        <View style={styles.informationContainer}>
          <Text
            style={{ textAlign: "center", fontSize: 24, fontWeight: "bold" }}
          >
            Infomation Access
          </Text>
          <View style={styles.categoryItemContainer}>
            <HomeCard iconSrc={calendar} description="Weekly timetable" />
            <HomeCard iconSrc={course} description="Course participant" />
          </View>
        </View>
        <View style={styles.informationContainer}>
          <Text
            style={{ textAlign: "center", fontSize: 24, fontWeight: "bold" }}
          >
            Contact Us
          </Text>
          <View style={styles.categoryItemContainer}>
            <HomeCard iconSrc={contact} description="Contact Us" />
          </View>
        </View>
      </ScrollView>
    </SignInWelcomeLayout>
  );
}
const styles = StyleSheet.create({
  imageContainer: {
    flex: 3,
  },
  categoryContainer: {
    flex: 2,
    marginTop: 10,
  },
  informationContainer: {
    marginTop: 30,
    flex: 3,
  },
  categoryItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    margin: "auto",
    marginTop: 20,
    justifyContent: "space-around",
  },
  image: {
    width: 80,
    height: 80,
  },
});
