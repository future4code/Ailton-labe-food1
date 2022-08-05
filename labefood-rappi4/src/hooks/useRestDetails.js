import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../constants/Url/url";

const useRestDetails = (id) => {
  const [data, setData] = useState({});

  useEffect(() => {
    const getRestDetails = () => {
      const token = localStorage.getItem("token");
      axios
        .get(`${BASE_URL}/restaurants/${id}`, {
          headers: {
            auth: token,
          },
        })
        .then((res) => {
          setData(res.data.restaurant)
        })
        .catch((err) => {

        });
    };
    getRestDetails();
  }, []);

  return data;
};

export default useRestDetails;
