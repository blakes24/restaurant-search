import { useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState({
    data: null,
    loading: false,
    error: null,
  });

  const searchRestaurants = async (term: string) => {
    setResults({ data: null, loading: true, error: null });

    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 15,
          term: term,
          location: "Bend",
        },
      });

      setResults({
        error: null,
        data: response.data.businesses,
        loading: false,
      });
    } catch (error) {
      console.error(error);
      setResults({ data: null, loading: false, error: "Something went wrong" });
    }
  };
  return [results, searchRestaurants] as const;
};
