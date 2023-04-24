import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

export default function Loading() {
  return (
    <View style={s.container}>
      <StatusBar barStyle="dark-content" />

      <Text style={s.text}>Loading weather...</Text>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 30,
    paddingVertical: 100,
    backgroundColor: '#fdf6aaya',
  },
  text: {
    color: '#2c2c2c',
    fontSize: 30,
  },
});
