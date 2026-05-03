import http from "./http";

export const getWorks = async (composerId: number) => {
  const response = await http.get(`/composers/works?composerId=${composerId}`);
  return response.data.data;
};

export default getWorks;
