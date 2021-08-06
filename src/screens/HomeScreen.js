import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Loader from '../components/Loader';
import NewsArticleListItem from '../components/NewsArticleListItem';

const HomeScreen = () => {

  const [newsArticleList, setNewsArticleList] = useState([]);
  const [showLoadingScreen, setShowLoadingScreen] = useState(false);

  const fetchTopHighlights = () => {

    setShowLoadingScreen(true);

    fetch(`https://toofan-xpress-backend.herokuapp.com/top-headlines`)
      .then(response => (response.json()))
      .then(data => {
        setShowLoadingScreen(false);
        setNewsArticleList(data.articles);
      })
      .catch(error => console.error(error));
  };


  useEffect(() => {
    fetchTopHighlights();
  }, []);

  let childToRender = showLoadingScreen ? (<Loader />) : (
    <View style={styles.homeScreen}>
      <ScrollView style={styles.newsList}>
        {newsArticleList.map((article, index) => (
          <NewsArticleListItem article={article} key={index} />
        ))}
      </ScrollView>
    </View>);

  return childToRender;
};





const styles = StyleSheet.create({
  homeScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  newsList: {
    marginTop: 10,
  },
});

export default HomeScreen;
