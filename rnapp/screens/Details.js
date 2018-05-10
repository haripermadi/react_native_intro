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
  static navigationOptions = {
    title: 'Back',
    headerStyle: {
      backgroundColor: '#1B1464',
    },
    headerTintColor: 'white',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

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
  //   const { navigation } = this.props;
  //   const itemId = navigation.getParam('itemId', 'NO-ID')
  //   this.getCardDetail(itemId)
    this.getCard()
  }

  render() {
    console.log(this.state.detail)
    return (
      <ScrollView style={styles.container}>
        {this.state.detail === '' ? 
          <View style={styles.listItem}>
            <Text style={styles.welcome}>Loading data...</Text>
          </View>
          :
          <View>
        <Text style={styles.title}>{this.state.detail.name}</Text>
        <Image
              style={styles.img}
              source={{uri:this.state.detail.imageUrl}}
        />
        <Text style={styles.text}>Description: {this.state.detail.text}</Text>
        <Text style={styles.text}>Power: {this.state.detail.power}</Text>
        <Text style={styles.text}>Rarity: {this.state.detail.rarity}</Text>
        <Text style={styles.text}>Type: {this.state.detail.type}</Text>
        </View>
        }
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 0,
    backgroundColor: '#0652DD',
    height: '100%',
    paddingBottom: 20
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
  },
  title: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 10
  }
});

export default Details
// const mapStateToProps = (state) => ({
//   card: state.cardsDetail
// })

// const mapDispatchToProps = (dispatch) => bindActionCreators({
//   getCardDetail
// }, dispatch)

// export default connect(mapStateToProps, mapDispatchToProps) (Details);