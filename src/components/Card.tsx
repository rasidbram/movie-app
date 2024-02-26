import styles from "./Card.module.css";
import { CardProps } from "../Types/Card.type";

export const Card = ({
  imageName,
  name,
  title,
  model,
  manufacturer,
  cost_in_credits,
  length,
  crew,
  passengers,
  cargo_capacity,
  episode_id,
  director,
  producer,
  release_date,
  opening_crawl,
  inputValue,
}: CardProps) => {
  const starship = {
    Model: model,
    Manufacturer: manufacturer,
    "Cost in credits": cost_in_credits,
    length,
    crew,
    passengers,
    "Cargo capacity": cargo_capacity,
  };

  const films = {
    "Episode Number": episode_id,
    Director: director,
    Producer: producer,
    "Release Date": release_date,
    "Opening Crawl": opening_crawl,
  };

  const CheckWord = (word: string) => {
    if (word === "starships") {
      return starship;
    }
    if (word === "films") {
      return films;
    } else {
      return "";
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.imageOfItem}>
        <img
          src={imageName}
          alt={imageName}
          style={{ height: title ? "20rem" : "10rem" }}
        />
        <p>{name ? name : title}</p>
      </div>
      <div className={styles.info}>
        {Object.entries(CheckWord(inputValue)).map(([key, value]) => (
          <div key={key}>
            <p>{key}</p>
            <p>{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
