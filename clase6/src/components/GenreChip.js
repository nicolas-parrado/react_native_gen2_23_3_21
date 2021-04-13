import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import genreColors from '../lib/genreColors.json';

const styles = StyleSheet.create({
  container: {
    padding: 5,
    paddingHorizontal: 10,
    margin: 5,
    borderRadius: 20,
  },
  text: {
    color: '#bdc3c7',
    fontWeight: 'bold',
  },
});

const GenreChip = ({ value, pressable, onPress }) => (
  <TouchableOpacity
    disabled={!pressable}
    style={[
      styles.container,
      { backgroundColor: genreColors[value] ? genreColors[value] : 'gray' },
    ]}
    onPress={() => onPress(value)}>
    <Text style={styles.text}>{value}</Text>
  </TouchableOpacity>
);

export default GenreChip;
