import { Image, View } from "react-native";
import { Card } from "../common/card";
import { Icon, Text } from "react-native-paper";

export interface BasketCardProps {
  // imageSrc: any;
  // title: string;
  // teacher: string;
  // price: string;
  courseId: number;
  courseName: string;
  description: string;
  unitPrice: number;
  teacherId: number;
  duration: number;
  numberOfLesson: number | null;
  categoryId: number | null;
  status: string | null;
  vouncherId: number | null;
  studentCourses: StudentCourse[];
}
interface OrderDetail {
  // Define the properties of OrderDetail
}

interface StudentCourse {
  studentCourseId: number;
  courseId: number;
  studentId: number;
  startDate: string; // You might want to use a Date type here if the data is in a date format
  endDate: string; // You might want to use a Date type here if the data is in a date format
  link: string;
}

export const BasketCard = ({ props }: { props: BasketCardProps }) => {
  return (
    <Card style={{ marginVertical: 10, marginHorizontal: 10 }}>
      <View style={{ flexDirection: "row" }}>
        {/* <Image
          source={props.imageSrc}
          style={{
            width: 80,
            height: 100,
            borderRadius: 10,
            marginRight: 25,
          }}
        /> */}
        <View>
          <Text
            style={{
              color: "#1F1F39",
              fontSize: 16,
              fontWeight: "bold",
              paddingTop: 5,
            }}
          >
            {props.courseName}
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingVertical: 10,
            }}
          >
            <Icon source={"account"} size={10} color="#B8B8D2" />
            <Text
              style={{
                paddingHorizontal: 2,
                color: "#B8B8D2",
                fontSize: 12,
              }}
            >
              {props.teacherId}
            </Text>
          </View>
          <Text
            style={{
              color: "#3D5CFF",
              fontSize: 16,
              fontWeight: "700",
            }}
          >
            $ {props.numberOfLesson}
          </Text>
        </View>
      </View>
    </Card>
  );
};
