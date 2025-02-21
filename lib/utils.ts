import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import moment from "moment";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

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