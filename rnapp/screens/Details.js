import React, { Component } from 'react';
import {View,
  StyleSheet,
  Text,
  Button,
  Image
} from 'react-native'
import axios from 'axios'

class Details extends Component {
  constructor () {
    super ()
    this.state ={
      detail: {}
    }
  }

  getCard () {
    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID')
    axios({
      method: 'get',
      url: `https://api.magicthegathering.io/v1/cards/${itemId}`
    }).then(response => {
      console.log(response.data.card)
      this.setState({
        detail: response.data.card
      })
    })
  }

  componentDidMount () {
    this.getCard()
  }
  render() {
    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID')
    console.log(this.state.detail)
    return (
      <View>
          <Image
              style={styles.img}
              source={{uri:this.state.detail.imageUrl}}
            />
        <Text>Name: {this.state.detail.name}</Text>
        <Text>Description: {this.state.detail.text}</Text>
        <Text>Power: {this.state.detail.power}</Text>
        <Text>Rarity: {this.state.detail.rarity}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  img: {
    width: 200,
    height: 200,
    padding: 10
  },
});

export default Details;