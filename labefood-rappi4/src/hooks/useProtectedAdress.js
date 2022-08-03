import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../constants/Url/url";
import goToPage from "../routes/coordinator";
import axios from "axios";

const useProtectedAdress = () => {
  const navigate = useNavigate();

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
          if (res.data.user.hasAddress === false) {
            goToPage(navigate, "address");
          }
        })
        .catch((err) => {});
    };
    getProfile();
  }, []);
};

export default useProtectedAdress;
