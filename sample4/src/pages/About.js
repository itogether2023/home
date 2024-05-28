import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";

import movie from "../asset/movie/movie.mp4";

import box1 from "../asset/movie/box1.mp4";
import box2 from "../asset/movie/box2.mp4";
import box3 from "../asset/movie/box3.mp4";

import back1 from "../asset/img/main/back1.jpg";

import mamot1 from "../asset/img/main/mamot(1).png";
import mamot2 from "../asset/img/main/mamot(2).png";
import mamot3 from "../asset/img/main/mamot(3).png";
import mamot4 from "../asset/img/main/mamot(4).png";
import mamot5 from "../asset/img/main/mamot(5).png";

export default function About(props) {
    const [scroll, setScroll] = useState(0);
    const [boxPosition, setBoxPosition] = useState(100);
    const [thirdBoxOpacity, setThirdBoxOpacity] = useState(1);
    const [visibility, setVisibility] = useState("visible");

    useEffect(() => {
        AOS.init();
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", onScroll);

        let position =
            -(1 / 10) * scroll + 1347 / 5 >= 0
                ? -(1 / 10) * scroll + 1347 / 5
                : 0;
        let opacity = -(1 / 200) * scroll + 16;
        if (scroll > 3000) {
            setVisibility("hidden");
        } else {
            setVisibility("visible");
        }
        setBoxPosition(position);
        setThirdBoxOpacity(opacity);
    });

    const onScroll = () => {
        setScroll(window.scrollY);
        console.log(scroll);
    };

    return (
        <Section>
            {!props.closeLoading && (
                <div className="container">
                    <div
                        className="first-section"
                        data-aos="fade"
                        data-aos-duration="1000"
                        data-aos-delay="1000"
                    >
                        <video autoPlay loop muted>
                            <source src={movie} type="video/mp4" />
                        </video>
                        <h1>LUMIC - LUcid MIstiC</h1>
                        <h3>
                            상상을 현실로 이루어주는 영감의 직조기 (Inspiration Loom)
                        </h3>
                        <p>
                            아무리 뛰어난 아이디어와 혁신적인 아이템이라도 실현되지 않으면 그저 공상에 불과합니다.<br></br>
                            {/* 실현되지 않은 상상은 현실에 아무런 영향을 미치지 못하며, 결국 잊혀질 뿐입니다. <br></br> */}
                            LUMIC과 함께라면 여러분의 상상이 현실이 되어 빛을 발할 수 있도록 도와드리겠습니다.
                        </p>
                    </div>
                    <div className="second-section">
                        <h1 data-aos="fade-up" data-aos-offset="300">
                            Even the greatest ideas are mere fantasies
                        </h1>
                        <h1
                            data-aos="fade-up"
                            data-aos-offset="300"
                            data-aos-delay="100"
                        >
                            the whispers of your dreams
                        </h1>
                        <h1
                            data-aos="fade-up"
                            data-aos-offset="300"
                            data-aos-delay="100"
                        >
                            into the loud and vibrant
                        </h1>
                        <h1
                            data-aos="fade-up"
                            data-aos-offset="300"
                            data-aos-delay="100"
                        >
                            symphony of reality
                        </h1>

                    </div>
                    <div className="third-section">
                        <ThirdSectionContainer
                            opacity={thirdBoxOpacity}
                            visibility={visibility}
                        >
                            <div className="box">
                                <h1 data-aos="fade-left">What We Make It</h1>
                                <h2 data-aos="fade-left" data-aos-delay="100">
                                    Transforming the whispers of your dreams
                                    into the loud and vibrant symphony of
                                    reality
                                </h2>
                            </div>
                            <ScrollUlBox
                                boxPosition={boxPosition}
                                opacity={thirdBoxOpacity}
                            >
                                <li>
                                    <img src={mamot1} alt="" />
                                </li>
                                <li>
                                    <img src={mamot2} alt="" />
                                </li>
                                <li>
                                    <img src={mamot3} alt="" />
                                </li>
                                <li>
                                    <img src={mamot4} alt="" />
                                </li>
                                <li>
                                    <img src={mamot5} alt="" />
                                </li>
                            </ScrollUlBox>
                        </ThirdSectionContainer>
                    </div>
                    <div className="fourth-section">
                        <div className="fs-stiky">
                            <h1>What We Make It</h1>
                            <h4>symphony of reality</h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit.
                            </p>
                        </div>
                        <div className="fs-box">
                            <video autoPlay loop muted data-aos="fade-up">
                                <source src={box1} type="video/mp4" />
                            </video>
                        </div>
                        <div className="fs-box">
                            <video autoPlay loop muted data-aos="fade-up">
                                <source src={box2} type="video/mp4" />
                            </video>
                        </div>
                        <div className="fs-box">
                            <video autoPlay loop muted data-aos="fade-up">
                                <source src={box3} type="video/mp4" />
                            </video>
                        </div>
                        <div className="fs-box">
                            <video autoPlay loop muted data-aos="fade-up">
                                <source src={movie} type="video/mp4" />
                            </video>
                        </div>
                    </div>
                    <div className="fifth-section">
                        <h1>힌트 : 어떤일 하는지 적을것</h1>
                        <ul>
                            <li data-aos="fade-up"></li>
                            <li data-aos="fade-up" data-aos-delay="200"></li>
                            <li data-aos="fade-up" data-aos-delay="400"></li>
                        </ul>
                    </div>
                </div>
            )}
        </Section>
    );
}

const Section = styled.div`
    .container {
        margin-top: 120px;
        .first-section {
            height: 900px;
            video {
                border-radius: 10px;
            }
            h1 {
                font-size: 64px;
                margin-bottom: 40px;
            }
            h3 {
                margin-bottom: 10px;
            }
        }
        .second-section {
            height: 700px;
            padding-bottom: 80px;
            h1 {
                font-size: 82px;
                text-align: center;
            }
        }
        .third-section {
            height: 2000px;
            background: #101010;
            padding: 150px 0px;
        }
        .fourth-section {
            height: 2500px;
            background: url(${back1});
            background-size: cover;
            background-attachment: fixed;
            padding-top: 100px;
            padding-bottom: 300px;
            position: relative;

            .fs-stiky {
                text-align: center;
                position: sticky;
                top: 50%;
                left: 50%;
                transform: translateX(-50%, -50%);
                color: white;
                h1 {
                    font-size: 42px;
                    padding-bottom: 10px;
                }
                h4 {
                    font-size: 28px;
                    padding-bottom: 10px;
                }
                z-index: 5;
            }
            .fs-box {
                height: 20%;
                video {
                    width: 25%;
                }
            }

            .fs-box:nth-child(2) {
                text-align: left;
                padding-left: 15%;
                video {
                    width: 45%;
                    border-radius: 20px;
                }
            }
            .fs-box:nth-child(3) {
                text-align: right;
                padding-right: 10%;
                video {
                    width: 20%;
                    border-radius: 20px;
                }
            }
            .fs-box:nth-child(4) {
                text-align: center;
                video {
                    width: 30%;
                    border-radius: 20px;
                }
            }
            .fs-box:nth-child(5) {
                text-align: left;
                padding-left: 10%;
                padding-top: 40px;
                video {
                    width: 55%;
                    border-radius: 20px;
                }
            }
        }
        .fifth-section {
            background: #101010;
            padding-top: 200px;
            padding-bottom: 200px;
            h1 {
                color: white;
                text-align: center;
                margin-bottom: 50px;
            }
            ul {
                width: 100%;
                display: flex;
                justify-content: center;
                gap: 5%;
                li {
                    width: 25%;
                    height: 500px;
                    background: white;
                    border-radius: 20px;
                }
            }
        }
    }
`;

const ThirdSectionContainer = styled.div`
    position: relative;
    height: 100%;
    visibility: ${(props) => props.visibility};
    .box {
        position: sticky;
        top: 10%;
        color: white;
        overflow: hidden;
        h1 {
            font-size: 36px;
        }
    }
`;

const ScrollUlBox = styled.ul`
    padding-top: 20px;
    width: 100%;
    display: flex;
    gap: 10px;
    position: sticky;
    top: 25%;
    overflow: hidden;
    opacity: ${(props) => props.opacity};
    transition: 0.5s all;

    li {
        width: 25%;
        height: 300px;
        background: white;
        transform: translateX(${(props) => props.boxPosition}vw);
        opacity: 1;
        overflow: hidden;
        img {
            width: 100%;
            height: 100%;
        }
    }
`;
