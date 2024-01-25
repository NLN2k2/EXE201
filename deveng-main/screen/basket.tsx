import { FlatList, StyleSheet, Text, View } from "react-native";
import { BasketCard, BasketCardProps } from "../components/card/basket-card";
import { SignInWelcomeLayout } from "../components/layout/signin-welcome";
import { Card } from "../components/common/card";
import { TextInput } from "react-native";
import { OutlineInput } from "../components/common/input";
import { useState } from "react";
import { ContainedButton } from "../components/common/button";
import { Spacing } from "../components/common/spacing";

const courseImage = require("../assets/images/course-1.png");
export default function BasketScreen() {
  const data: BasketCardProps[] = [
    {
      imageSrc: courseImage,
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
    return <BasketCard props={item} />;
  };

  const [input, setInput] = useState("");
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
      <View style={styles.totalContainer}>
        <Card>
          <View
            style={{
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <Text
              style={{ color: "#3D5CFF", fontSize: 25, fontWeight: "bold" }}
            >
              Total
            </Text>
            <Text
              style={{ color: "#FF3D3D", fontSize: 25, fontWeight: "bold" }}
            >
              $XX.XX
            </Text>
          </View>
        </Card>
      </View>
      <View style={styles.buttonContainer}>
        <OutlineInput
          onChangeText={setInput}
          placeholder="Add discount code"
          title=""
        />
        <Spacing spacing={1}/>
        <ContainedButton>Confirm &Purchase</ContainedButton>
      </View>
      <View style={styles.totalContainer}/>
    </SignInWelcomeLayout>
  );
}
const styles = StyleSheet.create({
  listContainer: {
    flex: 4,
  },
  totalContainer: {
    flex: 1,
    marginVertical: 10,
  },
  buttonContainer: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
});
