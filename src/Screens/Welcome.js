import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {StyleSheet, Text ,Image, View, Button} from 'react-native'

export default function Welcome ({ navigation }) {
    return (
        <SafeAreaView>
            <View style={style.container}>
            <Text style={style.Text}>
            Book Library
        </Text>
            <Image
          source={require('../Assets/Book.png')}
          resizeMode="contain"
          style={{
            width: "90%",
            height: 300,
            borderRadius: 15,
          }}
        />
        <Text style={style.Text}>
        Saying the Internet makes librarians obsolete is like saying the plague makes doctors obsolete. 
        – Cory Doctorow
        </Text>
                <Button
                        title="Start Reading"
                        onPress={() => navigation.navigate('Home')}
                />
            </View>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
  container:{
      display: 'flex',
      height: '100%',
      justifyContent: 'space-evenly',
      alignItems: 'center',
  },
  Text:{
    textAlign: "justify",
    paddingLeft:10,
    paddingRight:10,
    color: "#20232a",
    fontSize: 20,
    fontWeight: "bold"
    
  }
})