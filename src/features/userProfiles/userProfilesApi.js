import axios from "axios";

export const getUserProfiles = async ({ limit, skip }) => {
  const response = await axios.get(
    `https://dummyjson.com/users?limit=${limit}&skip=${skip}`
  );
  return response.data;
};
