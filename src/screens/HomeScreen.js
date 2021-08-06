import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Loader from '../components/Loader';
import NewsArticleListItem from '../components/NewsArticleListItem';
import { Input } from 'native-base';
import axios from 'axios';

const HomeScreen = () => {

  const [newsArticleList, setNewsArticleList] = useState([]);
  const [showLoadingScreen, setShowLoadingScreen] = useState(false);

  const fetchTopHighlights = () => {

    setShowLoadingScreen(true);

    let cancelToken;

    if (typeof cancelToken !== typeof undefined) {
      cancelToken.cancel('Cancelling Old Request');
    }

    //creating a cancel token
    cancelToken = axios.CancelToken.source();

    axios.get(`https://toofan-xpress-backend.herokuapp.com/top-headlines`, {
      cancelToken: cancelToken.token,
    })
      .then(response => {
        setShowLoadingScreen(false);
        setNewsArticleList(response.data.articles);
      })
      .catch(error => console.error(error));
  };

  const handleSearchInputChange = (searchQueryText) => {

    setShowLoadingScreen(true);
    fetch(`https://toofan-xpress-backend.herokuapp.com/search?q=${searchQueryText}`)
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



  return (
    <View style={styles.homeScreen}>
      <Input
        w="95%"
        mx={20}
        mt={3}
        placeholder="Search News"
        style={styles.searchInput}
        onChangeText={handleSearchInputChange}
      />
      {showLoadingScreen ? (<Loader />) : (
        <ScrollView style={styles.newsList}>
          {newsArticleList
            .filter((article) => article.urlToImage !== null)
            .map((article, index) => (
              <NewsArticleListItem article={article} key={index} />
            ))}
        </ScrollView>)}
    </View>
  );
};





const styles = StyleSheet.create({
  homeScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  searchInput: {

  },
  newsList: {
    marginTop: 10,
  },
});

export default HomeScreen;
