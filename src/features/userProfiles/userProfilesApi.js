import axios from "axios";

export const getUserProfiles = async () => {
  const response = await axios.get(`https://randomuser.me/api/?results=100`);
  return response.data;
};
