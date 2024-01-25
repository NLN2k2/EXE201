import { ReactNode } from "react";
import { KeyboardAvoidingView, Platform, View } from "react-native";

export const SignInWelcomeLayout = ({
  children,
  paddingTop = 0,
  backgroundColor = "#f4f5f9"
}: {
  paddingTop?: number;
  children: ReactNode;
  backgroundColor?: string;
}) => {
  return (
    <View
      style={{
        flex: 1,
        paddingTop,
        paddingHorizontal:10,
        minHeight: 700,
        backgroundColor,
      }}
    >
      {children}
    </View>
  );
};
// %', background: 'linear-gradient(127deg, #470800 0%, #7E0F00 100%)