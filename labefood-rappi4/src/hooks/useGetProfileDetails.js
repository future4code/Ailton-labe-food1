import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../constants/Url/url";

const useGetProfileDetails = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const getProfileDetails = () => {
      const token = localStorage.getItem("token");
      axios
        .get(`${BASE_URL}/profile/address`, {
          headers: {
            auth: token,
          },
        })
        .then((res) => {
          setData(res.data.address)
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getProfileDetails();
  }, []);

  return data;
};

export default useGetProfileDetails;
