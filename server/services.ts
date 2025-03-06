import axios from "axios";
import { Mission, UserDetail } from "~/lib/interfaces";

export const retrieveMissions = async (
  username: string
): Promise<Mission[]> => {
  const response = await fetch(`/api/missions/${username}`);
  return response.json();
};

export const retrieveUserDetail = async (
  username: String
): Promise<UserDetail> => {
  const result = await axios.get(
    `/api/users/${username === "zhtun" ? "DKosolofski" : username}`
  );
  return result.data;
};
