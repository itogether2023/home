import React, { useEffect } from "react";
import styled from "styled-components";

import at2 from "../asset/img/main/at2.png";
import { useNavigate } from "react-router-dom";

export default function Footer() {
    const navi = useNavigate();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <Section>
                <div className="container">
                    <div className="flexBox">
                        <div className="title">
                            <h4>Turning dreams into reality</h4>
                            <h1>LUMIC</h1>
                        </div>
                        <div
                            className="nav"
                            onClick={() => {
                                window.scrollTo(0, 0);
                                navi("/contact");
                            }}
                        >
                            <h2>Contact Us</h2>
                            <p>
                                <i class="fa-solid fa-right-long"></i>
                            </p>
                        </div>
                    </div>
                    <div className="info">
                        <p>PKD Company, Dalseo-gu, Deagu, Republic of Korea</p>
                        <p>
                            Tel.053-111-1111 | Fax. 053-111-1111 | E-mail.
                            Itgether2023@gmail.com{" "}
                        </p>
                    </div>
                </div>
            </Section>
        </>
    );
}

const Section = styled.div`
    background: #f6f6f6;
    border-top: 3px black outset;
    .flexBox {
        padding: 60px 60px;
        display: flex;
        justify-content: space-between;
        .title {
            font-weight: bold;
            h1 {
                font-size: 148px;
                padding-top: 20px;
            }
            h4 {
                font-size: 48px;
            }
        }
        .nav {
            display: flex;
            flex-direction: column;
            font-size: 32px;
            gap: 20px;
            cursor: pointer;

            i {
                font-size: 72px;
                transition: 1s all;
            }
        }
        .nav:hover {
            i {
                transform: translateX(200%);
            }
        }
    }
    .info {
        text-align: right;
        padding-right: 60px;
        padding-bottom: 60px;
        p {
            padding-top: 10px;
            font-size: 20px;
        }
    }
`;
