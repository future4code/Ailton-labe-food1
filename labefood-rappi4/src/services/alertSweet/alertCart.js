import swal from "@sweetalert/with-react";
import "./style.css";
import { ContainerAlertSweet } from "./style";
import goTopage from "../../routes/coordinator";
import React from "react";

export const alertCart = (restaurant, navigate) => {
  swal({
    icon: "error",
    buttons: {
      reset: {
        text: "Resetar carrinho",
        value: "reset",
        className: "alert-sweet-button",
      },
      goToPage: {
        text: `Ir para ${restaurant.name}`,
        className: "alert-sweet-button",
        value: "gotopage",
      },
    },
    content: (
      <ContainerAlertSweet>
        <h1>Falhou!</h1>
        <p>Você já possui produtos na loja: <br/><strong>{restaurant.name}</strong></p>
      </ContainerAlertSweet>
    ),
  }).then((value) => {
    switch (value) {
      case "reset":
        localStorage.removeItem("cartShop");
        localStorage.removeItem("restaurant");
        document.location.reload(true);
        break;

      case "gotopage":
        goTopage(navigate, `res/${restaurant.id}`);
        document.location.reload(true);
        break;
      default:
        break;
    }
  });
};
