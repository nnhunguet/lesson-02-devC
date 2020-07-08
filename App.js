import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Image, SafeAreaView, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';

import Post from './components/Post';

const feedData = [{
  "id": 1,
  "name": "Gardie Weedall",
  "image": "https://loremflickr.com/300/300",
  "likeCount": 136,
  "avatar": "https://api.adorable.io/avatars/200"
}, {
  "id": 2,
  "name": "Georg Paulon",
  "image": "https://loremflickr.com/300/300",
  "likeCount": 10,
  "avatar": "https://api.adorable.io/avatars/200"
}, {
  "id": 3,
  "name": "Maitilde Stowte",
  "image": "https://loremflickr.com/300/300",
  "likeCount": 61,
  "avatar": "https://api.adorable.io/avatars/200"
}, {
  "id": 4,
  "name": "Shani Gieves",
  "image": "https://loremflickr.com/300/300",
  "likeCount": 200,
  "avatar": "https://api.adorable.io/avatars/200"
}, {
  "id": 5,
  "name": "Imelda Mattheus",
  "image": "https://loremflickr.com/300/300",
  "likeCount": 113,
  "avatar": "https://api.adorable.io/avatars/200"
}, {
  "id": 6,
  "name": "Cherye Creamen",
  "image": "https://loremflickr.com/300/300",
  "likeCount": 189,
  "avatar": "https://api.adorable.io/avatars/200"
}];

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.ViewHeader}>
        <View style={styles.leftHeader}></View>
        <Image
          style={styles.image}
          source={require('./assets/instagram.png')}
          resizeMode="contain"
        >
        </Image>
        <View style={styles.inbox}>
          <Feather name="inbox" style={styles.inboxIcon}/>
        </View>
      </View>
      <View style={styles.ViewContainer}> 
        <FlatList
          data={feedData}
          renderItem={({ item }) => <Post post={item}/>}
          keyExtractor={item => item.id}
        >
        </FlatList>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f6fa',
  },
  ViewHeader: {
    backgroundColor: '#DCC',
    flexDirection: "row",
    height: 40,
    alignItems: "center",
    marginBottom: 10,
  },
  leftHeader: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: null,
    height: 40,
    marginLeft: 8,
  },
  inbox: {
    height: 40,
    flex: 1,
    alignItems: "flex-end",
    marginRight: 8,
    justifyContent: "center"
  },
  inboxIcon: {
    fontSize: 27 ,
    color:"black",
  },
  ViewContainer: {
    width: '100%',  
    marginBottom: 50,
  }
});
