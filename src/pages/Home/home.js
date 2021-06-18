import React from 'react';
import { SafeAreaView, FlatList } from 'react-native';

import Menu from '../../components/Menu/menu';
import Header from '../../components/Header/header';
import Conditions from '../../components/Conditions/conditions';
import Forecast from '../../components/Forecast/forecast';

import styles from './homeStyles';

const mylist = [
  {
  "date": "17/06",
  "weekday": "Qui",
  "max": 18,
  "min": 12,
  "description": "Parcialmente nublado",
  "condition": "cloud"
  },
  {
  "date": "18/06",
  "weekday": "Sex",
  "max": 15,
  "min": 13,
  "description": "Tempo nublado",
  "condition": "cloudly_day"
  },
  {
  "date": "19/06",
  "weekday": "Sáb",
  "max": 24,
  "min": 13,
  "description": "Tempo nublado",
  "condition": "cloudly_day"
  },
  {
  "date": "20/06",
  "weekday": "Dom",
  "max": 21,
  "min": 14,
  "description": "Tempo nublado",
  "condition": "cloudly_day"
  },
  {
  "date": "21/06",
  "weekday": "Seg",
  "max": 21,
  "min": 13,
  "description": "Tempo nublado",
  "condition": "cloudly_day"
  },
  {
  "date": "22/06",
  "weekday": "Ter",
  "max": 20,
  "min": 13,
  "description": "Chuvas esparsas",
  "condition": "rain"
  },
  {
  "date": "23/06",
  "weekday": "Qua",
  "max": 19,
  "min": 13,
  "description": "Chuvas esparsas",
  "condition": "rain"
  },
  {
  "date": "24/06",
  "weekday": "Qui",
  "max": 27,
  "min": 11,
  "description": "Tempo nublado",
  "condition": "cloudly_day"
  },
  {
  "date": "25/06",
  "weekday": "Sex",
  "max": 20,
  "min": 15,
  "description": "Chuvas esparsas",
  "condition": "rain"
  },
  {
  "date": "26/06",
  "weekday": "Sáb",
  "max": 17,
  "min": 12,
  "description": "Tempo nublado",
  "condition": "cloudly_day"
  }
];

export default function Home(){
  return (
    <SafeAreaView style={styles.container}>
      <Menu />
      <Header />
      <Conditions />
      <FlatList 
        style={styles.list}
        contentContainerStyle={{ paddingBottom: '5%' }}
        data={mylist}
        horizontal={true}
        keyExtractor={ item => item.date }
        renderItem={ ({ item }) => <Forecast data={item} /> }
      />

    </SafeAreaView>
  )
}