import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {useRoute} from '@react-navigation/native';
import { recursosAprendizaje as data } from './db';
// En esta sección se importan los módulos necesarios de React, React Native y otros.
//React` y `useState` son importados de la biblioteca 'react'.
//View`, `Text`, `StyleSheet`, `FlatList` y `TouchableOpacity` son componentes proporcionados por React Native para construir interfaces de usuario.
//useRoute` se importa de la biblioteca '@react-navigation/native', que se utiliza para obtener la ruta actual en la navegación.
//recursosAprendizaje` se importa de './db'. Presumiblemente, es un conjunto de datos que contiene recursos de aprendizaje.


const RecursoList = ({navigation}) => {
  const route = useRoute();
  const campo = route.params?.campo;
//Aquí se define un componente de función llamado `RecursoList`. Recibe la prop `navigation` que se utilizará para navegar a la pantalla 'DetalleCurso'.
//useRoute` se utiliza para obtener la ruta actual y se asigna a la variable `route`.
// La variable `campo` se inicializa con el valor de `route.params?.campo`. Esto significa que `campo` obtendrá el valor del parámetro 'campo' de la ruta actual si existe, de lo contrario, será `undefined`.


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
//-`RenderCampoItem` es un componente de función que se encarga de renderizar los elementos relacionados con un campo específico.
//Si `campo` es igual al campo del elemento actual (`item.campo`), se muestra un `View` con el título del campo (`item.campo`) y una lista de recursos utilizando `FlatList`. El componente `RenderRecursoItem` se utiliza para renderizar cada recurso de la lista.
//Si `campo` no coincide con el campo del elemento actual, se muestra `null`.

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
//`RenderRecursoItem` es un componente de función que renderiza un recurso individual.
//Utiliza `TouchableOpacity` para crear un área de presionar sobre el recurso.
//Cuando se presiona un recurso, se navega a la pantalla 'DetalleCurso' y se pasa el objeto `item` como parámetro con la clave 'newsItem'.
//Se muestra el tipo del recurso (`item.tipo`) y el título (`item.titulo`) dentro del componente `TouchableOpacity`.

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
//- El componente `RecursoList` devuelve una vista contenedora con estilo `styles.container`.
//Se utiliza `FlatList` para mostrar una lista de elementos a partir de los datos proporcionados en `data`.
//Para cada elemento de `data`, se renderiza un componente `TouchableOpacity` envolviendo el componente `RenderCampoItem`, pasando el elemento como prop `item`.
//`keyExtractor` se utiliza para asignar una clave única a cada elemento de la lista.

  );
};

const styles = StyleSheet.create({//Estilos CSS para los componentes
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
  //Aquí se define un objeto `styles` 
  //que contiene estilos CSS utilizando la función `StyleSheet.create()` de React Native.
});

export default RecursoList;
//Se exporta el componente `RecursoList` como el valor predeterminado del módulo. 
//Esto permitirá que otros módulos lo importen y lo utilicen.