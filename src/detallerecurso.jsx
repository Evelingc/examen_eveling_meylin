import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {useRoute} from '@react-navigation/native';

const DetalleCursoView = ({navigation}) => {

    const route = useRoute();
    const curso = route.params?.newsItem;

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
  );
};

const styles = StyleSheet.create({
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

export default DetalleCursoView;
