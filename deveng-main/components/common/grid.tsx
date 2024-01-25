import React, { ReactNode } from "react";
import { View, Text, StyleSheet } from "react-native";

export const GridBox = ({
  children,
  spacing,
}: {
  children: ReactNode[];
  spacing: number;
}) => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      flexWrap: "wrap",
    },
    item: {
      paddingBottom: spacing,
      width: "50%", // 50% của độ rộng cha (2 cột)
    },
  });
  return (
    <View style={styles.container}>
      {children.map((comp, index) => (
        <View
          style={{
            ...styles.item,
            paddingRight: index % 2 !== 1 ? spacing / 2 : 0,
            paddingLeft: index % 2 === 1 ? spacing / 2 : 0,
          }}
          key={index}
        >
          {comp}
        </View>
      ))}
    </View>
  );
};
