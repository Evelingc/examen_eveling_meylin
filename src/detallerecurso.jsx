import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {useRoute} from '@react-navigation/native';
//Aquí se importan los módulos necesarios para construir la interfaz de usuario en React Native 
//y obtener la ruta actual de la navegación.
//`React` se importa de la biblioteca 'react'.
//`View`, `Text` y `StyleSheet` se importan de la biblioteca 'react-native' para construir 
//componentes de la interfaz de usuario y estilos.
//`useRoute` se importa de la biblioteca '@react-navigation/native' y 
//se utilizará para obtener la ruta actual en la navegación.

const DetalleCursoView = ({navigation}) => {
//Aquí se define un componente de función llamado `DetalleCursoView`. 
//Recibe la prop `navigation` que se utilizará para la navegación.
    const route = useRoute();
    const curso = route.params?.newsItem;
//Se utiliza `useRoute` para obtener la ruta actual y se asigna a la variable `route`.
//La variable `curso` se inicializa con el valor de `route.params?.newsItem`. 
//Esto significa que `curso` obtendrá el valor del parámetro 'newsItem' de la ruta actual si existe, 
//de lo contrario, será `undefined`.

  return (
    <View style={styles.container}>
      <Text style={styles.tipo}>{curso.tipo}</Text>
      <Text style={styles.titulo}>{curso.titulo}</Text>
      <Text style={styles.descripcion}>{curso.descripcion}</Text>
      {curso.instructor ? <Text style={styles.instructor}>Instructor: {curso.instructor}</Text>: null}
      {curso.duracion ? <Text style={styles.duracion}>Duración: {curso.duracion}</Text> : null}
      {curso.nivel ? <Text style={styles.nivel}>Nivel: {curso.nivel}</Text>: null}
      {curso.formato ? <Text style={styles.precio}>Formato: {curso.formato}</Text>: null}
      <Text style={styles.precio}>Precio: {curso.precio}</Text>
    </View>
  );//El componente `DetalleCursoView` devuelve una vista contenedora con el estilo `styles.container`.
  //Dentro de la vista, se muestran varios componentes `Text` que muestran información sobre el curso.
  //Los valores se obtienen del objeto `curso`, que se basa en el parámetro 'newsItem' de la ruta actual.
  //Si existen valores para `curso.instructor`, `curso.duracion`, `curso.nivel` y `curso.formato`, se muestran en forma de texto.
  //Finalmente, se muestra el precio del curso.
  
};

const styles = StyleSheet.create({   // Estilos CSS para los componentes
  //Aquí se define un objeto `styles` 
//que contiene estilos CSS utilizando la función `StyleSheet.create()` de React Native.
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  tipo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  descripcion: {
    fontSize: 16,
    marginBottom: 10,
  },
  instructor: {
    fontSize: 16,
    marginBottom: 5,
  },
  duracion: {
    fontSize: 16,
    marginBottom: 5,
  },
  nivel: {
    fontSize: 16,
    marginBottom: 5,
  },
  precio: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default DetalleCursoView;//Se exporta el componente `DetalleCursoView` como el valor predeterminado del módulo. 
//Esto permitirá que otros módulos lo importen y lo utilicen
