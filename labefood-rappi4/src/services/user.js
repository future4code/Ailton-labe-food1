
import axios from "axios";
import { BASE_URL } from "./../constants/Url/url";
import goToPage from "../routes/coordinator";
import { alertSweet } from "./alertSweet/alertSweet";

export const login = (body, clear, Navigate) => {
  axios
    .post(`${BASE_URL}/login/`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      clear();
      goToPage(Navigate, "");
    })
    .catch((err) => {
      alertSweet("error", "Falhou!", "Usuário ou senha inválido.");
    });
};

export const address = (body, clear, Navigate) => {
  axios
    .put(`${BASE_URL}/address/`, body, {
      headers: {
        auth: localStorage.getItem("token"),
      },
    })
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      alertSweet("success", "Deu Certo!", "Conta cadastrada com sucesso!");
      clear();
      goToPage(Navigate, "");
    })
    .catch((err) => {
      alertSweet("error", "Falhou!", "Tente novamente.");
    });
};

export const signup = (body, clear, Navigate, verifyPass) => {
  if (body.password === verifyPass) {
    axios
      .post(`${BASE_URL}/signup/`, body)
      .then((res) => {
        clear();
        localStorage.setItem("token", res.data.token);
        goToPage(Navigate, "address");
      })
      .catch((err) => {
      });
  } else {
    return alertSweet("error", "Falhou!", "Senhas não coincidem");
  }
};
