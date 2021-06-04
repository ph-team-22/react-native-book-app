import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {StyleSheet, Text , View} from 'react-native'

export default function About ()  {
    return (
       <SafeAreaView>
            <View style={style.container}>
            <Text> About Page</Text>
        </View>
       </SafeAreaView>
    )
}

const style = StyleSheet.create({
  container:{
    //   padding: 24,
  }
})