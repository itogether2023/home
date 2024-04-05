import React from "react";
import styled from "styled-components";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Header() {
    return (
        <>
            <Head>
                <div className="wrap">
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
                        <li>
                            <Link to={`/pages/Contact`}>Login</Link>
                        </li>
                    </ul>
                </div>
            </Head>
        </>
    );
}

const Head = styled.div`
    .wrap {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 100%;
    }
    height: 60px;
    background-color: #000;
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
`;
