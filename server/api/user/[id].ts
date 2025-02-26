import { USER_INFO } from "~/lib/mockdata";

export default defineEventHandler((event) => {
  // const query = getQuery(event)
  const id = event.context.params
    ? (parseInt(event.context.params.id) as number)
    : 0;
  if (id === 0) return { status: 404, body: { message: "Not Found" } };
  return { user: USER_INFO };
});
