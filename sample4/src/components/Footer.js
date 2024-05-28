import React from "react";
import styled from "styled-components";

import at2 from "../asset/img/main/at2.png";

export default function Footer() {
    return (
        <>
            <Section>
                <div className="container">
                    <div className="flexBox">
                        <div className="title">
                            <h4>Turning dreams into reality</h4>
                            <h1>LUMIC</h1>
                        </div>
                        <ul className="nav">
                            <li>
                                <span>ABOUT</span>
                            </li>
                            <li>
                                <span>PORTFOLIO</span>
                            </li>
                            <li>
                                <span>CONTACT</span>
                            </li>
                        </ul>
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
            cursor: default;
            li {
            }
            span {
                display: inline;
                position: relative;
            }
            span::after {
                content: "";
                width: 0%;
                height: 10px;
                background: rgba(0, 0, 0, 0.4);
                position: absolute;
                top: 60%;
                left: 0;
                transition: 0.5s all;
            }

            li:hover {
                span::after {
                    width: 100%;
                }
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
