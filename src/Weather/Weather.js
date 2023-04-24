import React from 'react';
import propTypes from 'prop-types';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const WEATHER_OPTIONS = {
  Thunderstorm: {
    iconName: 'lightning',
    gradient: ['#141E30', '#243B55'],
    title: 'Сиди дома',
    subtitle: 'Ты видишь что на улице?',
  },
  Drizzle: {
    iconName: 'rainy',
    gradient: ['#3a7bd5', '#3a6073'],
    title: 'Возьми зонтик',
    subtitle: 'Возможно скоро дождь усилится ',
  },
  Rain: {
    iconName: 'pouring',
    gradient: ['#000046', '#1CB5E0'],
    title: 'На улице дождь',
    subtitle: 'А значит скоро будет радуга!',
  },
  Snow: {
    iconName: 'snowflake',
    gradient: ['#83a4d4', '#b6fbff'],
    title: 'На улице снежок!',
    subtitle: 'Одевайтесь потеплее, лепите снеговиков',
  },
  Sunny: {
    iconName: 'sunny',
    gradient: ['#83a4d4', '#b6fbff'],
    title: 'На улице снежок!',
    subtitle: 'Одевайтесь потеплее, лепите снеговиков',
  },
  Dust: {
    iconName: 'windy-variant',
    gradient: ['#B79891', '#94716B'],
    title: 'Пыльно',
    subtitle: 'Лучше закройте окна',
  },
  Smoke: {
    iconName: 'windy',
    gradient: ['#56CCF2', '#2F80ED'],
    title: 'На улице смог :(',
    subtitle: 'Не советую выходить без необходимости',
  },
  Haze: {
    iconName: 'hazy',
    gradient: ['#3E5151', '#DECBA4'],
    title: 'На улице снежок!',
    subtitle: 'Одевайтесь потеплее, лепите снеговиков',
  },
  Mist: {
    iconName: 'fog',
    gradient: ['#606c88', '#3f4c6b'],
    title: 'Ни черта не видно в тумане',
    subtitle: 'Зато как в Сайлент-Хилле :)',
  },
  Clear: {
    iconName: 'sunny',
    gradient: ['#56CCF2', '#2F80ED'],
    title: 'Погода супер :)',
    subtitle: 'Иди гулять, хватит сидеть дома!',
  },
  Clouds: {
    iconName: 'cloudy',
    gradient: ['#757F9A', '#D7DDE8'],
    title: 'Облака',
    subtitle: 'Белогривые лошадки',
  },
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient colors={WEATHER_OPTIONS[condition].gradient} style={s.container}>
      <StatusBar barStyle="light-content" />
      <View style={s.topHalfContainer}>
        <Ionicons name={WEATHER_OPTIONS[condition].iconName} size={90} color="grey" />
        <Text style={s.text}>{temp}°</Text>
      </View>
      <View style={s.bottomHalfContainer}></View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: propTypes.number.isRequired,
  condition: propTypes.oneOf([
    'Thunderstorm',
    'Drizzle',
    'Rain',
    'Snow',
    'Atmosphere',
    'Clear',
    'Clouds',
  ]).isRequired,
};

const s = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topHalfContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 42,
    color: 'white',
  },
  bottomHalfContainer: {
    flex: 1,
  },
});
