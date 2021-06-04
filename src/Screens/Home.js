import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {StyleSheet, Text , View, Button} from 'react-native'



export default function Home ({ navigation }) {
    return (
        <SafeAreaView>
            <View style={style.container}>
                <Text> Home Page</Text>
                <Button
                  title="Go to Details"
                  onPress={() => navigation.navigate('ReviewDetails')}
                />
            </View>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
  container:{
    //   padding: 24,
  }
})