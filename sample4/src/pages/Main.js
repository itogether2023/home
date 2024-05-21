import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import AOS from "aos";
import "aos/dist/aos.css";

import introBlack from "../asset/img/main/introBlack.png";
import introWhite from "../asset/img/main/introWhite.png";
import at2 from "../asset/img/main/at2.png";

export default function Main() {
    const [isLoading, setIsLoading] = useState(false);
    const [showMain, setShowMain] = useState(false);

    useEffect(() => {}, [isLoading]);

    return (
        <>
            {!isLoading && (
                <Loading>
                    <div className="blackBack"></div>
                    <div className="crossLine1"></div>
                    <div className="crossLine2"></div>
                    <div className="whiteBack">
                        <div>
                            <h4 id="animated-h4">
                                <span>Transforming</span> <span>the</span>{" "}
                                <span>whispers</span> <span>of</span>{" "}
                                <span>your</span> <span>dreams</span> <br></br>
                                <span>into</span> <span>the</span>{" "}
                                <span>loud</span> <span>and</span>{" "}
                                <span>vibrant</span> <span>symphony</span>{" "}
                                <span>of</span> <span>reality</span>
                            </h4>
                            <p id="animated-p">
                                <span>
                                    Turning limitless dreams into tangible
                                    realities,
                                </span>
                                <br></br>
                                <span>
                                    we blend vision, dedication, and courage to
                                    pursue the seemingly impossible.
                                </span>
                                <br></br>
                                <span>
                                    Our innovative process gives voice to every
                                    whisper of imagination,
                                </span>
                                <br></br>
                                <span>
                                    creating a symphony of real-world marvels
                                    where abstract
                                </span>
                                <br></br>
                                <span>thoughts take concrete form</span>
                            </p>
                        </div>
                        {/* <img src={introBlack} /> */}
                        <p className="title">
                            <span>Turning dreams into reality</span>
                            <h1>LUMIC</h1>
                        </p>
                    </div>
                </Loading>
            )}
        </>
    );
}

const Section = styled.div``;

const Loading = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    .blackBack {
        background: white;
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 2;
        animation: moveBlackBack 2s cubic-bezier(0.6, 0.28, 0.74, 0.05) forwards;
        animation-delay: 1s;
        img {
            width: 100%;
        }
    }
    .whiteBack {
        background: white;
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        img {
            width: 120%;
            max-height: 50%;
            min-width: 80%;
        }
        h4 {
            margin-top: 100px;
            font-size: 26px;
            color: 262626;
            letter-spacing: 1.5px;
            margin-left: 30px;
            line-height: 1.5;
        }
        #animated-h4 span {
            opacity: 0;
            display: inline-block;
            animation: fadeInUp 1s forwards;
        }
        #animated-h4 span:nth-child(0) {
            animation-delay: 3s;
        }
        #animated-h4 span:nth-child(1) {
            animation-delay: 3.2s;
        }
        #animated-h4 span:nth-child(2) {
            animation-delay: 3.4s;
        }
        #animated-h4 span:nth-child(3) {
            animation-delay: 3.6s;
        }
        #animated-h4 span:nth-child(4) {
            animation-delay: 3.8s;
        }
        #animated-h4 span:nth-child(5) {
            animation-delay: 4s;
        }
        #animated-h4 span:nth-child(6) {
            animation-delay: 4.2s;
        }
        #animated-h4 span:nth-child(7) {
            animation-delay: 4.4s;
        }
        #animated-h4 span:nth-child(8) {
            animation-delay: 4.6s;
        }
        #animated-h4 span:nth-child(9) {
            animation-delay: 4.8s;
        }
        #animated-h4 span:nth-child(10) {
            animation-delay: 5s;
        }
        #animated-h4 span:nth-child(11) {
            animation-delay: 5.2s;
        }
        #animated-h4 span:nth-child(12) {
            animation-delay: 5.4s;
        }
        #animated-h4 span:nth-child(13) {
            animation-delay: 5.6s;
        }
        #animated-h4 span:nth-child(14) {
            animation-delay: 5.8s;
        }
        #animated-h4 span:nth-child(15) {
            animation-delay: 6s;
        }
        p {
            margin-top: 30px;
            font-size: 14px;
            justify-self: flex-end;
            align-self: flex-end;
            font-family: "Libre Baskerville", serif;
            letter-spacing: 1.2px;
            line-height: 1.5;
            margin-left: 30px;
        }
        #animated-p {
            opacity: 0;
            display: inline-block;
            animation: fadeInUp 1s forwards;
            animation-delay: 6.5s;
        }
        .title {
            width: 100%;
            text-align: start;
            padding-left: 30px;
            cursor: default;
            span {
                font-size: 6vw;
                background: url(${at2}) repeat-y;
                background-size: cover;
                -webkit-background-clip: text;
                background-clip: text;
                -webkit-text-fill-color: transparent;
                -webkit-animation: aitf 80s linear infinite;
                -webkit-transform: translate3d(0, 0, 0);
                -webkit-backface-visibility: hidden;
            }
            h1 {
                font-size: 15vw;
                letter-spacing: 25px;
                position: relative;
            }
            h1::after {
                content: "LUMIC";
                font-size: 15vw;
                letter-spacing: 25px;
                position: absolute;
                top: 10px;
                left: -10px;
                color: rgba(255, 255, 255, 0.5);
                z-index: -1;
            }
        }
        .crossLine1 {
            position: absolute;
            width: 100%;
            height: 50%;
            background: black;
            z-index: 5;
        }
    }
`;
