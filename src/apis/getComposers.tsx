import http from "./http";

export const getComposers = async () => {
  const response = await http.get("/composers");
  return response.data.data;
};

export default getComposers;
