import moment from "moment";
import { dateFilter, stringFilter, type IFilter } from "./InfFilters";
import type { IClinicalData, ISort, Mission } from "./interfaces";
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
  } else if (b === undefined || b === null) {
    return 1;
  } else return 0;
}
export const shortTheName = (name: String): String => {
  return name ? (name.length > 12 ? name.substring(0, 11) + "..." : name) : "";
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
  data: Mission[],
  sortValue: ISort
): Mission[] => {
  let result = data.sort((a, b) => {
    if (sortValue.key === "" || sortValue.order === SORT_ORDER.UNKNOWN)
      return 0;
    else
      return typeSort(
        a[sortValue.key as keyof Mission],
        b[sortValue.key as keyof Mission]
      );
  });
  if (sortValue.order === SORT_ORDER.DESC) {
    return result.reverse();
  }
  if (
    sortValue.key === "InitialReviewDate" ||
    sortValue.key === "FinalReviewDate"
  ) {
    return result;
  } else {
    return [
      ...result.filter(
        (item) =>
          item.FinalReviewDate === undefined &&
          item.InitialReviewDate === undefined
      ),
      ...result.filter(
        (item) =>
          item.FinalReviewDate === undefined &&
          item.InitialReviewDate !== undefined
      ),
      ...result.filter(
        (item) =>
          item.FinalReviewDate !== undefined &&
          item.InitialReviewDate !== undefined
      ),
    ];
  }
};

export const textFilter = (missions: Mission[], filterText: string) =>
  missions.filter((item) => {
    if (filterText === "") return true;
    return item.EventNumber.toLowerCase().includes(filterText.toLowerCase());
  });

export const getClinicalPage = (window: Window): string =>
  window.innerWidth <= SMALL_SCREENSIZE ? PAGES.clinicalSmall : PAGES.clinical;
export const getFullname = (firstName: string, lastName: string) =>
  `${lastName} ${firstName}`;

export const convertData = (data: IClinicalData[]): Mission[] =>
  data.map((item: IClinicalData, index: number) => ({
    PCRID: index,
    EventID: index,
    EventUnitID: index,
    InitialReviewDate: item.initialReviewedDate,
    FinalReviewDate: item.finalReviewedDate,
    FinalReviewBy: item.finalReviewer,
    InitialReviewBy: item.initialReviewer,
    CrewID: index,
    LastName: "Doe",
    FirstName: "John",
    PositionID: index,
    Position: "EMT",
    LoginID: "johndoe",
    EventDate: item.date,
    HasRead: false,
    InitialReviewerID: item.initialReviewedDate ? 1 : 0,
    FinalReviewerID: item.finalReviewedDate ? 1 : 0,
    BaseID: 1,
    MissionBase: item.baseName,
    FuLLName: item.physician,
    EventNumber: item.mission,
  }));
