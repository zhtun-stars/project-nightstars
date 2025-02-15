import type { SORT_ORDER } from "./constants";

export interface IFilterSorterColumn {
  key: String;
  label: String;
}
export interface ISort {
  key: String;
  order: SORT_ORDER;
}

export interface IFilter {
  mission: "";
}

export interface ICrew {
  name: String;
  date: Date;
}

export interface IClinicalData {
  mission: String;
  date: Date;
  physicianDate: Date;
  peerReview: Date;
  physician: String;
  baseName: String;
  physicianReview: boolean;
  crews: ICrew[];
}
