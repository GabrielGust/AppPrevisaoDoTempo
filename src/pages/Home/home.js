import React, { useState, useEffect } from 'react';
import { SafeAreaView, FlatList, View, Text } from 'react-native';
import * as Location from 'expo-location';

import Menu from '../../components/Menu/menu';
import Header from '../../components/Header/header';
import Conditions from '../../components/Conditions/conditions';
import Forecast from '../../components/Forecast/forecast';

import api, { key } from '../../services/api';

import styles from './homeStyles';

export default function Home(){
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState([]);
  const [icon, setIcon] = useState({ name: 'cloud', color: '#FFFFFF' });
  const [background, setBackground] = useState(['#1ed6ff', '#97c1ff']);

  useEffect(()=>{

    (async ()=>{
      let { status } = await Location.requestForegroundPermissionsAsync();

      if(status !== 'granted'){
        setErrorMsg('Permissão negada para acessar localização');
        setLoading(false);
        return;
      }

      let location = await Location.getCurrentPositionAsync({});

      const response = await api.get(`/weather?key=${key}&lat=${location.coords.latitude}&lon=${location.coords.longitude}`);
      console.log(response.data);

      setWeather(response.data);

      if(response.data.results.currently === 'noite'){
        setBackground(['#0c3741', '#0f2f61'])
      }

      switch(response.data.results.condition_slug){
        case 'clear_day':
          setIcon({ name: 'partly-sunny', color: '#FFB300' });
        break;
        case 'rain':
          setIcon({ name: 'rainy', color: '#FFFFFF' });
        break;
        case 'storm':
          setIcon({ name: 'rainy', color: '#FFFFFF' });
        break;
      }

      setLoading(false);
    })();

  }, []);

  if(loading){
    return(
      <View style={styles.container}>
        <Text style={{ fontSize: 25, fontStyle: 'italic', fontWeight: 'bold', color: '#000000' }}>Carregando dados...</Text>
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <Menu />
      <Header background={background} weather={weather} icon={icon} />
      <Conditions weather={weather} />
      <FlatList
        style={styles.list}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: '5%' }}
        data={weather.results.forecast}
        horizontal={true}
        keyExtractor={ item => item.date }
        renderItem={ ({ item }) => <Forecast data={item} /> }
      />

    </SafeAreaView>
  )
}