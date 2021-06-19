import React, { useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View, TextInput, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

import { Feather } from '@expo/vector-icons';

import api, { key } from '../../services/api';
import Conditions from '../../components/Conditions/conditions';

import styles from './searchStyles';

export default function Search(){
  const navigation = useNavigation();

  const [input, setInput] = useState('');
  const [city, setCity] = useState(null);
  const [error, setError] = useState(null);

  async function handleSearch(){
    const response = await api.get(`/weather?key=${key}&city_name=${input}`);

    console.log(response);

    if(response.data.by === 'default'){
      setError('Humm, cidade não encontrada!');
      setInput('');
      setCity(null);
      Keyboard.dismiss();
      return;
    }

    setCity(response.data);
    setInput('');
    Keyboard.dismiss();
  }

  if(city){
    return(
      <SafeAreaView style={styles.container}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={ () =>navigation.navigate('Home') }  
        >
          <Feather 
            name='chevron-left'
            size={32}
            color='#000000'
          />
          <Text style={{ fontSize: 22 }}>Voltar</Text>
        </TouchableOpacity>

        <View style={styles.searchBox}>
          <TextInput
            value={input}
            onChangeText={ (value) => setInput(value) }
            placeholder="Ex: Manaus, AM"
            style={styles.input}
          />
          <TouchableOpacity 
            style={styles.icon}
            onPress={handleSearch}
          >
            <Feather
              name="search"
              size={22}
              color="#FFFFFF"
            />
          </TouchableOpacity>
        </View>

        <LinearGradient
          style={styles.header}
          colors={['#1ed6ff', '#97c1ff']}
        >
          <Text style={styles.date}>{city.results.date}</Text>
          <Text style={styles.city}>{city.results.city_name}</Text>

          <View>
            <Text style={styles.temp}>{city.results.temp}º</Text>
          </View>

          <Conditions weather={city} />
        </LinearGradient>
      </SafeAreaView>
    )
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity 
        style={styles.backButton}
        onPress={ () =>navigation.navigate('Home') }  
      >
        <Feather 
          name='chevron-left'
          size={32}
          color='#000000'
        />
        <Text style={{ fontSize: 22 }}>Voltar</Text>
      </TouchableOpacity>

      <View style={styles.searchBox}>
        <TextInput
          value={input}
          onChangeText={ (value) => setInput(value) }
          placeholder="Ex: Manaus, AM"
          style={styles.input}
        />
        <TouchableOpacity 
          style={styles.icon}
          onPress={handleSearch}
        >
          <Feather
            name="search"
            size={22}
            color="#FFFFFF"
          />
        </TouchableOpacity>
      </View>

      {error && <Text style={{ marginTop: 25, fontSize: 18, fontWeight: '800' }}>{error}</Text>}

    </SafeAreaView>
  )
}