import React from "react";
import { Button, Image, ScrollView, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

function DetailsScreen({ route, navigation }) {
  const { title, author, category, imageLink, link, description, reviews } =
    route.params;

  const openUrl = async (url) => {
    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      }
    } catch (e) {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  };

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
        <Text style={{ fontWeight: "700", textAlign: "center" }}>
          By - {author}
        </Text>
        <Text style={{ textAlign: "justify", padding: 20 }}>{description}</Text>

        <Button title="Read Book" onPress={() => openUrl(link)} />
        <Text style={{ fontSize: 25, fontWeight: "700" }}>Book Review: </Text>
        {reviews.map((review, i) => (
          <View
            style={{
              borderRadius: 20,
              padding: 10,
              backgroundColor: "#e7eaed",
              margin: 10,
            }}
            key={i}
          >
            <Text
              style={{
                fontSize: 16,
                color: "blue",
                textAlign: "center",
                padding: 10,
              }}
            >
              {review.name}
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Icon name="star" size={20} color="orange" />
              <Icon name="star" size={20} color="orange" />
              <Icon name="star" size={20} color="orange" />
              <Icon name="star" size={20} color="orange" />
              <Icon name="star" size={20} color="orange" />
            </View>
            <Text style={{ textAlign: "justify", padding: 20 }}>
              {review.review}
            </Text>
          </View>
        ))}

        <Button
          title="Back to Home"
          onPress={() => navigation.navigate("Home")}
        />
      </View>
    </ScrollView>
  );
}

export default DetailsScreen;
