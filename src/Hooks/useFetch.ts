import { useState, useCallback, useEffect } from "react";
import axios from "axios";
import { allData } from "../Types/Data.types";

export const useFetch = (url: string) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<allData | null>(null);

  const getData = useCallback(() => {
    setIsLoading(true);
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [url]);

  useEffect(() => {
    getData();
  }, [getData]);

  return { isLoading, data };
};
