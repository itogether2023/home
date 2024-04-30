import React from "react";

import Banner from "components/Banner";
import DesignCanvas from "components/DesignCanvas";

import styled from "styled-components";

import titleBG from "assets/img/about/greet.jpg";
// import logo from "assets/img/about/mamot.png";

export default function Design() {
    return (
        <>
            <Banner text="Design"></Banner>
            <DesignCanvas></DesignCanvas>

            <Section className="wrap">

            </Section>
        </>
    );
}

const Section = styled.div`
    margin-top: 50px;
    .title {
        position: relative;
        .titleBg {
            background: url(${titleBG});
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
            height: 300px;
            filter: brightness(50%);
        }
        h3 {
            position: absolute;
            font-size: 32px;
            color: white;
            transform: translate(-50%, -50%);
            top: 50%;
            left: 50%;
            line-height: 1.4;
            z-index: 0;
        }
    }

    .description {
        margin: 60px 0px;
        display: grid;
        grid-template-columns: 160px 1fr;
        gap: 100px;
        div {
            display: flex;
            flex-direction: column;

            h3 {
                font-size: 32px;
                font-weight: bold;
                padding-bottom: 30px;
                line-height: 1.2;
            }
            p {
                padding-bottom: 20px;
                font-size: 18px;
                line-height: 1.4;
            }
        }
        img {
            width: 100%;
            height: auto;
        }
    }

    .info {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 30px;
        padding: 0px 10px;
        margin-bottom: 80px;
        li {
            padding: 30px 20px;
            background-color: rgba(0, 0, 0, 0.05);
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 5px;
            div {
                flex: 1;
                text-align: center;
                i {
                    font-size: 54px;
                    line-height: 1.5;
                }
                p {
                    font-size: 16px;
                    font-weight: bold;
                }
            }
            div:first-child {
                border-right: 1px solid #fff;
            }
            div:nth-child(2) {
                font-size: 18px;
            }
        }
    }

    @media screen and (max-width: 1200px) {
        .description {
            padding: 0 30px;
        }
    }
    @media screen and (max-width: 1000px) {
        .title h3 {
            text-align: center;
        }
        .description {
            padding: 0 30px;
            gap: 50px;
            div {
                h3 {
                    font-size: 28px;
                }
                p {
                    font-size: 16px;
                }
            }
        }
        .info {
            grid-template-columns: 1fr 1fr;
        }
    }
    @media screen and (max-width: 800px) {
        .title h3 {
            font-size: 26px;
        }
        .description {
            display: flex;
            flex-direction: column;
            img {
                width: 30%;
                display: block;
                margin: 0 auto;
            }
        }
        .info {
            li {
                div {
                    i {
                        font-size: 42px;
                    }
                }
            }
        }
    }
    @media screen and (max-width: 600px) {
        .info {
            grid-template-columns: 1fr;
            gap: 20px;

            li {
                width: 80%;
                margin: 0 auto;
                padding: 20px 10px;
                div {
                    i {
                        font-size: 36px;
                    }
                }
                div:nth-child(2) {
                    font-size: 16px;
                }
            }
        }
    }
`;
