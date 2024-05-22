import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import styled from "styled-components";

import AOS from "aos";
import "aos/dist/aos.css";

import logo from "../asset/img/header/logo.png";

export default function Header(props) {
    const location = useLocation();
    const [page, setPage] = useState("");

    useEffect(() => {
        setPage(location.pathname.substring(1).toUpperCase());
    }, []);

    const xyHandler = (e, linkTarget) => {
        props.xyHandler(e, linkTarget);
    };

    return (
        <Nav>
            <div className="menuIcon">
                <span>
                    {page === "" ? <i class="fas fa-ellipsis-v"></i> : page}
                </span>
            </div>
            <ul>
                <li
                    onClick={(e) => {
                        xyHandler(e, "/");
                    }}
                >
                    main
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
                        xyHandler(e, "about");
                    }}
                >
                    menu
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
    border: 2px dashed white;
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 10%;
    height: 5%;
    transform: translateX(-50%);
    left: 50%;
    z-index: 2;
    border-radius: 20px;
    background: rgba(0, 0, 0, 0.8);
    overflow: hidden;
    transition: 1s all;
    animation: FDown 1s forwards;
    top: 3%;
    opacity: 0;
    @keyframes FDown {
        from {
            top: -10%;
        }
        to {
            opacity: 1;
            top: 3%;
        }
    }
    .menuIcon {
        text-align: center;
        span {
            color: white;
            font-size: 24px;
            transition: 1s all;
            line-height: 1.45;
            cursor: pointer;
        }
        span i {
            transform: rotate(90deg);
        }
    }
    ul {
        margin-bottom: 20%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
        margin-top: 10px;
        li {
            cursor: default;
            font-size: 28px;
            padding: 0 20px;
            color: #999999;
            /* transform: translateX(100%); */
            transition: 1s all;
            opacity: 0;
        }
    }

    &:hover {
        height: 40%;
        width: 25%;
        background: rgba(0, 0, 0, 1);
        .menuIcon {
            span {
                font-size: 32px;
            }
            i {
                opacity: 0;
                transform: rotate(90deg);
            }
        }
        ul {
            li {
                opacity: 1;
            }
        }
    }

    ul li:hover {
        color: white;
    }
`;
