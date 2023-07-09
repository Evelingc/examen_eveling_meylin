import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import App from './src/home';
import DetalleCursoView from './src/detalleRecurso';
import RecursoList from './src/recursosList';

const Stack = createNativeStackNavigator();

export function AppLearn() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="App" component={App} options={{title: 'Home'}} />
          <Stack.Screen name="DetalleCurso" component={DetalleCursoView} options={{title: 'Detalle Curso'}} />
          <Stack.Screen name="RecursoList" component={RecursoList} options={{title: 'Lista Recurso'}} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}