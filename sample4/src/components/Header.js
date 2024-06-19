import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

import AOS from "aos";
import "aos/dist/aos.css";

import logo from "../asset/img/header/logo.png";

export default function Header(props) {
    const [show, setShow] = useState(false);

    const xyHandler = (e, linkTarget) => {
        props.xyHandler(e, linkTarget);
    };

    return (
        <Nav
            className={show ? "show" : "hide"}
            onClick={() => {
                setShow(!show);
            }}
        >
            <div className="menuIcon">
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>
            <ul>
                <li
                    onClick={(e) => {
                        xyHandler(e, "/");
                    }}
                >
                    LUMIC
                </li>
                <li
                    onClick={(e) => {
                        xyHandler(e, "about");
                    }}
                >
                    About
                </li>
                <li
                    onClick={(e) => {
                        xyHandler(e, "portfolio");
                    }}
                >
                    Portfolio
                </li>
                <li
                    onClick={(e) => {
                        xyHandler(e, "contact");
                    }}
                >
                    Contact
                </li>
            </ul>
        </Nav>
    );
}

const Nav = styled.nav`
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100vw;
    height: 5%;
    transform: translateX(-50%);
    left: 50%;
    z-index: 10;
    background: #101010;
    overflow: hidden;
    transition: 1s all;
    animation: FDown 1s forwards;
    opacity: 0;

    @keyframes FDown {
        from {
            top: -10%;
        }
        to {
            opacity: 1;
            top: 0%;
        }
    }
    .menuIcon {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 5px;
        padding-top: 10px;
        div {
            width: 35px;
            height: 4px;
            background-color: black;
            transition: 0.5s;
            filter: invert(1);
        }
    }
    ul {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-end;
        gap: 20px;
        margin-top: 20px;
        margin-bottom: 100px;
        margin-right: 2%;
        li {
            cursor: pointer;
            font-size: 86px;
            padding: 0 20px;
            color: #999999;
            opacity: 0;
            transition: 0.5s;
        }
    }

    &.show {
        height: 100%;
        width: 100%;
        background: rgba(0, 0, 0, 1);
        .menuIcon {
            .bar1 {
                transform: rotate(-45deg) translate(-6px, 6px);
                transform-origin: center;
            }
            .bar2 {
                opacity: 0;
            }
            .bar3 {
                transform: rotate(45deg) translate(-6px, -6px);
                transform-origin: center;
            }
        }
        ul {
            li {
                animation: 0.8s show 0.8s forwards;
                @keyframes show {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }
            }
        }
    }

    ul li:hover {
        color: white;
    }
    @media screen and (max-width: 600px) {
        left: 50%;
    }
`;
