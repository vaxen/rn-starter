import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ImageDetails } from '../../components/ImageDetails'

export const ImageScreen = () => {
    return (
      <View>
        <Text>Image Screen:</Text>
        <ImageDetails
          title={"mountain"}
          path={require("./../../assets/mountain.jpg")}
          score={4}
        />
        <ImageDetails
          title={"beach"}
          path={require("./../../assets/beach.jpg")}
          score={6}
        />
        <ImageDetails
          title={"forest"}
          path={require("./../../assets/forest.jpg")}
          score={8}
        />
      </View>
    );
}


const styles = StyleSheet.create({})
