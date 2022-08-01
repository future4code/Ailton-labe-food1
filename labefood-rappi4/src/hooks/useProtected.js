import { useNavigate } from "react-router-dom";
import { useLayoutEffect } from "react";
import goToPage from "../routes/coordinator";

const useProtectedPage = () =>{

    const Navigate = useNavigate()
    useLayoutEffect(()=>{
    const token = localStorage.getItem('login')
    if(!token){
        goToPage(Navigate, 'login')
    }

    },[Navigate])


}

export default useProtectedPage