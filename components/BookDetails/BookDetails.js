import React, { useEffect, useState } from "react";
import { Text, View, Image, Button, StyleSheet } from "react-native";
import BookImage from "../../Images/Books.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft, faStar } from "@fortawesome/free-solid-svg-icons";
import axios from "react-native-axios";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    // height: "100%",
    alignItems: "center",
  },
});

const BookDetails = () => {
  const bookDetails = {
    title: "Schaum's outlines Programming With C",
    author: "Byron Gottfried",
    edition: "Third",
    description:
      "Extensive coverage of C Programming concepts || new chapter on Strings || Included new topics - Fundamentals of Computers; Introduction to Algorithms and Pseducodes; Random and Sequential Access of Files|| Over 1200 problems, review questions, programming exercises and frequesntly asked questions.",
    imageLink:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1533393342l/41042739._SX318_.jpg",
    link: "https://www.goodreads.com/book/show/41042739-programming-with-c-sie",
    reviews: [
      {
        name: "Musiur",
        rating: 5,
        comment: "I am satisfied.",
      },
      {
        name: "Alam",
        rating: 5,
        comment: "I Have enjoyed the book.",
      },
      {
        name: "Opu",
        rating: 5,
        comment: "Thanks for your ontime service",
      },
    ],
    category: "Programming",
    overallRating: 5,
  };
  const { title, author, edition, description, imageLink, link, reviews } =
    bookDetails;
  console.log(title, author, edition, description, imageLink, link, reviews);
  console.log(reviews[0].name);

  const handlePress = () => {};
  return (
    <View style={styles.container}>
      <View
        style={{
          paddingTop: 50,
          alignSelf: "center",
        }}
      >
        <FontAwesomeIcon
          style={{ padding: 12, margin: 10 }}
          color="grey"
          icon={faArrowLeft}
        />
        <Image
          source={BookImage}
          style={{
            width: 400,
            height: 500,
            paddingTop: 2,
            alignSelf: "center",
          }}
        />
        <Text
          style={{
            alignSelf: "center",
            fontSize: 12,
            marginTop: 5,
            fontWeight: "bold",
            paddingLeft: 10,
            color: "#F07427",
          }}
        >
          {/* Bundle of Three Category */}
          {bookDetails.category}
        </Text>
        <Text
          style={{
            alignSelf: "center",
            fontSize: 20,
            marginTop: 5,
            fontWeight: "bold",
            paddingLeft: 10,
          }}
        >
          {bookDetails.title}
        </Text>
        <Text
          style={{
            alignSelf: "center",
            fontSize: 12,
            marginTop: 5,
            fontWeight: "bold",
            paddingLeft: 10,
          }}
        >
          by{" "}
          <Text
            style={{
              alignSelf: "center",
              fontSize: 14,
              marginTop: 5,
              fontWeight: "bold",
              paddingLeft: 10,
              color: "green",
            }}
          >
            {bookDetails.author}
          </Text>
          <Text
            style={{
              alignSelf: "center",
              fontSize: 18,
              marginTop: 5,
              fontWeight: "bold",
              paddingLeft: 10,
            }}
          >
            {" | "}
          </Text>
          <Text
            style={{
              alignSelf: "center",
              alignItems: "center",
              fontSize: 12,
              marginTop: 5,
              fontWeight: "bold",
              paddingLeft: 10,
            }}
          >
            <FontAwesomeIcon color="#F07427" icon={faStar} />
            <FontAwesomeIcon color="#F07427" icon={faStar} />
            <FontAwesomeIcon color="#F07427" icon={faStar} />
            <FontAwesomeIcon color="#F07427" icon={faStar} />
            <FontAwesomeIcon color="#F07427" icon={faStar} />
            {/* {bookDetails.overallRating} */}
            <Text
              style={{
                alignSelf: "center",
                fontSize: 14,
                marginTop: 5,
                fontWeight: "bold",
                paddingLeft: 10,
              }}
            >
              {"  "}
              {bookDetails.overallRating} {" stars"}
            </Text>
          </Text>
        </Text>
      </View>
      <View style={{ marginTop: 10 }}>
        <Button
          title="Read Now!"
          onPress={() => Alert.alert("Simple Button pressed")}
        />
      </View>
      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>
          Book's Description
        </Text>
        <Text>{bookDetails.description}</Text>
      </View>
    </View>
  );
};

export default BookDetails;
