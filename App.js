import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Appbar } from "react-native-paper";
import DetailsScreen from "./src/Screens/DetailsScreen";
import HomeScreen from "./src/Screens/HomeScreen";
import Welcome from "./src/Screens/Welcome";

const MORE_ICON = "dots-horizontal";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Appbar.Header>
        <Appbar.Content
          title="Book Library"
          subtitle={"Collection of amazing books"}
        />
        <Appbar.Action icon="magnify" onPress={() => {}} />
        <Appbar.Action icon={MORE_ICON} onPress={() => {}} />
      </Appbar.Header>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          options={{
            title: "Welcome",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#f4511e",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
          component={Welcome}
        />
        <Stack.Screen
          name="Home"
          options={{
            title: "Home",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#f4511e",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
          component={HomeScreen}
        />
        <Stack.Screen
          name="Details"
          options={{
            title: "Book Details",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#f4511e",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
          component={DetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
