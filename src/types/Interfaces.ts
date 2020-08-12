import { People, Planet } from "./types";

export interface PlanetResults {
  count: number;
  next: string | null;
  previous: string | null;
  results: Planet[];
}

export interface PeopleResult {
  count: number;
  next: string | null;
  previous: string | null;
  results: People[];
}

export const plus: string = "plus";
export const minus: string = "minus";
