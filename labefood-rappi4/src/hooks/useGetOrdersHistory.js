import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../constants/Url/url";

const useGetOrdersHistory = () => {

  const [isLoading, setIsLoading] = useState(false)
  const [OrdersHistory, setOrdersHistory] = useState({});

  useEffect(() => {
    const getHistory = () => {
      setIsLoading(true)
      const token = localStorage.getItem("token");
      axios
        .get(`${BASE_URL}/orders/history`, {
          headers: {
            auth: token,
          },
        })
        .then((res) => { 
            setOrdersHistory(res.data);
            setIsLoading(false)
        })
        .catch((err) => {
          setIsLoading(false)
        });
    };
    getHistory();
  }, []);

  return [ OrdersHistory, isLoading ]
};

export default useGetOrdersHistory;
