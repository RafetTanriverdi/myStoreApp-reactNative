import { View, FlatList, } from "react-native";
import React from "react";
import ProductCard from "../../Components/ProductCard/ProductCard";
import UseFetch from "../../Hooks/UseFetch/UseFetch";
import LoadingComponent from "../../Components/Loading/LoadingComponent";
import ErrorComponent from "../../Components/Error/ErrorComponent";

const apiUrl = process.env.EXPO_PUBLIC_API_URL;
const Product = ({ navigation }) => {
  const { data, loading, error } = UseFetch(apiUrl);

  const handleSelect = (item) => {
    navigation.navigate("Details",{id:item.id});
  };

  const renderProduct = ({ item }) => (
    <ProductCard product={item} onSelect={()=>handleSelect(item)} />
  );
  if (loading) return <LoadingComponent />;
  if (error) return <ErrorComponent content={error} />;

  return (
    <View>
      <FlatList data={data} renderItem={renderProduct} />
    </View>
  );
};

export default Product;
