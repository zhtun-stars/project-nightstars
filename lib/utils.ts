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
  a: String | number | Date | any,
  b: String | number | Date | any
): number {
  if (typeof a === "string" && typeof a === "string") {
    return a.localeCompare(b.toString());
  } else if (typeof a === "number" && typeof b === "number") {
    return a - b;
  } else if (a instanceof Date && b instanceof Date) {
    return a.getTime() - b.getTime();
  } else return 0;
}
