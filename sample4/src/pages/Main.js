import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import box1 from "../asset/movie/mainVideo.mp4";
import logoBlack from "../asset/img/logo/logoBlack.png";

export default function Main3() {
    const nav = useNavigate();
    return (
        <Section>
            <div className="first-section">
                <div className="bg-video">
                    <video autoPlay loop muted>
                        <source src={box1} type="video/mp4" />
                    </video>
                </div>
                <div className="content-box">
                    <h4>A loom that turns imagination into reality</h4>
                    {/* <h1>LUMIC</h1> */}
                    <img className="logo" src={logoBlack} alt="" />
                    <p>
                        No matter how great an idea or innovative item is, if it
                        is not realized, it is nothing more than a fantasy.{" "}
                        <br></br> With LUMIC, we will help you make your
                        imagination shine and become a reality.
                    </p>
                    <p className="link">
                        <h4
                            onClick={() => {
                                nav("/about");
                            }}
                        >
                            ABOUT
                        </h4>
                        <h4
                            onClick={() => {
                                nav("/portfolio");
                            }}
                        >
                            PORTFOLIO
                        </h4>
                        <h4
                            onClick={() => {
                                nav("/contact");
                            }}
                        >
                            CONTACT
                        </h4>
                    </p>
                </div>
            </div>
        </Section>
    );
}

const Section = styled.div`
    .first-section {
        overflow: hidden;
        height: 100vh;
        position: relative;
        cursor: default;
        .bg-video {
            width: 100vw;
            height: 100vh;
            position: absolute;
            z-index: -1;
            opacity: 0.5;
            video {
                border-radius: 10px;
                width: 100vw;
                height: 100vh;
                object-fit: cover;
            }
        }
        .content-box {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            h1 {
                font-size: 174px;
                margin-bottom: 40px;
                letter-spacing: 5px;
            }
            .logo {
                padding: 40px 0px;
            }
            h4 {
                font-size: 26px;
                font-weight: 800;
                color: #000000;
                color: #ffffff;
                text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
                    1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000,
                    -1px 1px 0 #000, 1px 1px 0 #000;
            }
            p {
                text-align: center;
                font-size: 18px;
                line-height: 1.5;
            }
            .link {
                padding-top: 50px;
                display: flex;
                gap: 50px;
                h4 {
                    position: relative;
                }
                h4::after {
                    content: "";
                    position: absolute;
                    width: 0%;
                    height: 2px;
                    background: black;
                    top: 105%;
                    left: 0%;
                    transition: 1s all;
                }
                h4:hover::after {
                    width: 100%;
                }
            }
        }
    }
    @media screen and (max-width: 400px) {
        .first-section .content-box h4 {
            font-size: 16px;
        }
        .first-section .content-box h1 {
            font-size: 98px;
            letter-spacing: 1px;
        }
        .first-section .content-box p {
            font-size: 12px;
        }
        .first-section .content-box .logo {
            width: 80%;
        }
    }
`;
