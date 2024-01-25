import { View } from "react-native";

export const Spacing = ({ spacing }: { spacing: number }) => {
  return (
    <View
      style={{
        marginVertical: spacing * 10,
      }}
    ></View>
  );
};
