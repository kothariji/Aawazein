import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import NewsArticleListItem from '../components/NewsArticleListItem';

const CategoryWiseNews = ({ route }) => {

  const [newsArticleList, setNewsArticleList] = useState([]);

  const newsCategory = route.name;

  const fetchCategoryWiseNews = () => {

    fetch(`https://toofan-xpress-backend.herokuapp.com/category?q=${newsCategory}`)
      .then(response => (response.json()))
      .then(data => {
        setNewsArticleList(data.articles);
      })
      .catch(error => console.error(error));
  };


  useEffect(() => {
    fetchCategoryWiseNews();
  }, []);

  return (
    <View style={styles.homeScreen}>
      <ScrollView style={styles.newsList}>
        {newsArticleList.map((article, index) => (
          <NewsArticleListItem article={article} key={index} />
        ))}
      </ScrollView>
    </View>
  );
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
