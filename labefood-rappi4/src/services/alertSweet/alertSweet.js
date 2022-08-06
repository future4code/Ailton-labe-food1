import swal from "@sweetalert/with-react";
import "./style.css";
import { ContainerAlertSweet } from "./style"

export const alertSweet = (icon, title, body) => {
    swal({
      icon: icon,
      buttons: {
        confirm: {
          text: "Ok",
          className: "alert-sweet-button",
          closeModal: true,
        },
      },
      content: (
        <ContainerAlertSweet>
          <h1>{title}</h1>
          <p>{body}</p>
        </ContainerAlertSweet>
      ),
    });
  };