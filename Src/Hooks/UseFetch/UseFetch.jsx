import axios from "axios";
import React, { useEffect, useState } from "react";

const UseFetch = (apiUrl) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const { data: productData } = await axios.get(apiUrl);
      setData(productData);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return { error, data, loading };
};
export default UseFetch;
