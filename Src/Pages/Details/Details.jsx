import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./Details.style";
import UseFetch from "../../Hooks/UseFetch/UseFetch";
import LoadingComponent from "../../Components/Loading/LoadingComponent";
import ErrorComponent from "../../Components/Error/ErrorComponent";

const apiUrl = process.env.EXPO_PUBLIC_API_URL;

const Details = ({ route }) => {
  const { id } = route.params;

  const { data, loading, error } = UseFetch(`${apiUrl}/${id}/2`);
  const product = data;

  if (loading) return <LoadingComponent />;
  if (error) return <ErrorComponent content={error} />;

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: product.image }} />
      <View style={styles.body_conatiner}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.desc}>{product.description}</Text>
        <Text style={styles.price}>{product.price} TL</Text>
      </View>
    </View>
  );
};

export default Details;
