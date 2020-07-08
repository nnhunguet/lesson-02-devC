import React, { Fragment } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import { Feather } from '@expo/vector-icons';

function Post({post}) {
  return(
    <View style={styles.container}>
      <View style={styles.wrapAuthor}>
        <Image
          style={styles.avatar}
          source={{
            uri: post.avatar
          }}
        >
        </Image>
        <Text style={styles.nameAuthor}>
          {post.name}
        </Text>
      </View>
      <View style={styles.imageWrapper}>
        <Image
          style={styles.image}
          source={{
            uri: post.image
          }}
        >
        </Image>
      </View>
      <View style={styles.reactionWrapper}>
        <View style={styles.reactionIcons}> 
          <Feather 
            name="heart" 
            style={styles.reactionIcon}
            onPress={() => alert("Liked")}
          ></Feather>
          <Feather name="message-square" style={styles.reactionIcon}></Feather>
          <Feather name="share" style={styles.reactionIcon}></Feather>
        </View>
        <View style={styles.likeCountWrapper}>
          <Feather name="heart" style={styles.reactionLikeCount}></Feather>
          <Text style={styles.likeCount}> {post.likeCount} likes</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  wrapAuthor: {
    marginLeft: 10,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },  
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 50/2,
    marginRight: 10
  },
  nameAuthor: {
    fontWeight: "bold"
  },
  imageWrapper: {
    height: 300
  },
  image: {
    flex: 1,
    width: null,
    height: null,
  },
  reactionIcons: {
    flexDirection: "row",
    flex: 1,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    paddingBottom: 4,
  },
  reactionIcon: {
    fontSize: 27,
    color: "black",
    marginHorizontal: 8,
    marginTop: 8,
  },
  likeCountWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    paddingVertical: 5,
  },
  reactionLikeCount: {
    marginLeft: 8,
    fontSize: 27,
    color: "black", 
  },
  likeCount: {
    fontSize: 16,
    fontWeight: "bold"
  }
})

export default Post;