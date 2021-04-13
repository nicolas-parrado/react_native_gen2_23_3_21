import React from 'react';
import { View, StyleSheet } from 'react-native';
import GenresChip from './GenreChip';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

const Filters = ({ moviesGenres, onPress }) => {
  const genresChip = moviesGenres.map((genre, index) => (
    <GenresChip
      pressable
      onPress={onPress}
      key={`genres-${index}`}
      value={genre}
    />
  ));

  return <View style={styles.container}>{genresChip}</View>;
};

export default Filters;

