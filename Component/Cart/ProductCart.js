 import React from 'react';
 import { Text, StyleSheet, Image, View, FlatList, TouchableOpacity } from 'react-native';

 export default function Cart({route}){
    const {cartItems} = route.params;
 
 const renderItem = ({ item }) => (
    <View style={styles.productItem}>
      <Image source={{ uri: item.images[0] }} style={styles.productImage} />
      <Text style={styles.productName}>{item.title}</Text>
      <Text style={styles.productPrice}>${item.price}</Text>
    </View>
  );
  return(
    <View style={styles.container}>
        <Text style={styles.title}>
            Giỏ hàng của bạn
        </Text>
        {cartItems.length>0?(
            <FlatList
            data={cartItems}
            renderItem={renderItem}
            keyExtractor={(item)=>item.id.toString()}
            contentContainerStyle={styles.cartList}
        />
        ):(
            <Text style={styles.emtyCartText}>Chưa có sản phẩm nào!</Text>
        )}
        <TouchableOpacity style={styles.checkoutButton}>
            <Text style={styles.checkoutButtonText}>
                Checkout
            </Text>
        </TouchableOpacity>
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
