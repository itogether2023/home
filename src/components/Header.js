import React, { useState } from "react";
import styled from "styled-components";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <Head>
                <div className={menuOpen ? "overray on" : "overray off"}></div>
                <div className="wrap">
                    <nav className="pc">
                        <div className="logo">로고 이미지</div>
                        <ul className="menuBox">
                            <li>회사소개</li>
                            <li>사업영역</li>
                            <li>복리후생</li>
                            <li>고객사</li>
                            <li>찾아오시는 길</li>
                            <li>커뮤니티</li>
                        </ul>
                    </nav>

                    <nav className="mo">
                        <div className="head-box">
                            <div>로고 이미지</div>
                            <i
                                class="fa-solid fa-bars"
                                onClick={() => {
                                    setMenuOpen(!menuOpen);
                                }}
                            ></i>
                        </div>

                        <ul className={menuOpen ? "menu on" : "menu off"}>
                            <li>회사소개</li>
                            <li>사업영역</li>
                            <li>복리후색</li>
                            <li>고객사</li>
                            <li>찾아오시는 길</li>
                            <li>커뮤니티</li>
                        </ul>
                    </nav>
                </div>
            </Head>
        </>
    );
}

const Head = styled.div`
    margin: 20px 0px;

    nav.pc {
        display: flex;
        justify-content: space-around;
        ul {
            li {
                padding: 0px 10px;
                font-size: 16px;
                font-weight: bold;
                cursor: pointer;
            }
        }
    }
    nav.mo {
        display: none;
    }

    @media screen and (max-width: 1200px) {
        nav.pc {
            display: none;
        }
        nav.mo {
            display: block;
            .head-box {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0 20px;
                i {
                    font-size: 34px;
                }
            }
            .menu {
                display: flex;
                flex-direction: column;
                position: fixed;
                justify-content: center;
                align-items: center;
                left: -100%;
                top: 0;
                background: #fff;
                height: 100vh;
                width: 30vw;
                z-index: 100;
                transition: 0.5s;
                li {
                    font-size: 24px;
                    padding: 20px 0px;
                    cursor: default;
                    width: 100%;
                    padding-left: 30px;
                }
                li:hover {
                    background: #aaa;
                }
            }

            .menu.off {
                opacity: 0;
                left: -100%;
            }
            .menu.on {
                opacity: 1;
                left: 0%;
            }
        }
    }
`;
