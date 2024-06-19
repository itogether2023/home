import React, { useEffect } from "react";
import styled from "styled-components";

import AOS from "aos";
import "aos/dist/aos.css";

import at2 from "../asset/img/main/at2.png";
import { useNavigate } from "react-router-dom";

export default function Footer() {
    const navi = useNavigate();
    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init();
    }, []);
    return (
        <>
            <Section>
                <div className="container">
                    <div className="flexBox">
                        <div className="title">
                            <h4 data-aos="fade" data-aos-duration="1000">
                                Turning dreams into reality
                            </h4>
                            <h1
                                data-aos="fade"
                                data-aos-duration="1000"
                                data-aos-delay="300"
                            >
                                LUMIC
                            </h1>
                        </div>
                        <div
                            className="nav"
                            onClick={() => {
                                window.scrollTo(0, 0);
                                navi("/contact");
                            }}
                        >
                            <h2
                                data-aos="fade-right"
                                data-aos-duration="1000"
                                data-aos-delay="500"
                            >
                                Contact Us
                            </h2>
                            <p
                                data-aos="fade-right"
                                data-aos-duration="1000"
                                data-aos-delay="800"
                            >
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
        width: 100%;
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
    @media screen and (max-width: 600px) {
        .flexBox {
            flex-direction: column;
            padding: 60px 10px;
        }
        .flexBox .title h4 {
            font-size: 28px;
        }
        .flexBox .title h1 {
            font-size: 76px;
            padding-top: 0px;
        }
        .info {
            text-align: start;
            padding-right: 0px;
            padding-bottom: 60px;
        }
        .flexBox .nav {
            display: none;
        }
    }
`;
