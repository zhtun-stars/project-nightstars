import type { SORT_ORDER } from "./constants";

export interface IFilterSorterColumn {
  key: string;
  label: string;
}
export interface ISort {
  key: string;
  order: SORT_ORDER;
}

export interface IFilter {
  mission: "";
}

export interface ICrew {
  name: string;
  reviewDate?: Date;
}

export interface IClinicalData {
  mission: string;
  date: Date;
  initialReviewedDate?: Date;
  finalReviewedDate?: Date;
  physician: string;
  baseName: string;
  crews: ICrew[];
}

export interface IChat {
  id: string;
  message: string;
  date: Date;
  user: string;
}
