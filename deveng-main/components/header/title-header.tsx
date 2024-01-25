import { StyleSheet, Text, View } from "react-native";

export const TitleHeader = ({ title }: { title: string }) => {
  return (
    <View style={styles.header}>
      <Text style={{fontSize: 25, fontWeight: "600"}}>{title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    width: "100%",
  },
});
