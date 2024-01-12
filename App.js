
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
import Register from './Component/Register';
import User from './Component/User';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Header />
      <Stack.Navigator>
        <Stack.Screen name="Trang chủ" component={Home} />
        <Stack.Screen name="Chi tiết sản phẩm" component={ProductDetail} />
        <Stack.Screen name="Đăng nhập" component={Login} />
        <Stack.Screen name="Đăng ký" component={Register} />
        <Stack.Screen name="Giỏ hàng" component={Cart} />
        <Stack.Screen name="Tài khoản" component={User} />
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