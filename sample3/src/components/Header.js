import React from "react";
import styled from "styled-components";
import { useSubMenu } from "../hooks/useSubMenu";

export default function Header() {
    const { subMenuOpen, handleMouseEnter, handleMouseLeave } = useSubMenu();

    return (
        <>
            <Nav>
                <div className="wrap">
                    <div className="logo">
                        <p>Logo</p>
                    </div>
                    <ul className="main-menu">
                        <li
                            className="main-menu"
                            onMouseEnter={() => handleMouseEnter("menu1")}
                            onMouseLeave={() => handleMouseLeave("menu1")}
                        >
                            About
                            <ol
                                className={`sub-menu ${
                                    subMenuOpen.menu1 ? "on" : ""
                                }`}
                            >
                                <li>Company</li>
                                <li>History</li>
                                <li>SubMenu</li>
                            </ol>
                        </li>
                        <li
                            className="main-menu"
                            onMouseEnter={() => handleMouseEnter("menu2")}
                            onMouseLeave={() => handleMouseLeave("menu2")}
                        >
                            Menu
                            <ol
                                className={`sub-menu ${
                                    subMenuOpen.menu2 ? "on" : ""
                                }`}
                            >
                                <li>SubMenu</li>
                                <li>SubMenu</li>
                                <li>SubMenu</li>
                            </ol>
                        </li>
                        <li
                            className="main-menu"
                            onMouseEnter={() => handleMouseEnter("menu3")}
                            onMouseLeave={() => handleMouseLeave("menu3")}
                        >
                            Menu
                        </li>
                        <li
                            className="main-menu"
                            onMouseEnter={() => handleMouseEnter("menu4")}
                            onMouseLeave={() => handleMouseLeave("menu4")}
                        >
                            Menu
                        </li>
                    </ul>
                    <div className="userInfoBox">
                        <p>
                            <i class="fa-solid fa-user"></i>LogIn
                        </p>
                        <p>
                            <i class="fa-solid fa-cart-shopping"></i>Cart
                        </p>
                    </div>
                </div>
            </Nav>
        </>
    );
}

const Nav = styled.nav`
    height: 70px;
    position: fixed;
    width: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 2;
    > div {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        ul {
            height: 100%;
            display: flex;
            gap: 50px;
        }
        .main-menu {
            height: 100%;
            line-height: 80px;
            cursor: pointer;
            color: white;
            font-weight: bold;
        }
        .sub-menu {
            transition: 0.5s all;
            max-height: 0px;
            overflow: hidden;
            position: absolute;
            display: flex;
            flex-direction: column;
            gap: 20px;
        }
        .sub-menu.on {
            max-height: 200px;
        }
    }
    .userInfoBox {
        display: flex;
        gap: 20px;
        color: white;
        font-weight: bold;
        i {
            padding-right: 5px;
        }
    }
`;
