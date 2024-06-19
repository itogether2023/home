import React, { useEffect, useState } from "react";
import styled from "styled-components";

import gawon from "../asset/img/port/가원2.png";
import pois from "../asset/img/port/pois.png";
import taco from "../asset/img/port/taco.png";
import lifehim from "../asset/img/port/lifehim.png";

import AOS from "aos";
import "aos/dist/aos.css";

export default function Portfolio() {
    const [scroll, setScroll] = useState(0);
    const [active, setActive] = useState([
        [100, 1, -20, 0],
        [100, 1, -20, 0],
        [100, 1, -20, 0],
        [100, 1, -20, 0],
    ]);

    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init();
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", onScroll);
    });
    useEffect(() => {
        if (scroll < 555) {
            setActive([
                [100, 1, -20, 0],
                [100, 1, -20, 0],
                [100, 1, -20, 0],
                [100, 1, -20, 0],
            ]);
        }

        if (scroll >= 555) {
            setActive([
                [0, 1.1, 0, 1],
                [100, 1, -20, 0],
                [100, 1, -20, 0],
                [100, 1, -20, 0],
            ]);
        }

        if (scroll >= 1050) {
            setActive([
                [100, 1, -20, 0],
                [0, 1.1, 0, 1],
                [100, 1, -20, 0],
                [100, 1, -20, 0],
            ]);
        }

        if (scroll >= 1650) {
            setActive([
                [100, 1, -20, 0],
                [100, 1, -20, 0],
                [0, 1.1, 0, 1],
                [100, 1, -20, 0],
            ]);
        }

        if (scroll >= 2250) {
            setActive([
                [100, 1, -20, 0],
                [100, 1, -20, 0],
                [100, 1, -20, 0],
                [0, 1.1, 0, 1],
            ]);
        }
    }, [scroll]);

    const onScroll = () => {
        setScroll(window.scrollY);
    };

    return (
        <>
            <Section>
                <div className="container">
                    <div className="title-box">
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
                    <ul className="list-box">
                        <div
                            className="scrollIcon"
                            data-aos="fade-down"
                            data-aos-offset="300"
                            data-aos-delay="1800"
                        >
                            <p>▼</p>
                            <p>▼</p>
                            <p>▼</p>
                            <span>Scroll</span>
                        </div>
                        <ListItem1
                            filter={active[0][0]}
                            scale={active[0][1]}
                            top={active[0][2]}
                            opacity={active[0][3]}
                        >
                            <img src={gawon} alt="" />
                            <p>가원 법률 사무소</p>
                        </ListItem1>
                        <ListItem2
                            filter={active[1][0]}
                            scale={active[1][1]}
                            top={active[1][2]}
                            opacity={active[1][3]}
                        >
                            <img src={pois} alt="" />
                            <p>포이스</p>
                        </ListItem2>
                        <ListItem3
                            filter={active[2][0]}
                            scale={active[2][1]}
                            top={active[2][2]}
                            opacity={active[2][3]}
                        >
                            <img src={taco} alt="" />
                            <p>타코잉닭</p>
                        </ListItem3>
                        <ListItem4
                            filter={active[3][0]}
                            scale={active[3][1]}
                            top={active[3][2]}
                            opacity={active[3][3]}
                        >
                            <img src={lifehim} alt="" />
                            <p>라이프힘</p>
                        </ListItem4>
                        <div className="list-end">
                            <h1 data-aos="fade-right" data-aos-delay="300">
                                I want you
                            </h1>
                            <p data-aos="fade-right" data-aos-delay="600">
                                please Contact Us
                            </p>
                        </div>
                    </ul>
                    <ul className="list-box-mo">
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
        height: 4000px;
        position: relative;
        padding-bottom: 100px;
        .title-box {
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
                color: gray;
            }
            h1:nth-child(3) {
                padding-left: 100px;
                color: black;
            }
        }
        .list-box {
            width: 50%;
            margin-bottom: 300px;
            margin-top: 300px;
            float: right;
            text-align: center;
            padding-right: 3%;
            .scrollIcon {
                text-align: center;
                margin-bottom: 500px;
                font-size: 32px;
                cursor: default;
                p {
                    line-height: 0.4;
                }
                p:first-child {
                    animation: arrow 1s infinite;
                    font-size: 46px;
                }
                p:nth-child(2) {
                    animation: arrow 1s 0.1s infinite;
                    font-size: 38px;
                }
                p:nth-child(3) {
                    animation: arrow 1s 0.2s infinite;
                    font-size: 32px;
                }
                span {
                    position: relative;
                    display: block;
                    padding-top: 50px;
                    font-weight: bold;
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
                img {
                    border: 2px solid black;
                    width: 80%;
                    transition: 0.5s all;
                }
            }
            .list-end {
                padding-top: 100px;
                text-align: center;
                cursor: default;
                h1 {
                    font-size: 68px;
                    line-height: 1.5;
                }
                p {
                    font-size: 32px;
                }
            }
        }
        .list-box-mo {
            display: none;
        }
    }
    @media screen and (max-width: 1400px) {
        .container .title-box h1 {
            font-size: 118px;
        }
    }
    @media screen and (max-width: 1200px) {
        .container {
            height: max-content;
        }
        .container .title-box {
            position: relative;
            float: none;
            padding-bottom: 150px;
            width: 100%;
            text-align: center;
        }
        .container .title-box h1 {
            font-size: 123px;
        }
        .container .list-box-mo {
            display: flex;
            flex-direction: column;
            padding-top: 150px;
            li {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                padding-bottom: 120px;
                img {
                    width: 60%;
                    padding-bottom: 20px;
                    border-radius: 15px;
                }
                p {
                    font-size: 28px;
                }
            }
        }
        .container .list-box {
            display: none;
        }
    }
    @media screen and (max-width: 800px) {
        .container .title-box h1 {
            font-size: 88px;
        }
        .container .title-box h1:nth-child(2) {
            padding-left: 0;
        }
        .container .title-box h1:nth-child(3) {
            padding-left: 0;
        }
        .container .list-box-mo li img {
            width: 80%;
        }
    }
    @media screen and (max-width: 400px) {
        .container .title-box {
            padding-bottom: 100px;
        }
        .container .title-box h1 {
            font-size: 68px;
        }
        .container .list-box-mo li p {
        }
    }
`;

const ListItem1 = styled.li`
    transition: 0.5s all;
    filter: grayscale(${(props) => props.filter}%);
    transform: scale(${(props) => props.scale});
    p {
        font-size: 24px;
        padding-top: 10px;
        opacity: ${(props) => props.opacity};
        transition: 1s all;
        top: ${(props) => props.top}px;
        position: relative;
    }
    @media screen and (max-width: 1400px) {
        p {
            font-size: 20px;
        }
    }
`;
const ListItem2 = styled.li`
    transition: 0.5s all;
    filter: grayscale(${(props) => props.filter}%);
    transform: scale(${(props) => props.scale});
    p {
        font-size: 24px;
        padding-top: 10px;
        opacity: ${(props) => props.opacity};
        transition: 1s all;
        top: ${(props) => props.top}px;
        position: relative;
    }
    @media screen and (max-width: 1400px) {
        p {
            font-size: 20px;
        }
    }
`;
const ListItem3 = styled.li`
    transition: 0.5s all;
    filter: grayscale(${(props) => props.filter}%);
    transform: scale(${(props) => props.scale});
    p {
        font-size: 24px;
        padding-top: 10px;
        opacity: ${(props) => props.opacity};
        transition: 1s all;
        top: ${(props) => props.top}px;
        position: relative;
    }
    @media screen and (max-width: 1400px) {
        p {
            font-size: 20px;
        }
    }
`;
const ListItem4 = styled.li`
    transition: 0.5s all;
    filter: grayscale(${(props) => props.filter}%);
    transform: scale(${(props) => props.scale});
    p {
        font-size: 24px;
        padding-top: 10px;
        opacity: ${(props) => props.opacity};
        transition: 1s all;
        top: ${(props) => props.top}px;
        position: relative;
    }
    @media screen and (max-width: 1400px) {
        p {
            font-size: 20px;
        }
    }
`;
