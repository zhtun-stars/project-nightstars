import { USER_INFO } from "~/lib/mockdata";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  // const body = await readBody(event);
  // console.log("body", body);
  console.log("query", query);
  console.log(event.context.params);
  await setUserSession(event, { user: USER_INFO });

  //     ? (parseInt(event.context.params.id) as number)
  //     : 0;
  //   if (id === 0) return { status: 404, body: { message: "Not Found" } };
  return { status: 200, success: "success" };
});
