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
  reviewDate?: Date;
}

export interface IClinicalData {
  mission: String;
  date: Date;
  initialReviewedDate?: Date;
  finalReviewedDate?: Date;
  physician: String;
  baseName: String;
  crews: ICrew[];
}

export interface IChat {
  id: String;
  message: String;
  date: Date;
  user: String;
}
