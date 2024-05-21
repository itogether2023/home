import React from "react";
import styled from "styled-components";

import logo from "../asset/img/header/logo.png";

export default function Header() {
    return (
        <Nav>
            <div>
                <img src={logo} alt="" />
            </div>
            <ul>
                <li>menu</li>
                <li>menu</li>
                <li>menu</li>
                <li>menu</li>
            </ul>
        </Nav>
    );
}

const Nav = styled.nav`
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 100px;
    height: 70px;
    width: 100%;
    background: rgba(255, 255, 255, 0);
    /* border-bottom: 1px solid lightgray; */
    z-index: 3;
    top: 0;
    img {
        height: 50px;
    }
    ul {
        li {
            cursor: default;
            font-size: 28px;
            padding: 0 20px;
        }
    }
`;
