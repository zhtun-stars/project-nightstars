import { convertData } from "~/lib/common-functions";
import { Mission } from "~/lib/interfaces";
import { CLINICAL_DATA } from "~/lib/mockdata";

export default defineEventHandler((event): Mission[] => {
  const name = getRouterParam(event, "username");
  const result = convertData(CLINICAL_DATA);
  return result;
});
