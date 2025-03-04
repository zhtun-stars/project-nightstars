export default defineEventHandler((event) => {
  const name = getRouterParam(event, "name");

  return {
    userId: '1',
    name
  };
});
