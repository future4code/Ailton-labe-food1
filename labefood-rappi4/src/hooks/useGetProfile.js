import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../constants/Url/url";

const useGetProfile = () => {

  const [profile, setProfile] = useState({});
  useEffect(() => {
    const getProfile = () => {
      const token = localStorage.getItem("token");
      axios
        .get(`${BASE_URL}/profile`, {
          headers: {
            auth: token,
          },
        })
        .then((res) => {
          setProfile(res.data.user);
        })
        .catch((err) => {});
    };
    getProfile();
  }, []);

  return profile
};

export default useGetProfile;
