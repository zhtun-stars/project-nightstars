import { Mission } from "~/lib/interfaces";

export const retrieveMissions = async (
  username: string
): Promise<Mission[]> => {
  const response = await fetch(`/api/missions/${username}`);
  return response.json();
};
