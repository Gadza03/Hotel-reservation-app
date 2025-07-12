import api from "../../constants/api";

export const getAllHotels = async () => {
  const response = await api.get("/hotels");
  return response.data;
};
