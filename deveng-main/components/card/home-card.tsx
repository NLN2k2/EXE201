import { Image, View } from "react-native";
import { Text } from "react-native-paper";
export interface HomeCardProps {
  iconSrc: any;
  description: string;
}
export const HomeCard = ({ iconSrc, description }: HomeCardProps) => {
  return (
    <View
      style={{
        width: 150,
        height: 150,
        backgroundColor: "#EBE6E6",
        borderRadius: 20,
        paddingVertical: 5
      }}
    >
      <View style={{
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        flex: 1
      }}>
        <Image
          style={{ width: 90, height: 90}}
          source={iconSrc}
        />
      </View>
      <Text
        style={{
          textAlign: "center",
          lineHeight: 25,
          fontSize: 20,
          fontWeight: "bold"
        }}
      >
        {description}
      </Text>
    </View>
  );
};
