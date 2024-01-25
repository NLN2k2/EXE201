import { View, ViewProps } from "react-native";

export const Card = ({ children, ...props }: any) => {
  return (
    <View
      style={{
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 23,
        borderRadius: 20,
        ...props.style,
      }}
    >
      <View style={{ width: 340 }}>{children}</View>
    </View>
  );
};

