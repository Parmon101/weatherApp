import React from 'react';
import propTypes from 'prop-types';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { WEATHER_OPTIONS } from './constants';

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient colors={WEATHER_OPTIONS[condition].gradient} style={s.container}>
      <StatusBar barStyle="light-content" />
      <View style={s.topHalfContainer}>
        <MaterialCommunityIcons
          name={WEATHER_OPTIONS[condition].iconName}
          size={90}
          color="white"
        />
        <Text style={s.temp}>{temp}°</Text>
      </View>
      <View style={{ ...s.bottomHalfContainer, ...s.textContainer }}>
        <Text style={s.title}>{WEATHER_OPTIONS[condition].title}</Text>
        <Text style={s.subtitle}>{WEATHER_OPTIONS[condition].subtitle}</Text>
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
    'Sunny',
    'Dust',
    'Smoke',
    'Haze',
    'Mist',
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
  bottomHalfContainer: {
    flex: 1,
  },
  temp: {
    fontSize: 42,
    color: 'white',
  },
  title: {
    color: 'white',
    fontSize: 44,
    fontWeight: '300',
    marginBottom: 10,
  },
  subtitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: '600',
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: 'flex-start',
  },
});
