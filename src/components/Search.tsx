/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import { useFetch } from "../Hooks/useFetch";
import { useDebounce } from "use-debounce";
import { Card } from "./Card";
import styles from "./Search.module.css";
import { SelectImg } from "../helper/SelectImg";

export const Search = () => {
  const [inputValue, setInputValue] = useState("");
  const [debouncedValue] = useDebounce(inputValue, 500);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value.toLowerCase().trim());
  };

  const showData = (debouncedValue: string) => {
    const url = `https://swapi.dev/api/${debouncedValue}`;
    const { isLoading, data } = useFetch(url);
    if (isLoading) {
      return <div className={styles.loading}>Loading...</div>;
    }

    if (data?.results) {
      return (
        <>
          {data.results.map((item, index) => (
            <Card
              key={index}
              imageName={
                "name" in item ? SelectImg(item.name) : SelectImg(item.title)
              }
              inputValue={debouncedValue}
              {...item}
            />
          ))}
        </>
      );
    }
  };

  return (
    <>
      <input
        type="text"
        value={inputValue}
        placeholder="Search"
        onChange={handleInputChange}
      />

      <div className={styles.results}>{showData(debouncedValue)}</div>
    </>
  );
};
