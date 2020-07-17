import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

export const ImageDetails = ({ title, path, score }) => {
         return (
           <View>
             <Text>{title}</Text>
             <Image source={path} />
             <Text>likes: {score}</Text>
           </View>
         );
       };

const styles = StyleSheet.create({})
