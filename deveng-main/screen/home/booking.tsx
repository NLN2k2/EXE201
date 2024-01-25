import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { BasketCard, BasketCardProps } from "../../components/card/basket-card";
import { useState } from "react";
import { SignInWelcomeLayout } from "../../components/layout/signin-welcome";

const courseImage = require("../../assets/images/course-1.png");
const courseImage2 = require("../../assets/images/stress.png");
export default function BookingScreen({ navigation }: any) {
  const data: BasketCardProps[] = [
    {
      imageSrc: courseImage2,
      price: "XX.XX",
      teacher: "Webb Kyle",
      title: "Product Design",
    },
    {
      imageSrc: courseImage,
      price: "XX.XX",
      teacher: "Webb Kyle",
      title: "Product Design 2",
    },
    {
      imageSrc: courseImage,
      price: "XX.XX",
      teacher: "Webb Kyle",
      title: "Product Design 3",
    },
    {
      imageSrc: courseImage,
      price: "XX.XX",
      teacher: "Webb Kyle",
      title: "Product Design 4",
    },
  ];
  const renderItem = ({ item }: { item: BasketCardProps }) => {
    return (
      <Pressable
        onPress={() => {
          navigation.push("BookingDetail");
        }}
      >
        <BasketCard props={item} />
      </Pressable>
    );
  };

  return (
    <SignInWelcomeLayout>
      <View style={styles.listContainer}>
        <FlatList
          data={data}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.title}
        />
      </View>
    </SignInWelcomeLayout>
  );
}
const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
  },
});
