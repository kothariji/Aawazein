import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import NewsArticleListItem from '../components/NewsArticleListItem';
import Loader from '../components/Loader';

const CategoryWiseNews = ({ route }) => {

  const [newsArticleList, setNewsArticleList] = useState([]);
  const [showLoadingScreen, setShowLoadingScreen] = useState(false);

  const newsCategory = route.name;

  const fetchCategoryWiseNews = () => {

    setShowLoadingScreen(true);

    fetch(`https://toofan-xpress-backend.herokuapp.com/category?q=${newsCategory}`)
      .then(response => (response.json()))
      .then(data => {
        setShowLoadingScreen(false);
        setNewsArticleList(data.articles);
      })
      .catch(error => console.error(error));
  };


  useEffect(() => {
    fetchCategoryWiseNews();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  let childToRender = showLoadingScreen ? (<Loader />) : (
    <View style={styles.homeScreen}>
      <ScrollView style={styles.newsList}>
        {newsArticleList
          .filter((article) => article.urlToImage !== null)
          .map((article, index) => (
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

export default CategoryWiseNews;
