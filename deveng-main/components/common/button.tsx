import { ReactNode } from "react";
import { Button, ButtonProps, Text } from "react-native-paper";

export const ContainedButton = ({ children, ...props }: ButtonProps) => {
  return (
    <Button
      mode="contained"
      {...props}
      style={{
        width: 270,
        height: 60,
        justifyContent: "center",
        backgroundColor: "#5667FD",

      }}
    >
      <Text style={{ fontSize: 20, color: "#FFF", fontWeight: "600" }}>
        {children}
      </Text>
    </Button>
  );
};
