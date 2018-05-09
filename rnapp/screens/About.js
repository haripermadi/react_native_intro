import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Button,
  Image
} from 'react-native'

class About extends Component {
  render() {
    return (
      <View>
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
        <Text>About Page</Text>
        <Image
          style={styles.stretch}
          source={{uri:'https://upload.wikimedia.org/wikipedia/en/thumb/a/aa/Magic_the_gathering-card_back.jpg/200px-Magic_the_gathering-card_back.jpg'}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  stretch: {
    width: 100,
    height: 100
  }
})

export default About;