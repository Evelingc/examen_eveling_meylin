import React, { useState } from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import { recursosAprendizaje as data } from './db';
//En esta sección se importan los módulos necesarios para construir la interfaz de usuario en React Native.
//`React` y `useState` se importan de la biblioteca 'react'.
//`View`, `Text`, `StyleSheet`, `FlatList` y `TouchableOpacity` se importan de la biblioteca 'react-native' para construir componentes de la interfaz de usuario y estilos.
//`recursosAprendizaje` se importa de './db'. Presumiblemente, es un conjunto de datos que contiene recursos de aprendizaje.

const TemasRecursos = ({navigation}) => {
    //Aquí se define un componente funcional llamado `TemasRecursos`.
    const [selectedCampo, setSelectedCampo] = useState('');
// Utiliza el hook `useState` para inicializar el estado `selectedCampo`
// como una cadena vacía y la función `setSelectedCampo` para actualizar ese estado.

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
//RenderCampoItem` es un componente funcional que renderiza los elementos relacionados con un campo específico.
//Renderiza un `View` que contiene el título del campo (`item.campo`) y una lista de recursos utilizando `FlatList`.
//Para cada elemento de la lista de recursos, se renderiza un componente `RenderRecursoItem` y se pasa el elemento como prop `item`.
//`keyExtractor` se utiliza para asignar una clave única a cada elemento de la lista.
      
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
//`RenderRecursoItem` es un componente funcional que renderiza un recurso individual.
//Utiliza `TouchableOpacity` para crear un área de presionar en el recurso.
//Cuando se presiona un recurso, se navega a la pantalla 'DetalleCurso' y se pasa el objeto `item` como parámetro con la clave 'newsItem'.
//Se muestra el tipo del recurso (`item.tipo`) y el título (`item.titulo`) dentro del componente `TouchableOpacity`.

  };

  const handleCampoFilter = (campo) => {
    setSelectedCampo(campo);
    navigation.navigate('RecursoList', {campo: campo})
  };//handleCampoFilter` es una función que se ejecuta cuando se selecciona un campo.
//Actualiza el estado `selectedCampo` con el campo seleccionado y navega a la pantalla 'RecursoList', 
//pasando el campo como parámetro con la clave 'campo'.
  

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
//El componente `TemasRecursos` devuelve una vista contenedora con el estilo `styles.container`.
//Dentro de la vista, hay varios componentes `TouchableOpacity` que representan los botones de filtro para cada campo.
//Cada botón tiene un estilo condicional basado en si el `selectedCampo` coincide con el campo correspondiente. Si es así, se aplica el estilo `selectedFilterButton`.
//Al hacer clic en un botón de filtro, se llama a la función `handleCampoFilter` con el campo correspondiente.
//Luego, se muestra el título "Temas y Recursos" con estilo `styles.heading`.
//Finalmente, se muestra una lista de elementos de `data` utilizando `FlatList`. Cada elemento se renderiza dentro de un componente `TouchableOpacity` y se pasa al componente `RenderCampoItem`.
    
  );
};

const styles = StyleSheet.create({  // Estilos CSS para los componentes
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
  //Aquí se define un objeto `styles` que contiene estilos
  // CSS utilizando la función `StyleSheet.create()` de React Native.
});

export default TemasRecursos;// Se exporta el componente `TemasRecursos` como el valor predeterminado del módulo. 
//Esto permitirá que otros módulos lo importen y lo utilicen.
