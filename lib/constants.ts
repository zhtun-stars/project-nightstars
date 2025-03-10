import type { IFilterSorterColumn } from "./interfaces";

export const TAB_MY_REVIEW = { key: 1, label: "My Review" };
export const TAB_REVIEWED = { key: 2, label: "Reviewed" };
export const TAB_REQUIRED_TO_REVIEW = { key: 3, label: "Required to Review" };

export enum SORT_ORDER {
  ASC = "ASC",
  DESC = "DESC",
  UNKNOWN = "UNKNOWN",
}

export const SORTING_FROM_FILTER: IFilterSorterColumn[] = [
  { key: "EventDate", label: "Mission Date" },
  { key: "InitialReviewDate", label: "Initial Review Date" },
  { key: "FinalReviewDate", label: "Final Review Date" },
];

export const PAGES = {
  clinical: "/clinical",
  clinicalSmall: "/clinical-small",
  login: "/",
  logout: "/logout",
};
export const SMALL_SCREENSIZE = 1440;
