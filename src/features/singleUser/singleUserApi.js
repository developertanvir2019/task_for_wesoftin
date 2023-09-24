import axios from "axios";

export const getSingleUser = async (id) => {
  const response = await axios.get(`https://dummyjson.com/users/${id}`);
  return response.data;
};
