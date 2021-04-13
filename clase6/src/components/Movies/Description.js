import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableWithoutFeedback } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  link: {
    color: '#2980b9',
    textDecorationLine: 'underline',
  },
  description: {
    margin: 5,
    paddingRight: 10,
    fontStyle: 'italic',
  },
});

class Description extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showDescription: false,
    };
  }

  toggleDescription = () =>
    this.setState(({ showDescription }) => ({
      showDescription: !showDescription,
    }));

  render() {
    const { description } = this.props;
    const { showDescription } = this.state;

    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback
          onPress={this.toggleDescription}>
          <Text style={styles.link}>Ver descripción</Text>
        </TouchableWithoutFeedback>
        {showDescription && (
          <Text style={styles.description}>{description}</Text>
        )}
      </View>
    );
  }
}

export default Description;
