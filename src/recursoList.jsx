import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {useRoute} from '@react-navigation/native';
import { recursosAprendizaje as data } from './db';

const RecursoList = ({navigation}) => {
  const route = useRoute();
  const campo = route.params?.campo;

  const RenderCampoItem = ({item}) => {
    return (
      <>
        {campo === item.campo ? (
          <View style={styles.campoItem}>
            <Text style={styles.campoTitle}>{item.campo}</Text>
            <FlatList
              data={item.recursos}
              renderItem={({item}) => <RenderRecursoItem item={item} />}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        ) : null}
      </>
    );
  };

  const RenderRecursoItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.recursoItem}
        onPress={() => navigation.navigate('DetalleCurso', {newsItem: item})}>
        <Text style={styles.recursoItemType}>{item.tipo}</Text>
        <Text style={styles.recursoItemTitle}>{item.titulo}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <TouchableOpacity>
            <RenderCampoItem item={item} />
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  campoItem: {
    marginBottom: 20,
  },
  campoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  recursoItem: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  recursoItemType: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  recursoItemTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  recursoItemDescription: {
    marginBottom: 10,
  },
  recursoItemInstructor: {
    fontStyle: 'italic',
    marginBottom: 5,
  },
  recursoItemDuration: {
    marginBottom: 5,
  },
  filterButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    backgroundColor: '#ccc',
    marginRight: 10,
    marginBottom: 10,
  },
  selectedFilterButton: {
    backgroundColor: 'blue',
  },
  filterButtonText: {
    color: 'white',
  },
});

export default RecursoList;