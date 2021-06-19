import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';

export default function Conditions({ weather }){
  return (
    <View style={styles.container}>
      <View style={styles.conditions}>
        <Feather name="wind" size={23} color="#1ed6ff" />
        <Text>{weather.results.wind_speedy}</Text>
      </View>

      <View style={styles.conditions}>
        <MaterialCommunityIcons name="weather-sunset-up" size={23} color="#1ed6ff" />
        <Text>{weather.results.sunrise}</Text>
      </View>

      <View style={styles.conditions}>
        <MaterialCommunityIcons name="weather-sunset-down" size={23} color="#1ed6ff" />
        <Text>{weather.results.sunset}</Text>
      </View>

      <View style={styles.conditions}>
        <Feather name="droplet" size={23} color="#1ed6ff" />
        <Text>{weather.results.humidity}</Text>
      </View> 
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    marginTop: 15, 
    padding: 10,
    width: '95%',

    backgroundColor: '#ffffff',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',

    borderRadius: 8
  },

  conditions:{
    alignItems: 'center',
    justifyContent: 'center'
  }
});