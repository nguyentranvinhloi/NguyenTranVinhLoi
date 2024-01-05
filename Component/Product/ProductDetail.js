import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const ProductDetail = ({ route }) => {
  const [rating, setRating] = useState(0);
  const { product } = route.params;
  const handleRating = (numStars) => {
    setRating(numStars);
  };

  // const handleAddToCart = () => {
  //   // Xử lý logic thêm sản phẩm vào giỏ hàng
  // };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chi tiết sản phẩm</Text>

      <Image
        source={{ uri: product.images[0] }}
        style={styles.image}
        resizeMode="cover"
      />
      <View>
        <Text>
                {"\n"}
                <Text style={styles.head}>
                    Tên sản phẩm:
                </Text>
                <Text>   </Text>
                <Text style={styles.headd}>
                {product.title}
                </Text>
            </Text>

            <Text>
                {"\n"}
                <Text style={styles.head}>
                    Gía:
                </Text>
                <Text>   </Text>
                <Text style={styles.headd}>
                ${product.price}
                </Text>
            </Text>
            
            <StatusBar style="auto" />
      </View>
      {/* Thêm phần hiển thị thông tin chi tiết sản phẩm */}
      <TouchableOpacity style={styles.addToCartButton} onPress={handleAddToCart}>
        <Text style={styles.addToCartText}>Thêm vào giỏ hàng</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    borderRadius: 10,
    width: '90%',
    height: 200,
    marginBottom: 16,
  },
  productInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'red',
  },
  ratingContainer: {
    flexDirection: 'row',
  },
  starIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  addToCartButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 16,
  },
  addToCartText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  head: {
    flex: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue',
    
},
headd: {
    flex: 10,
    fontSize: 22,
    fontWeight: 'bold',
    color: 'red',
    
},
});

export default ProductDetail;