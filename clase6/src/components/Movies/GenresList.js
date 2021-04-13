import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import GenreChip from '../GenreChip';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  list: {
    marginVertical: 10,
  },
});

const GenresList = ({ genres }) => (
  <View style={styles.container}>
    <FlatList
      data={genres}
      style={styles.list}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={genreName => {
        return genreName;
      }}
      renderItem={({ item: genreName }) => <GenreChip value={genreName} />}
    />
  </View>
);

export default GenresList;
