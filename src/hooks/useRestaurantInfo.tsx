import { useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState({
    data: null,
    loading: false,
    error: null,
  });

  const getRestaurant = async (id: string) => {
    setResults({ data: null, loading: true, error: null });

    try {
      const response = await yelp.get(`/${id}`);
      console.log(response.data);
      setResults({
        error: null,
        data: response.data,
        loading: false,
      });
    } catch (error) {
      console.error(error);
      setResults({ data: null, loading: false, error: "Something went wrong" });
    }
  };
  return [results, getRestaurant] as const;
};
