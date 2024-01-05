import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const CategoryItem = ({ image, title }) => {
  return (
    <TouchableOpacity style={styles.categoryItem}>
      <Image source={image} style={styles.categoryImage} />
      <Text style={styles.categoryTitle}>{title}</Text>
    </TouchableOpacity>
  );
};

const Categories = () => {
  const categories = [
    
    { id: 5, title: 'Hunter', image: require('../../assets/images/hunter1.png') },
    { id: 6, title: 'Giày thể thao', image: require('../../assets/images/thethao1.png') },
    { id: 7, title: 'Sandal', image: require('../../assets/images/sandal1.png') },


    // Add more categories as needed
  ];

  return (
    <>
    <View style={styles.catetitle}>
    <Text style={{ fontSize: 30, color: "red", fontWeight: "650" }}>Danh mục sản phẩm</Text>
    <Text style={{ fontSize: 14}}>Xem thêm</Text>
</View>
    <View style={styles.container}>
      {categories.map((category) => (
        <CategoryItem
          key={category.id}
          title={category.title}
          image={category.image}
        />
      ))}
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  categoryItem: {
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  categoryImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  categoryTitle: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
  catetitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
});

export default Categories;