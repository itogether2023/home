import React, { useEffect } from "react";
import styled from "styled-components";

import gawon from "../asset/img/port/가원2.png";
import pois from "../asset/img/port/pois.png";
import taco from "../asset/img/port/taco.png";
import lifehim from "../asset/img/port/lifehim.png";

import AOS from "aos";
import "aos/dist/aos.css";

export default function Portfolio() {
    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init();
    }, []);
    return (
        <>
            <Section>
                <div className="container">
                    <div className="titleBox">
                        <h1
                            data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-delay="1000"
                        >
                            PORTFOLIO
                        </h1>
                        <h1
                            data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-delay="1300"
                        >
                            PORTFOLIO
                        </h1>
                        <h1
                            data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-delay="1600"
                        >
                            PORTFOLIO
                        </h1>
                    </div>
                    <ul className="listBox">
                        <div className="scrollIcon">
                            <p>></p>
                            <p>></p>
                            <p>></p>
                        </div>
                        <li data-aos="fade-up" data-aos-offset="300">
                            <img src={gawon} alt="" />
                            <p>가원 법률 사무소</p>
                        </li>
                        <li data-aos="fade-up" data-aos-offset="300">
                            <img src={pois} alt="" />
                            <p>포이스</p>
                        </li>
                        <li data-aos="fade-up" data-aos-offset="300">
                            <img src={taco} alt="" />
                            <p>타코잉닭</p>
                        </li>
                        <li data-aos="fade-up" data-aos-offset="300">
                            <img src={lifehim} alt="" />
                            <p>라이프힘</p>
                        </li>
                    </ul>
                </div>
            </Section>
        </>
    );
}

const Section = styled.div`
    .container {
        height: 3600px;
        position: relative;
        .titleBox {
            padding-top: 150px;
            position: sticky;
            float: left;
            width: 50%;
            top: 0;
            z-index: 1;
            cursor: default;
            h1 {
                font-size: 138px;
                font-weight: 800;
                color: #000000;
                /* transform: rotate(90deg); */
                color: #ffffff;
                text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
                    1px 1px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000,
                    -2px 2px 0 #000, 2px 2px 0 #000;
            }
            h1:nth-child(2) {
                padding-left: 50px;
                color: black;
            }
            h1:nth-child(3) {
                padding-left: 100px;
            }
        }
        .listBox {
            width: 50%;
            margin-bottom: 300px;
            margin-top: 300px;
            float: right;
            text-align: right;
            padding-right: 3%;
            .scrollIcon {
                text-align: center;
                margin-bottom: 500px;
                font-size: 32px;
                p {
                    line-height: 0.4;
                }
                p:first-child {
                    animation: arrow 1s infinite;
                }
                p:nth-child(2) {
                    animation: arrow 1s 0.2s infinite;
                }
                p:nth-child(3) {
                    animation: arrow 1s 0.3s infinite;
                }

                @keyframes arrow {
                    from {
                        opacity: 0;
                        transform: translateY(-50%);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(100%);
                    }
                }
            }
            li {
                margin-bottom: 200px;
                p {
                    font-size: 24px;
                    padding-top: 30px;
                    opacity: 0;
                    transition: 1s all;
                    top: -20px;
                    position: relative;
                }
                img {
                    border: 2px solid black;
                    width: 80%;
                    filter: grayscale(100%);
                    transition: 0.5s all;
                }
            }
            li:hover {
                cursor: pointer;
                img {
                    filter: grayscale(0%);
                    transform: scale(1.1);
                }
                p {
                    opacity: 1;
                    top: 0px;
                }
            }
        }
    }
`;
