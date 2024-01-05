
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Header from './Component/Header';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Footer from './Component/Footer';
import Home from './Component/Home';
import ProductDetail from './Component/Product/ProductDetail';
import Cart from './Component/Cart/ProductCart';
import Login from './Component/Login';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Header />
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>

      <Footer />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;