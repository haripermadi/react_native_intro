import React, { Component } from 'react';
import {View,
  Text,
  FlatList,
  StyleSheet,
  ScrollView,
  Button,
  Image,
} from 'react-native'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getNews} from '../store/news/news.actions'

class News extends Component {
  static navigationOptions = {
    title: 'News',
    headerStyle: {
      backgroundColor: '#EA2027',
    },
    headerTintColor: 'white',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  componentDidMount () {
    this.props.getNews()
  }

  render() {
    console.log('ini props',this.props.news)
    return (
      <ScrollView>
        <Text style={styles.welcome}>Top Headlines News!!!</Text>
        {this.props.news.loading ? 
          <View style={styles.listItem}>
            <Text style={styles.welcome}>Loading data...</Text>
          </View>
          :
          <FlatList
          data={this.props.news.data}
          keyExtractor={(item, index) => index}
          renderItem={({item}) =>
            <View style={styles.listItem}>
              <Image
                style={styles.img}
                source={{uri:item.urlToImage}}
              />
            <Text>{item.title}</Text>
            <Text>{item.description}</Text>
              <Text style={styles.item}
                onPress={()=>this.props.navigation.navigate('NewsDetail',{
                  url: item.url
                })}
              >See detail</Text>
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
    fontWeight: 'bold'
  },
  img: {
    width: 300,
    height: 150,
    padding: 10,
    marginBottom: 5
  },
  listItem: {
    flex: 1,
    justifyContent:'flex-start',
    alignItems: 'center',
    padding: 20
  },
  item:{
    paddingTop: 5,
    color: 'blue',
    fontSize: 16,
    textAlign: 'center'
  }
});

const mapStateToProps = (state) => ({
  news: state.news
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getNews
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps) (News);