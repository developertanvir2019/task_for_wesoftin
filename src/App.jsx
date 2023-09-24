/* eslint-disable react/jsx-no-target-blank */
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { useEffect } from "react";
import { fetchUserProfiles } from "./features/userProfiles/userProfilesSlice";

function App() {
  const dispatch = useDispatch();
  const { userProfiles, isLoading, isError, error } = useSelector(
    (state) => state.userProfiles
  );
  console.log(userProfiles, isLoading, isError, error);
  useEffect(() => {
    dispatch(fetchUserProfiles());
  }, [dispatch]);
  return (
    <>
      <h1>ami</h1>
    </>
  );
}

export default App;
