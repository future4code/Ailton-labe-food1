import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../constants/Url/url";

const useGetOrdersHistory = () => {

  const [OrdersHistory, setOrdersHistory] = useState({});
  useEffect(() => {
    const getHistory = () => {
      const token = localStorage.getItem("token");
      axios
        .get(`${BASE_URL}/orders/history`, {
          headers: {
            auth: token,
          },
        })
        .then((res) => { 
            setOrdersHistory(res.data);
        })
        .catch((err) => {});
    };
    getHistory();
  }, []);

  return OrdersHistory
};

export default useGetOrdersHistory;
