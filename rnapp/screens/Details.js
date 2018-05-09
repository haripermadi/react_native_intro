import React, { Component } from 'react';
import {View,
  StyleSheet,
  Text,
  Button,
  Image,
  ScrollView
} from 'react-native'
import axios from 'axios'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getCardDetail} from '../store/Cards/card.actions'

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
      <ScrollView style={styles.container}>
          <Image
              style={styles.img}
              source={{uri:this.state.detail.imageUrl}}
          />
        <Text style={styles.text}>Name: {this.state.detail.name}</Text>
        <Text style={styles.text}>Description: {this.state.detail.text}</Text>
        <Text style={styles.text}>Power: {this.state.detail.power}</Text>
        <Text style={styles.text}>Rarity: {this.state.detail.rarity}</Text>
        <Text style={styles.text}>Type: {this.state.detail.type}</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 0,
    backgroundColor: '#3c6382',
    height: '100%'
  },
  img: {
    width: 200,
    height: 300,
    padding: 30,
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 80
  },
  text: {
    marginLeft: 10,
    paddingTop: 5,
    fontSize: 16,
    color: 'white'
  }
});

export default Details;