import moment from "moment";
import { dateFilter, stringFilter, type IFilter } from "./InfFilters";
import type { IClinicalData, ISort } from "./interfaces";
import { PAGES, SMALL_SCREENSIZE, SORT_ORDER } from "./constants";

export function formatDate(date: Date): string {
  return moment(date).format("MMM DD, YYYY");
}

export function typeSort(
  a: String | string | number | Date | undefined | any,
  b: String | string | number | Date | undefined | any
): number {
  if (typeof a === "string" && typeof b === "string") {
    return a.localeCompare(b.toString());
  } else if (typeof a === "number" && typeof b === "number") {
    return a - b;
  } else if (a instanceof Date && b instanceof Date) {
    return a.getTime() - b.getTime();
  } else if (a === undefined || a === null) {
    return -1;
  } else return 0;
}
export const shortTheName = (name: String): String => {
  return name.length > 12 ? name.substring(0, 11) + "..." : name;
};

const dateRanges = {
  startDate: new Date(), //moment().subtract(3, "M").toDate(),
  endDate: new Date(),
};

export const clinicalFilters: IFilter[] = [
  {
    type: "dates",
    key: "missionDate",
    label: "Mission Date",
    value: dateRanges, // default value for the date is not needed, change in the DateRangePicker.vue
    filter: dateFilter,
  },
  {
    type: "string",
    key: "base",
    label: "Base",
    value: "all",
    selection: [
      { label: "All", value: "all" },
      { label: "Calgary", value: "calgary" },
      { label: "Edmonton", value: "edmonton" },
      { label: "Saskatchewan", value: "saskatchewan" },
    ],
    filter: stringFilter,
  },
  {
    type: "string",
    key: "status",
    label: "Status",
    value: "all",
    selection: [
      { label: "All", value: "all" },
      { label: "Inital Reviewed", value: "Inital Reviewed" },
      { label: "Final Reviewed", value: "Final Reviewed" },
    ],
    filter: () => true,
  },
];

export const sortAndFilterClinicalFilter = (
  data: IClinicalData[],
  filterText: string,
  sortValue: ISort
): IClinicalData[] => {
  let result = data
    .filter((item) => {
      if (filterText === "") return true;
      return item.mission.toLowerCase().includes(filterText.toLowerCase());
    })
    .sort((a, b) => {
      if (sortValue.key === "" || sortValue.order === SORT_ORDER.UNKNOWN)
        return 0;
      else
        return typeSort(
          a[sortValue.key as keyof IClinicalData],
          b[sortValue.key as keyof IClinicalData]
        );
    });
  if (sortValue.order === SORT_ORDER.DESC) {
    return result.reverse();
  }
  return result;
};

export const getClinicalPage = (window: Window): string =>
  window.innerWidth <= SMALL_SCREENSIZE ? PAGES.clinicalSmall : PAGES.clinical;
