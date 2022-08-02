import React from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { BASE_URL } from "./../constants/Url/url";
import goToPage from "../routes/coordinator";

export const login = (body, clear, Navigate, setIsLoading) => {
  axios
    .post(`${BASE_URL}/login`, body)
    .then((res) => {
      console.log(res);
      localStorage.setItem("token", res.data.token);
      clear();
      setIsLoading(false);
      goToPage(Navigate, "");
    })
    .catch((err) => {
      setIsLoading(false);
      alert(err);
    });
};

export const address = (body, clear, Navigate, setIsLoading) => {
  axios
    .put(`${BASE_URL}/address`, body, {
      headers: {
        auth: localStorage.getItem("token"),
      },
    })
    .then((res) => {
      console.log(res);
      setIsLoading(false);
      clear();
      goToPage(Navigate, "address");
    })
    .catch((err) => {
      setIsLoading(false);
      alert(err);
    });
};

export const signup = (body, clear, Navigate, setIsLoading, verifyPass) => {
  if (body.password === verifyPass) {
    axios
      .post(`${BASE_URL}/signup`, body)
      .then((res) => {
        clear();
        setIsLoading(false);
        goToPage(Navigate, "login");
      })
      .catch((err) => {
        setIsLoading(false);
        alert(err);
      });
  } else {
    return alert("Senhas não coincidem");
  }
};
