import { Image, View } from "react-native";
import { Spacing } from "./common/spacing";
import { Text } from "react-native-paper";

export interface IconDescriptionProps {
  iconSrc: any;
  description: string;
}
export const IconDescription = ({
  iconSrc,
  description,
}: IconDescriptionProps) => {
  return (
    <View
      style={{
        paddingVertical: 15,
        paddingBottom: 0,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          style={{
            width: 24,
            height: 24,
          }}
          source={iconSrc}
        />
      </View>
      <Spacing spacing={0.5} />
      <Text
        style={{
          color: "white",
          maxWidth: 250,
          textAlign: "center",
        }}
      >
        {description}
      </Text>
    </View>
  );
};
