import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { condition } from '../../utils/condition';

export default function Forecast({ data }){
  let icon = condition(data.condition)

  return (
    <View style={styles.container}>
      <Text style={styles.date}>{data.date}</Text>
      <Ionicons name={icon.name} color={icon.color} size={25} />
      <View style={styles.temp}>
        <Text>{data.min}º</Text>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{data.max}º</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    marginLeft: 12,
    paddingTop: 10,
    paddingRight: 14,
    paddingBottom: 10,
    paddingLeft: 10,

    backgroundColor: '#ffffff',
    borderRadius: 8,

    alignItems: 'center',
    justifyContent: 'space-around'
  },

  date:{
    fontSize: 14,
  },

  temp:{
    alignItems: 'center'
  }
});