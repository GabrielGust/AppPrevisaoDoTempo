import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { Ionicons } from '@expo/vector-icons';

export default function Header(){
  return (
    <LinearGradient
      style={styles.header}
      colors={['#1ed6ff', '#97c1ff']}
    >
      <Text style={styles.date}>17/06/2021</Text>
      <Text style={styles.city}>Taboão da Serra</Text>

      <Ionicons name="cloud" color="#fff" size={150} />

      <Text style={styles.temperature}>14º</Text>

    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  header:{
    width: '95%',
    height: '55%',

    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 8,
  },

  date: {
    color: '#ffffff',
    fontSize: 17
  },

  city:{
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold'
  },

  temperature:{
    color: '#ffffff',
    fontSize: 80,
    fontWeight: 'bold'
  }
});