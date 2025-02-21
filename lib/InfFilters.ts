export type IFilter = {
  type: "string" | "dates" | "number";
  key: string; // key of the object to search in the data
  label: string; // label to display in the filter
  selection?:
    | { label: string; value: string }[]
    | { label: string; value: number }[];
  // selection to be select in the filter, date is not included because it will be range picker
  value: { startDate: Date; endDate: Date } | string | number; // value to search for
  defaultValue: { startDate: Date; endDate: Date } | string | number; // default value to search for
  filter: Function;
};

export const dateFilter = (filter: IFilter): boolean => {
  return true;
};
export const numberFilter = (filter: IFilter): boolean => {
  return true;
};
export const stringFilter = (filter: IFilter): boolean => {
  return true;
};
