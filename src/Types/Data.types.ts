import { Starship, Films } from "./Result.type";

export type allData = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Starship[] | Films[];
};
