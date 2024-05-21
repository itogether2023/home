import React, { useEffect, useState } from "react";
import styled from "styled-components";

import BestSeller from "../components/main/BestSeller";
import WatchBox from "../components/main/WatchBox";

import banner from "../asset/img/main/banner.jpg";
import intro from "../asset/img/main/intro.jpg";
import circle from "../asset/img/main/circle.jpg";

export default function Main() {
    const [select, setSelect] = useState("Luxury");
    const [scroll, setScroll] = useState(0);

    useEffect(() => {});
    const handleSelect = (item) => {
        setSelect(item);
    };
    return (
        <>
            <Section>
                <div className="banner"></div>

                <BestSeller />
                <div className="watchList">
                    <h2>Unveil the Essence of Time, Captured in Style</h2>
                    <ul className="watchCate">
                        <li
                            onClick={() => {
                                handleSelect("Luxury");
                            }}
                            className={select === "Luxury" ? "on" : ""}
                        >
                            Luxury Watches
                        </li>
                        <li
                            onClick={() => {
                                handleSelect("Sports");
                            }}
                            className={select === "Sports" ? "on" : ""}
                        >
                            Sports Watches
                        </li>
                        <li
                            onClick={() => {
                                handleSelect("Customized");
                            }}
                            className={select === "Customized" ? "on" : ""}
                        >
                            Customized Watches
                        </li>
                        <li
                            onClick={() => {
                                handleSelect("Desk");
                            }}
                            className={select === "Desk" ? "on" : ""}
                        >
                            Desk Clocks
                        </li>
                        <li
                            onClick={() => {
                                handleSelect("Wall");
                            }}
                            className={select === "Wall" ? "on" : ""}
                        >
                            Wall Clocks
                        </li>
                    </ul>
                    <WatchBox select={select} />
                </div>
                <div className="intro">
                    <div className="img">
                        <img src={intro} alt="" />
                    </div>
                    <div className="content">
                        <h4>
                            Sleek style, <br></br>
                            precise time.
                        </h4>
                        <p>
                            Time is our most precious asset.
                            <br></br> Elevate its value with our watches.
                        </p>
                        <button>BUY NOW</button>
                    </div>
                </div>
                <div className="slogan">
                    Our watches redefine timekeeping
                    <br></br> Style meets precision on your wrist
                </div>
            </Section>
        </>
    );
}

const Section = styled.div`
    overflow: hidden;
    .banner {
        height: 700px;
        background: url(${banner});
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
    }
    .intro {
        margin: 90px 0px;
        display: flex;
        gap: 50px;
        position: relative;
        left: 20%;

        .img > img {
            height: 400px;
        }
        .content h4 {
            font-size: 32px;
            margin-bottom: 40px;
        }
        .content p {
            font-size: 28px;
            margin-bottom: 30px;
        }
        .content button {
            padding: 20px 30px;
            border: 0px;
            background: #222;
            color: #aaa;
        }
    }
    .slogan {
        padding: 40px 0px;
        text-align: center;
        font-size: 32px;
        font-weight: bold;
        background: url(${circle});
        color: white;
    }
    .watchList {
        background: #222;
        padding-top: 80px;
        padding-bottom: 80px;
        margin-bottom: 100px;
        h2 {
            text-align: center;
            font-size: 34px;
            margin-bottom: 50px;
            color: white;
        }
        .watchCate {
            display: flex;
            justify-content: center;
            gap: 30px;
            margin-bottom: 30px;

            li {
                padding: 10px 20px;
                border: 1px solid #999;
                cursor: default;
                border-radius: 15px;
                transition: 0.5s all;
                color: white;
            }
            li.on {
                background: black;
                color: white;
            }
        }
    }
`;
