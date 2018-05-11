import React, { Component } from 'react';
import {View,
  Text,
  FlatList,
  StyleSheet,
  ScrollView,
  Button,
  Image,
  TouchableHighlight
} from 'react-native'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getCards} from '../store/Cards/card.actions'

import axios from 'axios'

class Home extends Component {
  constructor () {
    super ()
    this.state ={
      cards: []
    }
  }
  static navigationOptions = {
    title: 'Magic: The Gathering',
    headerStyle: {
      backgroundColor: '#1B1464',
    },
    headerTintColor: 'white',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  // getCards () {
  //   axios({
  //     method: 'get',
  //     url: 'https://api.magicthegathering.io/v1/cards'
  //   }).then(response => {
  //     console.log(response)
  //     this.setState({
  //       cards: response.data.cards
  //     })
  //   })
  // }

  componentDidMount () {
    // this.getCards()
    this.props.getCards()
    console.log('testtttt')
  }

  render() {
    return (
      <ScrollView>
      <Text style={styles.welcome}>Welcome to Magic: The Gathering!</Text>
      <Text style={styles.tagline}>Collect the wizards and rule the world!</Text>
      {this.props.cards.loading ? 
          <View>
            <Text style={styles.welcome}>Loading data...</Text>
          </View>
          :
      <FlatList
        data={this.props.cards.data}
        numColumns={3}
        renderItem={({item}) =>
          <View key={item.id} style={styles.listItem}>
            <TouchableHighlight
              onPress={() => this.props.navigation.navigate('Details',{
                itemId: item.id
              })}
            >
            <Image
              style={styles.img}
              source={{uri:item.imageUrl}}
            />
            </TouchableHighlight>
            <Text style={styles.item}
            >{item.name}</Text>
          </View>
        }
      />
      }
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
    width: 110,
    height: 150,
    padding: 10
  },
  listItem: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent:'center',
    alignItems: 'baseline',
    width: 150,
    height: 200,
    padding: 10,
    margin: 5,
  },
  item:{
    paddingTop: 2,
    color: 'blue',
    fontSize: 12,
    textAlign: 'center'
  }
});

const mapStateToProps = (state) => ({
  cards: state.cards
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getCards
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps) (Home);