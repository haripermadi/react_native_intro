import React, { Component } from 'react';
import {View, Text, FlatList} from 'react-native'
import axios from 'axios'

class Home extends Component {
  constructor () {
    super ()
    this.state ={
      cards: []
    }
  }

  getCards () {
    axios({
      method: 'get',
      url: 'https://api.magicthegathering.io/v1/cards'
    }).then(response => {
      console.log(response)
      this.setState({
        cards: response.data.cards
      })
    })
  }

  componentDidMount () {
    this.getCards()
  }

  render() {
    console.log(this.state.cards)
    return (
      <View>
      <Text>Hello Home page!</Text>
      <FlatList
        data={this.state.cards}
        renderItem={({item}) =>
          <View key={item.id}>
            <Text>{item.name}</Text>
          </View>
        }
      />
      </View>
    );
  }
}

export default Home;