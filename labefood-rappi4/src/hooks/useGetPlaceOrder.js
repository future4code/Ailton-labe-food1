import {useEffect, useState} from "react"
import axios from 'axios'
import { BASE_URL } from "../constants/Url/url"

const UseGetPlaceOrder = () => {

    const [data, setData] = useState({});

  useEffect(() => {

    const getPlaceOrder = () => {
      const token = localStorage.getItem("token");
      axios
        .get(`${BASE_URL}/active-order`, {
          headers: {
            auth: token,
          },
        })
        .then((res) => {
            setData(res.data);
        })
        .catch((err) => {
            console.log(err)
        });
    };
    getPlaceOrder();
  }, []);

     return data

}

  export default UseGetPlaceOrder