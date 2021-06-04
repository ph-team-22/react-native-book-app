import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { Appbar, Button, Card } from "react-native-paper";

const MORE_ICON = "dots-horizontal";

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

function DetailsScreen({ route, navigation }) {
  const { title, author, category, imageLink, description, reviews } =
    route.params;
  return (
    <ScrollView>
      <View style={{ flex: 1, alignItems: "center" }}>
        <Image
          source={{ uri: imageLink }}
          style={{
            width: "50%",
            height: 300,
            margin: 20,
            resizeMode: "contain",
          }}
        />
        <Text style={{ fontSize: 20, textAlign: "center", color: "blue" }}>
          {title}
        </Text>
        <Text>{category}</Text>
        <Text style={{ fontWeight: "700" }}>By - {author}</Text>
        <Text style={{ textAlign: "justify", padding: 20 }}>{description}</Text>

        {reviews.map((review, i) => (
          <View key={i}>
            <Text style={{ fontSize: 14, color: "blue", padding: 10 }}>
              {review.name}
            </Text>
            <Text>{review.rating}</Text>
            <Text>{review.review}</Text>
          </View>
        ))}

        <Button
          title="Go to Details... again"
          onPress={() => navigation.navigate("Home")}
        >
          Back
        </Button>
      </View>
    </ScrollView>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Appbar.Header>
        <Appbar.Content
          title="Tech Book"
          subtitle={"Collection of amazing book"}
        />
        <Appbar.Action icon="magnify" onPress={() => {}} />
        <Appbar.Action icon={MORE_ICON} onPress={() => {}} />
      </Appbar.Header>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
