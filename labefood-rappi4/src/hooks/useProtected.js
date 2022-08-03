import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import goToPage from "../routes/coordinator";

const useProtectedPage = () => {
  const Navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      goToPage(Navigate, "login");
    }
  }, [Navigate]);
};

export default useProtectedPage;
