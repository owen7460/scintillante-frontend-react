import http from "./http";

export const getWorks = async (
  composerId: number,
  page: number = 1,
  pageSize: number = 2,
) => {
  const response = await http.get(
    `/composers/works?composerId=${composerId}&page=${page}&pageSize=${pageSize}`,
  );
  return response.data.data;
};

export default getWorks;
