import React, { Component } from 'react';
import {View,
  Text,
  FlatList,
  StyleSheet,
  ScrollView,
  Button,
  Image,
} from 'react-native'
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
      <ScrollView>
        <Button
        title="About"
        onPress={() => this.props.navigation.navigate('About')}
      />
      <Text style={styles.welcome}>Welcome to Magic: Gathering!</Text>
      <Text style={styles.tagline}>Collect the wizards and rule the world!</Text>
      <FlatList
        data={this.state.cards}
        renderItem={({item}) =>
          <View key={item.id} style={styles.listItem}>
            <Image
              style={styles.img}
              source={{uri:item.imageUrl}}
            />
            <Text style={styles.item}>{item.name}</Text>
            <Button
              title="See detail"
              onPress={() => this.props.navigation.navigate('Details',{
                itemId: item.id
              })}
            />
          </View>
        }
      />
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  tagline: {
    textAlign: 'center',
    marginBottom: 5,
  },
  img: {
    width: 100,
    height: 100,
    padding: 10
  },
  listItem: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'flex-start',
    width: 150,
    height: 170,
    padding: 10,
    margin: 5,
  },
  item:{
    paddingTop: 2,
    color: 'blue'
  }
});

export default Home;