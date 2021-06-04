import React from "react";
import { Card } from "react-native-paper";

const SingleBook = ({ book, navigation }) => {
  return (
    <Card
      style={{ width: "50%", padding: 10 }}
      onPress={() => navigation.navigate("Details", book)}
    >
      <Card.Cover source={{ uri: book.imageLink }} />
    </Card>
  );
};

export default SingleBook;
