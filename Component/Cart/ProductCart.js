 import React, { useContext, useEffect, useState } from 'react';
 import { Text, StyleSheet, Image, View, FlatList, TouchableOpacity, Button } from 'react-native';
 import { useNavigation } from '@react-navigation/native';
 import { CartContext } from '../CartProvider/CartContext';
import { AsyncStorage } from 'react-native';

 const CartScreen = () => {
    const { updateCartItemCount } = useContext(CartContext);
    const navigation = useNavigation();
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
 
//  const renderItem = ({ item }) => (
//     <View style={styles.productItem}>
//       <Image source={{ uri: item.images[0] }} style={styles.productImage} />
//       <Text style={styles.productName}>{item.title}</Text>
//       <Text style={styles.productPrice}>${item.price}</Text>
//     </View>
//   );
//   return(
//     <View style={styles.container}>
//         <Text style={styles.title}>
//             Giỏ hàng của bạn
//         </Text>
//         {cartItems.length>0?(
//             <FlatList
//             data={cartItems}
//             renderItem={renderItem}
//             keyExtractor={(item)=>item.id.toString()}
//             contentContainerStyle={styles.cartList}
//         />
//         ):(
//             <Text style={styles.emtyCartText}>Chưa có sản phẩm nào!</Text>
//         )}
//         <TouchableOpacity style={styles.checkoutButton}>
//             <Text style={styles.checkoutButtonText}>
//                 Checkout
//             </Text>
//         </TouchableOpacity>
//     </View>
//   );
// };
useEffect(() => {
    fetchCartItems();
  }, []);

  useEffect(() => {
    calculateTotalPrice();
  }, [cartItems]);

  const fetchCartItems = async () => {
    try {
      const cartItemsData = await AsyncStorage.getItem('cartItems');
      if (cartItemsData) {
        const parsedCartItems = JSON.parse(cartItemsData);
        setCartItems(parsedCartItems);
        updateCartItemCount(getCartItemCount(parsedCartItems));
      }
    } catch (error) {
      console.log('Error fetching cart items:', error);
    }
  };

  const handleRemoveItem = async (itemId) => {
    try {
      const updatedCartItems = cartItems.map(item => {
        if (item.id === itemId) {
          item.quantity -= 1;
          if (item.quantity === 0) {
            return null;
          }
        }
        return item;
      }).filter(Boolean);

      setCartItems(updatedCartItems);
      await AsyncStorage.setItem('cartItems', JSON.stringify(updatedCartItems));

      updateCartItemCount(getCartItemCount(updatedCartItems));

    } catch (error) {
      console.log('Error removing item from cart:', error);
    }
  };

  const calculateTotalPrice = () => {
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    setTotalPrice(totalPrice);
  };

  const getCartItemCount = (cartItems) => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const handleCheckout = () => {
    navigation.navigate('Payment');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Giỏ hàng của bạn</Text>
      {cartItems.length > 0 ? (
        <FlatList
          data={cartItems}
          renderItem={({ item }) => (
            <View style={styles.cartItem}>
              <Image source={{ uri: item.image }} style={styles.cartItemImage} />
              <View style={styles.cartItemInfo}>
                <Text style={styles.cartItemTitle}>{item.title} ({item.quantity})</Text>
                <Text style={styles.cartItemPrice}>Price: ${item.price.toFixed(2)}</Text>
              </View>
              <TouchableOpacity onPress={() => handleRemoveItem(item.id)}>
                <Text style={styles.removeItemButton}>Remove</Text>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      ) : (
        <Text style={styles.emptyCartText}>Chưa có sản phẩm nào trong giỏ hàng!</Text>
      )}
      <Text style={styles.totalPrice}>Tổng tiền: ${totalPrice.toFixed(2)}</Text>
      <Button title="Checkout" onPress={handleCheckout} />
    </View>
  );
};

const styles = StyleSheet.create({
        container: {
            flex: 1,
            padding: 16,
        },
        title: {
            flex: 10,
            color: 'red',
            fontSize: 20,
            fontWeight: 'bold',
    
        },
        headd: {
            flex: 10,
            fontSize: 11,
            fontWeight: 'bold',
            backgroundColor: '#ddd',
        },
        d: {
            flex: 2,
            padding: 16,
            marginTop: 5,
        },
        productImage: {
            width: 150,
            height: 150,
            resizeMode: 'cover',
            marginBottom: 8,
            borderRadius: 4,
        },
    });
    
// import React, { useState } from 'react';
// import { StatusBar } from 'expo-status-bar';
// import { ScrollView, Text, StyleSheet, Image, View } from 'react-native';
// import { FlatList } from 'react-native';

// export default function Cart() {
//     // //const {navigation}=props;
//     // const data=navigation.getParam('data','');

//     // const [count,setCount]=useState(1);
//     // const [list,setList]=useState([]);
//     // const DanhSachSanPham=()=>
//     // {
//     //     setList(global.mycart);
//     //     const newList=[{data},global.mycart];
//     //     setList(newList);
//     //     global.mycart=newList;
//     //     console.log("Gio hang sau khi them: ");
//     //     console.log(global.mycart);
//     // }
//     // const renderItems=({index,item})=>
//     // {
//     //     return(

//     //     )
//     // }
//     // Khởi tạo trạng thái giỏ hàng
//     const [cartItems, setCartItems] = useState([]);

//     return (
//         console.log(cartItems)
//         // <ScrollView style={styles.container}>
//         //     <View>
//         //         <Text style={styles.title}>Giỏ hàng:</Text>
//         //         {cartItems.map(item => (
//         //             <View key={item.id}>
//         //                 <Text>{item.name}</Text>
//         //                 <Text>{item.price}</Text>
//         //                 <Text>Số lượng: {item.quantity}</Text>
//         //             </View>
//         //         ))}
                
//         //          <StatusBar style="auto" />
//         //     </View>
//         // </ScrollView>
//     )
// };
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         padding: 16,
//     },
//     title: {
//         flex: 10,
//         color: 'red',
//         fontSize: 20,
//         fontWeight: 'bold',

//     },
//     headd: {
//         flex: 10,
//         fontSize: 11,
//         fontWeight: 'bold',
//         backgroundColor: '#ddd',
//     },
//     d: {
//         flex: 2,
//         padding: 16,
//         marginTop: 5,
//     },
//     productImage: {
//         width: 150,
//         height: 150,
//         resizeMode: 'cover',
//         marginBottom: 8,
//         borderRadius: 4,
//     },
// });
