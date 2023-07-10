import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import App from './src/home';
import DetalleCursoView from './src/detalleRecurso';
import RecursoList from './src/recursosList';
//Se importan los módulos necesarios para la navegación en React Native.
//`NavigationContainer` se importa de '@react-navigation/native' y se utiliza como un contenedor para la navegación en la aplicación.
//`createNativeStackNavigator` se importa de '@react-navigation/native-stack' y se utiliza para crear una pila de navegación nativa.
//`App`, `DetalleCursoView` y `RecursoList` se importan desde sus respectivas ubicaciones de archivo.


const Stack = createNativeStackNavigator();
//Se crea una instancia de la pila de navegación utilizando la función `c
//reateNativeStackNavigator`. La instancia se guarda en la constante `Stack`.

export function AppLearn() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="App" component={App} options={{title: 'Home'}} />
          <Stack.Screen name="DetalleCurso" component={DetalleCursoView} options={{title: 'Detalle Curso'}} />
          <Stack.Screen name="RecursoList" component={RecursoList} options={{title: 'Lista Recurso'}} />
        </Stack.Navigator>
      </NavigationContainer>
  );//Se define una función llamada `AppLearn` que se exporta como el valor predeterminado del módulo.
  // La función devuelve la estructura de la navegación de la aplicación.
//El componente `NavigationContainer` envuelve todo el contenido y proporciona un 
///contexto de navegación para los componentes hijos.
//`Stack.Navigator` define una pila de navegación que contiene múltiples pantallas.
// Cada pantalla se define mediante `Stack.Screen` y tiene un nombre, un componente 
//y opciones de navegación. En este caso, las pantallas se llaman "App", "DetalleCurso" y "RecursoList", y
// se asocian con los componentes `App`, `DetalleCursoView` y `RecursoList` respectivamente.
// Las opciones de navegación se utilizan para personalizar el título de cada pantalla.g
  

}