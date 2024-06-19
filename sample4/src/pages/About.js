import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";

import movie from "../asset/movie/movie.mp4";

import box1 from "../asset/movie/box1.mp4";
import box2 from "../asset/movie/box2.mp4";
import box3 from "../asset/movie/box3.mp4";

import se4bg from "../asset/img/main/bg.jpg";
import se6bg from "../asset/img/main/se6bg.jpg";

import list1 from "../asset/img/main/service/list1.jpg";
import list2 from "../asset/img/main/service/list2.jpg";
import list3 from "../asset/img/main/service/list3.jpg";
import list4 from "../asset/img/main/service/list4.jpg";

import object from "../asset/img/main/object.png";

export default function About(props) {
    const [scroll, setScroll] = useState(0);
    const [boxPosition, setBoxPosition] = useState(100);
    const [thirdBoxOpacity, setThirdBoxOpacity] = useState(1);
    const [secondTextPosition, setSecondTextPosition] = useState(100);
    const [secondTextPosition2, setSecondTextPosition2] = useState(-50);
    const [visibility, setVisibility] = useState("visible");

    useEffect(() => {
        // window.scrollTo(0, 0);
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
        console.log(secondTextPosition);
    });

    const onScroll = () => {
        setScroll(window.scrollY);
        console.log(scroll);
    };

    return (
        <Section>
            {!props.closeLoading && (
                <div className="container">
                    <div className="first-section">
                        <h2 className="sub-title" data-aos="fade-up">
                            Turning dreams into reality
                        </h2>
                        <h2 className="main-title">
                            <p className="explan">
                                <p data-aos="fade-left" data-aos-delay="1000">
                                    Lucid
                                </p>
                                <p data-aos="fade-left" data-aos-delay="1000">
                                    Mystic
                                </p>
                            </p>
                            <p className="name">LUMIC</p>
                        </h2>
                        <h3 className="content">
                            <p>
                                <span>: </span> 상상해온 것을{" "}
                                <span>명쾌하게</span> 뜌땨이
                            </p>
                            <p>
                                <span>: 신비로운 </span> 어쩌고 저쩌고 마멋은
                                그냥 귀엽다
                            </p>
                        </h3>
                        {/* <img className="title-img" src={logo} alt="" /> */}
                        <div className="slide-box">
                            <h4 className="slide-text">
                                Through the power of imagination, dreams become
                                tangible realities, shaping the world around us
                                Through the power of imagination,
                            </h4>
                        </div>
                        <p className="main-introduce">
                            <div>
                                <h2 data-aos="fade-left" data-aos-offset="450">
                                    WE BRING YOUR IDEAS
                                </h2>
                                <h2 data-aos="fade-right" data-aos-offset="430">
                                    TO LIFE ONLINE
                                </h2>
                            </div>
                            <p data-aos="fade" data-aos-offset="400">
                                상상만 해오던 그런 기술을 구현합니다 <br></br>{" "}
                                회사 비전이나 뭐 이런거 저런거 소개 한글로
                                적당히 소개하면됨
                            </p>
                        </p>
                    </div>

                    <div className="third-section">
                        <ThirdSectionContainer
                            opacity={thirdBoxOpacity}
                            visibility={visibility}
                        >
                            <div className="box">
                                <h1 data-aos="fade-left">
                                    From Concept to Creation,<br></br> We Bring
                                    Ideas to Life
                                </h1>
                                <h2
                                    data-aos="fade-left"
                                    data-aos-delay="100"
                                ></h2>
                            </div>
                            <ScrollUlBox
                                boxPosition={boxPosition}
                                opacity={thirdBoxOpacity}
                            >
                                <li>
                                    <img className="list-img" src={list1} />
                                    <h1>WEB</h1>
                                </li>
                                <li>
                                    <img className="list-img" src={list2} />
                                    <h1>APP</h1>
                                </li>
                                <li>
                                    <img className="list-img" src={list3} />
                                    <h1>AI</h1>
                                </li>
                                <li>
                                    <img className="list-img" src={list4} />
                                    <h1>MAINTENANCE</h1>
                                </li>
                            </ScrollUlBox>
                        </ThirdSectionContainer>
                    </div>

                    <div className="third-section-mo">
                        <h2 data-aos="fade-up">
                            From Concept to Creation,<br></br> We Bring Ideas to
                            Life
                        </h2>
                        <ul>
                            <li>WEB</li>
                            <li>APP</li>
                            <li>AI</li>
                            <li>SERVER</li>
                        </ul>
                    </div>

                    <div className="fourth-section">
                        <div className="fs-stiky">
                            <h1>Realizing Your Imagination</h1>
                            <p>Building a Bridge from Fantasy to Reality</p>
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
                    {/* <div className="fifth-section">
                        <p className="info_title">HOW TO MAKE</p>
                        <h2 className="info">
                            <p data-aos="fade-up" data-aos-offset="300">
                                S<span>EO</span>
                            </p>
                            <p data-aos="fade-up" data-aos-offset="340">
                                I<span>NNOVATIVE</span>
                            </p>
                            <p data-aos="fade-up" data-aos-offset="350">
                                U<span>X/UI</span>
                            </p>

                            <p
                                data-aos="fade-up"
                                data-aos-delay="100"
                                data-aos-offset="300"
                            >
                                S<span>ECURITY</span>
                            </p>
                            <p
                                data-aos="fade-up"
                                data-aos-delay="100"
                                data-aos-offset="340"
                            >
                                C<span>USTOM</span>
                            </p>
                            <p
                                data-aos="fade-up"
                                data-aos-delay="100"
                                data-aos-offset="350"
                            >
                                D<span>ESIGN</span>
                            </p>

                            <p
                                data-aos="fade-up"
                                data-aos-delay="200"
                                data-aos-offset="300"
                            >
                                S<span>CALABILITY</span>
                            </p>
                            <p
                                data-aos="fade-up"
                                data-aos-delay="200"
                                data-aos-offset="340"
                            >
                                B<span>RAND</span>
                            </p>
                            <p
                                data-aos="fade-up"
                                data-aos-delay="200"
                                data-aos-offset="350"
                            >
                                R<span>ESPONSIVE</span>
                            </p>
                        </h2>
                    </div> */}
                    <div className="sample-section">
                        <div className="slide-text-box">
                            <h1>We Make &nbsp;</h1>
                            <h1 className="slide-text">
                                <p>RESPONSIVE</p>
                                <p>INTUITIVE</p>
                                <p>DYNAMIC</p>
                                <p>SCALABLE</p>
                                <p>SECURE</p>
                                <p>USER-FRIENDLY</p>
                                <p>RESPONSIVE</p>
                            </h1>
                        </div>
                        <div className="info">
                            <p>build solutions that grow with you,</p>
                            <p>making every interaction seamless.</p>
                        </div>
                    </div>
                </div>
            )}
        </Section>
    );
}

const Section = styled.div`
    cursor: default;
    .container {
        margin-top: 30px;
        .first-section {
            height: 1800px;
            padding-top: 140px;
            background-color: #090909;
            display: flex;
            flex-direction: column;
            /* overflow: hidden; */
            position: relative;
            .sub-title {
                padding-left: 50px;
                color: white;
                font-size: 48px;
                font-weight: light;
                padding-bottom: 25px;
            }
            .main-title {
                padding-left: 50px;
                color: white;
                display: flex;
                flex-direction: column;
                .explan {
                    display: flex;
                    gap: 50px;
                    p {
                        font-family: "Lobster";
                        font-size: 52px;
                        padding-top: 30px;
                        line-height: 0.1;
                    }
                }
                .name {
                    font-size: 148px;
                    /* text-shadow: 0 0 1em, 0 0 0.1em; */
                    animation: lightOn 1s 0.5s forwards;
                    opacity: 0;
                    padding-bottom: 20px;
                    @keyframes lightOn {
                        0% {
                            opacity: 0;
                            text-shadow: 0 0 0em, 0 0 0em;
                        }
                        50% {
                            opacity: 1;
                            text-shadow: 0 0 1em, 0 0 0.05em;
                        }
                        100% {
                            opacity: 1;
                            text-shadow: 0 0 0em, 0 0 0em;
                        }
                    }
                }
            }
            .content {
                padding-bottom: 40px;
                padding-left: 70px;
                opacity: 0;
                animation: fadeDown 1s 1.5s forwards;
                p {
                    color: #ffffff;
                    font-size: 32px;
                    animation: colorChange 2s 2.5s forwards;
                    padding-bottom: 10px;
                }
                span {
                    color: white;
                    animation: lightOn2 1s 2.5s forwards;
                }
                @keyframes lightOn2 {
                    0% {
                        text-shadow: 0 0 0em, 0 0 0em;
                    }
                    50% {
                        text-shadow: 0 0 0.5em, 0 0 0.1em;
                    }
                    100% {
                        text-shadow: 0 0 0.15em, 0 0 0.01em;
                    }
                }
                @keyframes colorChange {
                    from {
                        color: #ffffff;
                    }
                    to {
                        color: #666;
                    }
                }
                @keyframes fadeDown {
                    from {
                        opacity: 0;
                        transform: translateY(-20%);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0%);
                    }
                }
            }
            .title-img {
                position: absolute;
                top: 50%;
                width: 30%;
                left: 50%;
                transform: translate(-50%, -50%);
                z-index: 1;
            }
            .slide-box {
                overflow: hidden;
                position: sticky;
                top: 85%;
                bottom: 0;
                width: 100%;
                border-top: 1px solid rgba(255, 255, 255, 0.5);
                border-bottom: 1px solid rgba(255, 255, 255, 0.5);
                background-color: #000;
            }

            .slide-text {
                padding: 20px 0;
                color: rgba(255, 255, 255, 0.5);
                font-size: 86px;
                opacity: 1;
                font-family: "Dancing Script";
                width: 200vw;
                background-color: #000;
                z-index: 5;
                animation: slide 50s linear infinite;
                white-space: nowrap;
            }

            @keyframes slide {
                from {
                    transform: translateX(0%);
                }
                to {
                    transform: translateX(-50%);
                }
            }

            .main-introduce {
                padding-top: 220px;
                text-align: center;
                div:first-child {
                    margin: 0 auto;
                    overflow: hidden;
                    h2 {
                        font-size: 102px;
                        color: #ffffff;
                    }
                }

                p {
                    line-height: 1.5;
                    padding-top: 80px;
                    font-size: 28px;
                    color: #ffffff;
                }
            }
        }
        .third-section {
            height: 2300px;
            background: black;
            padding: 150px 0px;
            .box {
                padding-bottom: 30px;
            }
        }
        .third-section-mo {
            display: none;
        }
        .fourth-section {
            height: 2500px;
            background: url(${se4bg}), rgba(0, 0, 0, 0.5);
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
                    color: #000000;
                    color: #ffffff;
                    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000,
                        -1px 1px 0 #000, 1px 1px 0 #000, -2px -2px 0 #000,
                        2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000;
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
            padding: 280px 0px;
            background: black;
            .info_title {
                padding-bottom: 30px;
                text-align: center;
                color: white;
                font-size: 64px;
            }
            .info {
                display: grid;
                gap: 30px;
                grid-template-columns: 1fr 1fr 1fr;
                p {
                    color: white;
                    font-size: 98px;
                    span {
                        color: gray;
                        font-size: 94px;
                    }
                }
            }
        }

        .sixth-section {
            position: relative;
            h1 {
                padding: 300px 0px;
                color: white;
                text-align: center;
            }
            img {
                position: absolute;
                z-index: -1;
                width: 100%;
                height: 100%;
                opacity: 1;
                /* filter: grayscale(50); */
            }
        }

        .sample-section {
            padding: 180px 0px;
            background: #080808;
            .slide-text-box {
                color: #ffffff;
                display: flex;
                font-size: 86px;
                padding-left: 40px;
            }
            .slide-text {
                height: 150px;
                overflow: hidden;
                vertical-align: baseline;
                p {
                    color: #ffffff;
                    transform: translateY(-200%);
                    animation: slide-up 10s linear infinite;
                }
                @keyframes slide-up {
                    0% {
                        transform: translateY(0%);
                    }
                    6% {
                        transform: translateY(-100%);
                    }
                    18% {
                        transform: translateY(-100%);
                    }
                    22% {
                        transform: translateY(-200%);
                    }
                    34% {
                        transform: translateY(-200%);
                    }
                    38% {
                        transform: translateY(-300%);
                    }
                    50% {
                        transform: translateY(-300%);
                    }
                    54% {
                        transform: translateY(-400%);
                    }
                    66% {
                        transform: translateY(-400%);
                    }
                    70% {
                        transform: translateY(-500%);
                    }
                    82% {
                        transform: translateY(-500%);
                    }
                    86% {
                        transform: translateY(-600%);
                    }
                    100% {
                        transform: translateY(-600%);
                    }
                }
            }
            .info {
                padding: 70px;

                p {
                    font-size: 64px;
                    color: white;
                    line-height: 1.5;
                }
                p:nth-child(2) {
                    padding-left: 80px;
                }
            }
        }
    }

    @media screen and (max-width: 1300px) {
        .container .fifth-section .info p {
            font-size: 66px;
        }
        .container .fifth-section .info p span {
            font-size: 66px;
        }
    }

    @media screen and (max-width: 1000px) {
        .container .first-section {
            text-align: center;
        }
        .container .first-section .explan {
            justify-content: center;
        }
        .container .first-section .sub-title {
            padding-left: 0px;
        }
        .container .first-section .main-title {
            padding-left: 0px;
        }
        .container .first-section .content {
            padding-left: 0px;
        }
        .container .fifth-section .info p {
            font-size: 50px;
        }
        .container .fifth-section .info p span {
            font-size: 50px;
        }
    }
    @media screen and (max-width: 800px) {
        .container .first-section .sub-title {
            font-size: 32px;
            padding-bottom: 15px;
        }
        .container .first-section .main-title .explan p {
            font-size: 32px;
        }
        .container .first-section .main-title .name {
            font-size: 136px;
        }
        .container .first-section .content p {
            font-size: 28px;
        }
        .container .first-section .main-introduce {
            padding-top: 120px;
        }
        .container .first-section .slide-text {
            font-size: 58px;
        }
        .container .third-section {
            display: none;
        }
        .container .third-section-mo {
            display: block;
            padding: 120px 0px;
            background: #090909;
            h2 {
                text-align: center;
                font-size: 38px;
                padding-bottom: 50px;
                color: white;
            }
            ul {
                display: grid;
                grid-template-columns: 1fr 1fr;
                color: white;
                li {
                    text-align: center;
                    height: 150px;
                }
            }
        }
        .container .fourth-section .fs-box:nth-child(2) video {
            width: 65%;
            border-radius: 20px;
        }
        .container .fourth-section .fs-box:nth-child(3) video {
            width: 40%;
            border-radius: 20px;
        }
        .container .fourth-section .fs-box:nth-child(4) video {
            width: 50%;
            border-radius: 20px;
        }
        .container .fourth-section .fs-box:nth-child(5) video {
            width: 65%;
            border-radius: 20px;
        }
        .container .fifth-section {
            padding: 140px 0px;
        }
        .container .fifth-section .info {
            grid-template-columns: 1fr 1fr;
            margin: 0 20px;
        }
        .container .fifth-section .info p {
            font-size: 62px;
        }
        .container .sixth-section {
            padding: 120px 0px;
        }
        .container .sixth-section ul {
            grid-template-columns: 1fr;
            gap: 30px;
            li {
                margin: 0 auto;
                height: 400px;
                width: 90%;
            }
        }
    }
    @media screen and (max-width: 600px) {
        width: 100vw;
        .container .first-section .sub-title {
            font-size: 28px;
            padding-bottom: 15px;
        }
        .container .first-section .main-title .name {
            font-size: 116px;
        }
        .container .first-section .content p {
            font-size: 18px;
        }
        .container .fifth-section .info {
            grid-template-columns: 1fr;
            margin: 0 20px;
        }
        .container .first-section .main-introduce div:first-child h2 {
            font-size: 36px;
            color: #ffffff;
        }
        .container .first-section .main-introduce p {
            line-height: 1.5;
            padding-top: 80px;
            font-size: 16px;
            color: #ffffff;
        }

        .container .fifth-section .info p {
            font-size: 48px;
        }
        .container .fifth-section .info p span {
            font-size: 46px;
        }
    }
    @media screen and (max-width: 400px) {
        .container .first-section {
            height: 1300px;
        }
        .container .first-section .sub-title {
            font-size: 24px;
        }
        .container .first-section .main-title .name {
            font-size: 102px;
        }
        .container .first-section .content p {
            font-size: 16px;
        }
        .container .first-section .main-introduce p {
            font-size: 14px;
        }
        .container .third-section-mo h2 {
            font-size: 24px;
            padding-bottom: 50px;
        }
        .container .fourth-section {
            height: 1600px;
            padding-bottom: 150px;
        }
        .container .fourth-section .fs-stiky h1 {
            font-size: 24px;
        }
        .container .fifth-section .info {
            gap: 10px;
        }
        .container .fifth-section .info_title {
            font-size: 42px;
        }
        .container .fifth-section .info p span {
            font-size: 36px;
        }
    }
`;

const SecondContainer = styled.div`
    h2 {
        font-size: 74px;
        overflow: hidden;
    }
    span {
        position: relative;
        transform: translateX(50%);
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
            font-size: 48px;
        }
    }
`;

const ScrollUlBox = styled.ul`
    padding: 10px 0px;
    width: 100%;
    display: flex;
    position: sticky;
    top: 32%;
    overflow: hidden;
    opacity: ${(props) => props.opacity};
    transition: 0.5s all;
    li {
        width: 33%;
        height: 500px;
        transform: translateX(${(props) => props.boxPosition}vw);
        opacity: 1;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        border-top: 1px solid #333;
        border-right: 1px solid #333;
        border-bottom: 1px solid #333;
        h1 {
            font-size: 32px;
            color: white;
            text-align: center;
            letter-spacing: 1px;
        }
        img {
            position: absolute;
            z-index: -1;
            object-fit: contain;
            opacity: 0.1;
            transition: 1s all;
            height: 100%;
        }
        transition: 1s all;
    }
    li:first-child {
        border-left: 1px solid #333;
    }
    li:hover {
        img {
            opacity: 0.5;
            transform: scale(1.05);
        }
    }
`;
