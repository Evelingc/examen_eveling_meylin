import React, { useState } from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import { recursosAprendizaje as data } from './db';

const TemasRecursos = ({navigation}) => {

    const [selectedCampo, setSelectedCampo] = useState('');
  const RenderCampoItem = ({item}) => {
    return (
      <View style={styles.campoItem}>
        <Text style={styles.campoTitle}>{item.campo}</Text>
        <FlatList
          data={item.recursos}
          renderItem={({item}) => (<RenderRecursoItem item={item} />)}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
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

  const handleCampoFilter = (campo) => {
    setSelectedCampo(campo);
    navigation.navigate('RecursoList', {campo: campo})
  };

  return (
    <View style={styles.container}>
        <TouchableOpacity
          style={[styles.filterButton, selectedCampo === 'Desarrollo web' && styles.selectedFilterButton]}
          onPress={() => handleCampoFilter('Desarrollo web')}
        >
          <Text style={styles.filterButtonText}>Desarrollo web</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.filterButton, selectedCampo === 'Ciencia de datos' && styles.selectedFilterButton]}
          onPress={() => handleCampoFilter('Ciencia de datos')}
        >
          <Text style={styles.filterButtonText}>Ciencia de datos</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.filterButton, selectedCampo === 'Diseño gráfico' && styles.selectedFilterButton]}
          onPress={() => handleCampoFilter('Diseño gráfico')}
        >
          <Text style={styles.filterButtonText}>Diseño gráfico</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.filterButton, selectedCampo === 'Marketing digital' && styles.selectedFilterButton]}
          onPress={() => handleCampoFilter('Marketing digital')}
        >
          <Text style={styles.filterButtonText}>Marketing digital</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.filterButton, selectedCampo === 'Idiomas' && styles.selectedFilterButton]}
          onPress={() => handleCampoFilter('Idiomas')}
        >
          <Text style={styles.filterButtonText}>Idiomas</Text>
        </TouchableOpacity>
      <Text style={styles.heading}>Temas y Recursos</Text>
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

export default TemasRecursos;
