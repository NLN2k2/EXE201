import React, { useEffect, useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";

// Assuming you have defined the interface Courses
interface Courses {
  courseId: number;
  courseName: string;
  description: string;
  unitPrice: number;
  duration: number;
  // Add other fields as needed
}

interface BasketCardProps {
  course: Courses;
  onPress: () => void;
}

const BasketCard: React.FC<BasketCardProps> = ({ course, onPress }) => {
  return (
    <Pressable onPress={onPress} style={styles.cardContainer}>
      <Text>{course.courseName}</Text>
      <Text>{course.description}</Text>
      <Text>Price: {course.unitPrice}</Text>
      <Text>Duration: {course.duration} hours</Text>
    </Pressable>
  );
};

const BookingScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const apiUrl = 'https://localhost:7052/api/Course/GetListCourse';

  const [courses, setCourses] = useState<Courses[] | null>(null);

  useEffect(() => {
    // Gọi API để lấy danh sách course khi component được mount
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        setCourses(data.results);
        console.log(data.results);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []); // Chạy một lần khi component được mount

  const navigateToDetails = (id: number) => {
    // Assuming you have a screen named 'CourseDetails' for showing course details
    navigation.navigate('course-details', { id });
  };

  if (!courses) {
    return <Text>Loading...</Text>;
  }

  return (
    <FlatList
      data={courses}
      keyExtractor={(item) => item.courseId.toString()}
      renderItem={({ item }) => (
        <BasketCard
          course={item}
          onPress={() => navigateToDetails(item.courseId)}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    padding: 16,
    margin: 8,
  },
});

export default BookingScreen;





//   const data: BasketCardProps[] = [
//     {
//       imageSrc: courseImage2,
//       price: "XX.XX",
//       teacher: "Webb Kyle",
//       title: "Product Design",
//     },
//     {
//       imageSrc: courseImage,
//       price: "XX.XX",
//       teacher: "Webb Kyle",
//       title: "Product Design 2",
//     },
//     {
//       imageSrc: courseImage,
//       price: "XX.XX",
//       teacher: "Webb Kyle",
//       title: "Product Design 3",
//     },
//     {
//       imageSrc: courseImage,
//       price: "XX.XX",
//       teacher: "Webb Kyle",
//       title: "Product Design 4",
//     },
//   ];
//   const renderItem = ({ item }: { item: BasketCardProps }) => {
//     return (
//       <Pressable
//         onPress={() => {
//           navigation.push("BookingDetail");
//         }}
//       >
//         <BasketCard props={item} />
//       </Pressable>
//     );
//   };

//   return (
//     <SignInWelcomeLayout>
//       <View style={styles.listContainer}>
//         <FlatList
//           data={data}
//           renderItem={renderItem}
//           showsVerticalScrollIndicator={false}
//           keyExtractor={(item) => item.title}
//         />
//       </View>
//     </SignInWelcomeLayout>
//   );
// }
// const styles = StyleSheet.create({
//   listContainer: {
//     flex: 1,
//   },
// });
