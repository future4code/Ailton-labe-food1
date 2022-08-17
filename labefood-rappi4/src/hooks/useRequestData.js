import { useEffect, useState } from "react";
import axios from "axios";

const useRequestData = (initialData, url) => {
  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const token = localStorage.getItem('token')
  
    
  useEffect(() => {
    setIsLoading(true)
    axios
      .get(url, {
        headers: {
          auth: token
        },
      })
      .then((response) => {
        setData(response.data.restaurants);
        setIsLoading(false)
        
      })
      .catch((err) => {
        setIsLoading(false)
      });
  },[])

  return [ data, isLoading ] 
};


export default useRequestData