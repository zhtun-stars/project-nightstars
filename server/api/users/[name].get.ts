import axios from "axios";
import https from "https";
const httpsAgent = new https.Agent({ rejectUnauthorized: false });

import { H3Event } from "h3";

export default defineEventHandler(async (event: H3Event): Promise<any> => {
  const name = getRouterParam(event, "name");
  const headers = getHeaders(event);
  try {
    const response = await $fetch<any>(
      `${process.env.BACKEND_API}userDetails?UserId=${name}`,
      {
        method: "GET",
        headers: headers.authorization
          ? { Authorization: headers.authorization }
          : undefined,
      }
    );
    return response;
  } catch (error) {
    console.error(error);
    return { error: error, status: 500 };
  }
});
