import { Mission } from "~/lib/interfaces";



export const retrieveMissions = async (
  username: string
): Promise<Mission[]> => {
  const response = await fetch(`/api/missions/${username}`);
  return response.json();
};


export const retrieveUser = async (
  username: string
): Promise<any> => {
  const response = await fetch(`/api/users/${username}`);
  return response.json();
};
