import React from "react";
import styled from "styled-components";
import { Icon } from "@chakra-ui/react";
import { BsCart3 } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import avatar from "../../assets/images/avatar.png";
import avatarcolor from "../../assets/images/avatarcolor.png";
import goToPage from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";

const Footer = styled.div`
  position: fixed;
  bottom: -1px;
  width: 100%;
  height: 49px;
  background-color: #fff;
  box-shadow: 0 -1px 3px 0 rgba(0, 0, 0, 0.2),
    0 -2px 1px -1px rgba(0, 0, 0, 0.12), 0 -1px 1px 0 rgba(0, 0, 0, 0.14);
  display: flex;

  img {
    width: 30px;
    height: 32px;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 33.3%;
  }
`;

function NavegationFeed(props) {
  const navigate = useNavigate();

  return (
    <Footer>
      <div onClick={() => goToPage(navigate, "")}>
        {props.page === "feed" ? (
          <Icon width="30px" height="32px" color="#eb806f" as={AiOutlineHome} />
        ) : (
          <Icon width="30px" height="32px" color="#b8b8b8" as={AiOutlineHome} />
        )}
      </div>
      <div onClick={() => goToPage(navigate, "cart")}>
        {props.page === "cart" ? (
          <Icon width="30px" height="32px" color="#eb806f" as={BsCart3} />
        ) : (
          <Icon width="30px" height="32px" color="#b8b8b8" as={BsCart3} />
        )}
      </div>
      <div onClick={() => goToPage(navigate, "profile")}>
        {props.page === "profile" ? (
          <img src={avatarcolor} alt="avatar" />
        ) : (
          <img src={avatar} alt="avatar" />
        )}
      </div>
    </Footer>
  );
}

export default NavegationFeed;
