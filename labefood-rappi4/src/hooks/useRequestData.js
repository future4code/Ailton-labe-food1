import { useEffect, useState } from "react";
import axios from "axios";

const useRequestData = (initialData, url) => {
  const [data, setData] = useState(initialData);
  const token = localStorage.getItem('token')
  
    
  useEffect(() => {
    axios
      .get(url, {
        headers: {
          auth: token
        },
      })
      .then((response) => {
        setData(response.data);
        
      })
      .catch((err) => {

      });
  });

  return data;
};


export default useRequestData