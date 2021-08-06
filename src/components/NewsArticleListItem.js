import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, Linking } from 'react-native';
import { Modal, Button } from 'native-base';

const NewsArticleListItem = ({ article }) => {

  const [showNewsModal, setShowNewsModal] = useState(false);


  return (
    <TouchableOpacity style={styles.listItem} onPress={() => setShowNewsModal(true)}>
      <Image
        style={styles.listItemImage}
        source={{
          uri: `${article.urlToImage}`,
        }}
        resizeMode={'cover'}
      />
      <View>
        <Text style={styles.listItemText}>{article.title.substring(0, 100)}...</Text>
      </View>
      <Modal isOpen={showNewsModal} onClose={() => setShowNewsModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.Header>{article.title}</Modal.Header>
          <Modal.Body>
            <Image
              style={styles.modalNewsImage}
              source={{
                uri: `${article.urlToImage}`,
              }}
              resizeMode={'cover'}
            />
            <Text>{article.description}</Text>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group variant="ghost" space={2}>
              <Button
                onPress={() => {
                  Linking.openURL(article.url);
                }}
              >Open in Browser</Button>
              <Button
                onPress={() => {
                  setShowNewsModal(false);
                }}
              >
                CLOSE
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>

    </TouchableOpacity>
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

  modalNewsImage: {
    width: 300,
    height: 300,
    marginVertical: 20,
  },

});

export default NewsArticleListItem;
