import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import goToPage from "../routes/coordinator";

const useUnProtectedPage = () =>{

    const Navigate = useNavigate()
    useEffect(()=>{
    const token = localStorage.getItem('login')
    if(token){
        goToPage(Navigate, '')
    }

    },[Navigate])


}

export default useUnProtectedPage