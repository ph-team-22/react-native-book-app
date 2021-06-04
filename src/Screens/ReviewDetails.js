import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {StyleSheet, Text , View} from 'react-native'

export default function ReviewDetails () {
    return (
        <SafeAreaView>
            <View style={style.container}>
            <Text> ReviewDetails Page</Text>
        </View>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
  container:{
      padding: 24,
  }
})