import React, { useState } from "react";
import styled from "styled-components";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "store/loginSlice";

export default function Header() {
    const [show, setShow] = useState(false);

    let store = useSelector((state) => {
        return state;
    });

    let dispatch = useDispatch();

    let handleMenuNav = () => {
        setShow(!show);
    };

    return (
        <>
            <Head>
                <div className="wrap">
                    <div className="pcContainer">
                        <div className="logo">
                            <Link to={`/`}>로고</Link>
                        </div>
                        <ul className="menuBox">
                            <li>
                                <Link to={`/pages/About`}>AboutUs</Link>
                                <ol>
                                    <li>
                                        <Link to={`/pages/About`}>소개</Link>
                                    </li>
                                    <li>
                                        <Link to={`/pages/History`}>연혁</Link>
                                    </li>
                                </ol>
                            </li>

                            <li>
                                <Link to={`/pages/Estimate`}>Estimate</Link>
                            </li>
                            <li>
                                <Link to={`/pages/Portfolio`}>Portfolio</Link>
                            </li>
                            <li>
                                <Link to={`/pages/News`}>News</Link>
                            </li>
                            <li>
                                <Link to={`/pages/Notice`}>Notice</Link>
                            </li>
                            <li>
                                <Link to={`/pages/Contact`}>Contact Us</Link>
                            </li>
                            {!store.login.loginState && (
                                <li>
                                    <p
                                        onClick={() => {
                                            dispatch(toggleModal());
                                        }}
                                    >
                                        Login
                                    </p>
                                </li>
                            )}
                        </ul>
                    </div>
                    <div className="moContainer">
                        <p>로고</p>
                        <p
                            onClick={() => {
                                handleMenuNav();
                            }}
                        >
                            메뉴바
                        </p>
                    </div>
                    <div className={`menuNav ${show ? "on" : "off"}`}>
                        <ul>
                            <h3>로고</h3>

                            <li>
                                <Link to={`/pages/About`}>AboutUs</Link>
                                <ol>
                                    <li>
                                        <Link to={`/pages/About`}>소개</Link>
                                    </li>
                                    <li>
                                        <Link to={`/pages/History`}>연혁</Link>
                                    </li>
                                </ol>
                            </li>

                            <li>
                                <Link to={`/pages/Estimate`}>Estimate</Link>
                            </li>
                            <li>
                                <Link to={`/pages/Portfolio`}>Portfolio</Link>
                            </li>
                            <li>
                                <Link to={`/pages/News`}>News</Link>
                            </li>
                            <li>
                                <Link to={`/pages/Notice`}>Notice</Link>
                            </li>
                            <li>
                                <Link to={`/pages/Contact`}>Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </Head>
        </>
    );
}

const Head = styled.div`
    height: 60px;
    background-color: #000;
    .wrap {
        height: 100%;
    }
    .moContainer {
        display: none;
    }
    .menuNav {
        display: none;
    }
    .pcContainer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 100%;
    }
    .logo {
        a {
            color: #fff;
        }
    }
    .menuBox {
        display: flex;
        align-items: center;
        height: 100%;
        gap: 10px;
        a {
            color: #fff;
            font-size: 18px;
        }
        p {
            color: #fff;
            font-size: 18px;
            cursor: default;
        }
        > li {
            position: relative;
            display: flex;
            align-items: center;
            height: 100%;
        }
        > li > ol {
            display: none;
        }
        > li:hover > ol {
            position: absolute;
            display: flex;
            flex-direction: column;
            z-index: 999;
            width: 100%;
            background: #000;
            top: 100%;
            li {
                font-weight: bold;
                width: 100%;
                padding: 10px 0px;
            }
        }
    }
    @media screen and (max-width: 1000px) {
        position: sticky;
        .pcContainer {
            display: none;
        }
        .moContainer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0px 50px;
            height: 100%;

            p {
                font-size: 16px;
                color: white;
            }
        }
        .menuNav.off {
            max-width: 0px;
            overflow: hidden;
            transition: 0.5 all;
        }
        .menuNav.on {
            display: block;
            transition: 0.5 all;
            overflow: hidden;
            position: fixed;
            background: black;
            width: 30%;
            height: 100vh;
            top: 0;
            left: 0;
            z-index: 99;
            ul {
                padding-top: 50px;
                display: flex;
                flex-direction: column;
                li {
                    width: 100%;
                    padding-left: 20px;
                    a,
                    p {
                        color: #fff;
                        font-size: 24px;
                        line-height: 1.5;
                    }
                    p {
                        padding-bottom: 50px;
                    }
                }
                li:hover {
                    background: lightgray;
                }
            }
        }
    }
    @media screen and (max-width: 800px) {
        .moContainer {
            padding: 0px 20px;
        }
        .menuNav.on {
            ul {
                li {
                    padding: 0px;
                }
            }
        }
    }
    @media screen and (max-width: 600px) {
        .menuNav.on {
            width: 40%;
            ul {
                li {
                    a,
                    p {
                        font-size: 24px;
                    }
                }
            }
        }
    }
    @media screen and (max-width: 400px) {
        .menuNav.on {
            width: 40%;
            ul {
                li {
                    a,
                    p {
                        font-size: 16px;
                    }
                }
            }
        }
    }
`;
