import React from "react";
import { Text, View, Image, Button } from "react-native";
import Books from "../../Images/Books.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const BookDetails = () => {
  const handlePress = () => {};
  return (
    <View
      style={{
        paddingTop: 50,
        textAlign: "center",
        backgroundColor: "#F2F2F2",
      }}
    >
      <FontAwesomeIcon
        style={{ padding: 12, margin: 10 }}
        color="grey"
        icon={faArrowLeft}
      />
      <Image
        source={Books}
        style={{
          width: 400,
          height: 300,
          paddingTop: 2,
        }}
      />
      <Text
        style={{
          textAlign: "center",
          fontSize: 20,
          marginTop: 5,
          fontWeight: "bold",
        }}
      >
        Bundle of Three Category
      </Text>
    </View>
  );
};

export default BookDetails;
