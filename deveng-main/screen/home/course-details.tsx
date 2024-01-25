// course-details.tsx
import React from 'react';
import { Text, View } from 'react-native';

// Import the CourseDetailsProps type
interface CourseDetailsProps {
  route: {
    params: {
      id: number;
    };
  };
}

const CourseDetails: React.FC<CourseDetailsProps> = ({ route }) => {
  const { id } = route.params;

  // Fetch additional details about the course using the id

  return (
    <View>
      <Text>Details Screen for Course ID: {id}</Text>
      {/* Display other details for the selected course */}
    </View>
  );
};

export default CourseDetails;
