import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../constants/Url/url";

const useRestDetails = (id) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const getRestDetails = () => {
      setIsLoading(true)
      const token = localStorage.getItem("token");
      axios
        .get(`${BASE_URL}/restaurants/${id}`, {
          headers: {
            auth: token,
          },
        })
        .then((res) => {
          setData(res.data.restaurant)
          setIsLoading(false)
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false)
        });
    };
    getRestDetails();
  }, []);

  return data;
};

export default useRestDetails;
