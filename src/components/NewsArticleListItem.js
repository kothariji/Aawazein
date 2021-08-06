import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const NewsArticleListItem = ({ article }) => {
  return (
    <View style={styles.listItem}>
      <Image
        style={styles.listItemImage}
        source={{
          uri: `${article.urlToImage}`,
        }}
        resizeMode={'cover'}
      />
      <View>
        <Text style={styles.listItemText}>{article.title.substring(0, 60)}...</Text>
        {/* <Text style={styles.listItemSource}>{article.source.name}</Text> */}
        <Text style={styles.listItemNewsLink}>Go to News</Text>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({

  listItem: {
    flexDirection: 'row',
    marginBottom: 10,
    marginHorizontal: 10,
    padding: 10,
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 5,
    borderRadius: 10,
    maxWidth: '95%',
    height: 80,
  },

  listItemImage: {
    width: 60,
    height: 60,
  },

  listItemText: {
    marginLeft: 10,
    maxWidth: '90%',
  },

  listItemNewsLink: {
    paddingTop: 10,
    paddingLeft: 210,
    fontStyle: 'italic',
  },
});

export default NewsArticleListItem;
