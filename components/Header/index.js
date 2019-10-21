import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import _styles from './_styles';

export default function index() {
  return (
   dataList.map((item, index) => {
    return (
      <View>
        <Image 
          source={{uri:`https://cdn0.shapejoy.com/web/applets/footer-${index+1}${index === item.id ? '-on': ''}.png`}}
          style={_styles.icoImg}
        />
        <Text>{item.title}</Text>
      </View>
    )})
  )
}