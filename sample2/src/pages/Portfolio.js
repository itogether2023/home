import React from "react";
import styled from "styled-components";

import Banner from "components/Banner";

import mamot from "../assets/img/about/mamot.png";
import mamot1 from "../assets/img/about/mamot1.png";
import mamot2 from "../assets/img/about/mamot2.png";
import mamot3 from "../assets/img/about/mamot3.png";

export default function Portfolio() {
    return (
        <>
            <Banner text="Portfolio"></Banner>
            <div className="wrap">
                <Section>
                    <h2 className="title">
                        "Création d'expériences numériques qui laissent une
                        empreinte!"
                    </h2>
                    <ul>
                        <li>
                            <div>
                                <img src={mamot} alt="" />
                            </div>
                            <h4>PKD 컴퍼니</h4>
                            <p className="cate">
                                그렇다 우리는 홈페이지를 만든다 그렇다
                            </p>

                            <div className="btn">
                                <p>견적문의</p>
                                <a
                                    href="http://141.164.55.226:9000/"
                                    target="_blank"
                                >
                                    사이트 방문
                                </a>
                            </div>
                        </li>
                        <li>
                            <div>
                                <img src={mamot1} alt="" />
                            </div>
                            <h4>PKD 컴퍼니</h4>
                            <p className="cate">
                                그렇다 우리는 홈페이지를 만든다 그렇다
                            </p>

                            <div className="btn">
                                <p>견적문의</p>
                                <a
                                    href="http://141.164.55.226:9000/"
                                    target="_blank"
                                >
                                    사이트 방문
                                </a>
                            </div>
                        </li>
                        <li>
                            <div>
                                <img src={mamot2} alt="" />
                            </div>
                            <h4>PKD 컴퍼니</h4>
                            <p className="cate">
                                그렇다 우리는 홈페이지를 만든다 그렇다
                            </p>

                            <div className="btn">
                                <p>견적문의</p>
                                <a
                                    href="http://141.164.55.226:9000/"
                                    target="_blank"
                                >
                                    사이트 방문
                                </a>
                            </div>
                        </li>
                        <li>
                            <div>
                                <img src={mamot3} alt="" />
                            </div>
                            <h4>PKD 컴퍼니</h4>
                            <p className="cate">
                                그렇다 우리는 홈페이지를 만든다 그렇다
                            </p>

                            <div className="btn">
                                <p>견적문의</p>
                                <a
                                    href="http://141.164.55.226:9000/"
                                    target="_blank"
                                >
                                    사이트 방문
                                </a>
                            </div>
                        </li>
                    </ul>
                </Section>
            </div>
        </>
    );
}

const Section = styled.div`
    margin-top: 30px;
    margin-bottom: 100px;

    .title {
        font-size: 32px;
        text-align: center;
        padding: 30px 0;
        color: #fff;
        background-color: #000;
        border-radius: 5px;
        margin-bottom: 30px;
        letter-spacing: 1px;
        cursor: default;
    }

    ul {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 40px;
        li {
            margin-bottom: 20px;
            div img {
                border: 1px solid gray;
                border-radius: 10px;
                width: 100%;
                height: 300px;
                border-radius: 10px;
                transition: 1s all;
                filter: brightness(50%);
            }
            div img:hover {
                filter: brightness(100%);
                transform: scale(1.05);
                overflow: hidden;
            }

            h4 {
                text-align: center;
                font-size: 24px;
                font-weight: bold;
                margin-top: 20px;
                margin-bottom: 10px;
            }
            .cate {
                color: gray;
                text-align: center;
                font-size: 16px;
                margin-bottom: 20px;
            }
            .btn {
                display: flex;
                justify-content: center;
                align-items: center;
                text-align: center;
                margin-top: 10px;
                gap: 20px;
                p,
                a {
                    flex: 1;
                    padding: 10px 0;
                    border: 1px solid gray;
                    border-radius: 5px;
                    cursor: default;
                    transition: 0.5s all;
                }
                p:hover,
                a:hover {
                    background-color: black;
                    color: white;
                }
            }
        }
    }
`;
