import React from 'react'
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import SignUpPage from './../pages/SignupPage/SignupPage'
import LoginPage from './../pages/LoginPage/LoginPage'
import FeedPage from './../pages/FeedPage/FeedPage'
import ProfilePage from './../pages/ProfilePage/ProfilePage'
import EditInfoPage from './../pages/ProfilePage/EditInfoPage/EditInfoPage'
import EditEndPage from './../pages/ProfilePage/EditEndePage/EditEndePage';
import CartPage from './../pages/CartPage/CartPage'
import DetailRestPage from './../pages/DetailRestPage/DetailRestPage'
import ErrorPage from './../pages/ErrorPage/ErrorPage'

const Router = () =>{

return(
    <BrowserRouter>

        <Routes>
            
    <Route path='/login' element={<LoginPage/>}></Route>
    <Route path='/signup' element={<SignUpPage/>}></Route>
    <Route index element={<FeedPage/>}></Route>
    <Route path='profile' element={<ProfilePage/>}></Route>
    <Route path='/edit/inf' element={<EditInfoPage/>}></Route>
    <Route path='/edit/end' element={<EditEndPage/>}></Route>
    <Route path='/cart' element={<CartPage/>}></Route>
    <Route path='/res/:id' element={<DetailRestPage/>}></Route>
    <Route path='*' element={<ErrorPage/>}></Route>

        </Routes>
    </BrowserRouter>

)



}

export default Router 