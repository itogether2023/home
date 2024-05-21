import React, { useEffect, useState } from "react";
import styled from "styled-components";

import logo from "../asset/img/header/logo.png";

export default function Header(props) {
    const xyHandler = (e, linkTarget) => {
        props.xyHandler(e, linkTarget);
    };
    return (
        <Nav>
            <div className="menuIcon">
                <i class="fas fa-ellipsis-v"></i>
            </div>
            <ul>
                <li
                    onClick={(e) => {
                        xyHandler(e, "About");
                    }}
                >
                    About
                </li>
                <li
                    onClick={(e) => {
                        xyHandler(e, "Portfolio");
                    }}
                >
                    Portfolio
                </li>
                <li
                    onClick={(e) => {
                        xyHandler(e, "About");
                    }}
                >
                    menu
                </li>
                <li
                    onClick={(e) => {
                        xyHandler(e, "Contact");
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
    width: 5%;
    height: 10%;
    right: 0%;
    z-index: 2;
    top: 10%;
    transform: translate(-50%, -50%);
    border-radius: 25%; /* background: #101010; */
    background: #262626;
    transition: 1s all;

    .menuIcon {
        text-align: center;
        margin-top: 30%;
        i {
            color: white;
            font-size: 36px;
            transition: 1s all;
            transform: rotate(90deg);
        }
    }
    ul {
        margin-bottom: 20%;
        li {
            cursor: default;
            display: block;
            font-size: 28px;
            padding: 0 20px;
            color: #999999;
            /* transform: translateX(100%); */
            transition: 1s all;
            margin-bottom: 50px;
            opacity: 0;
        }
    }

    &:hover {
        width: 15%;
        .menuIcon {
            i {
                transform: rotate(90deg);
                opacity: 0;
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
