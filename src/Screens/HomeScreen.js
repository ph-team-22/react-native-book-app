import React, { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import SingleBook from "../../components/SingleBook";

function HomeScreen({ navigation }) {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBookApiAsync();
  }, []);

  const getBookApiAsync = async () => {
    try {
      let response = await fetch(
        "https://shrouded-crag-01009.herokuapp.com/books"
      );
      let json = await response.json();
      setBooks(json.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {books.map((book, i) => (
          <SingleBook key={i} book={book} navigation={navigation} />
        ))}
      </View>
    </ScrollView>
  );
}

export default HomeScreen;
