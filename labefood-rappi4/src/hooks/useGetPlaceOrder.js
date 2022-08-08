import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/Url/url";

const UseGetPlaceOrder = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const getPlaceOrder = () => {
      setIsLoading(true)
      const token = localStorage.getItem("token");
      axios
        .get(`${BASE_URL}/active-order/`, {
          headers: {
            auth: token,
          },
        })
        .then((res) => {
          setData(res.data);
          setIsLoading(false)
        })
        .catch((err) => {
          setIsLoading(false)
        });
    };
    getPlaceOrder();
  }, []);

  return [data, isLoading]
};

export default UseGetPlaceOrder;
