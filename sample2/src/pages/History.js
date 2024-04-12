import Banner from "components/Banner";
import React from "react";
import styled from "styled-components";

export default function History() {
    return (
        <>
            <Banner text="History"></Banner>
            <Section>
                <div>
                    <h3>2023</h3>
                    <ul>
                        <li>우리는 그렇다 만든다 그렇다 홈페이지</li>
                        <li>우리는 그렇다 만든다 그렇다 홈페이지</li>
                        <li>우리는 그렇다 만든다 그렇다 홈페이지</li>
                        <li>우리는 그렇다 만든다 그렇다 홈페이지</li>
                    </ul>
                </div>
                <div>
                    <h3>2024</h3>
                    <ul>
                        <li>우리는 그렇다 만든다 그렇다 홈페이지</li>
                        <li>우리는 그렇다 만든다 그렇다 홈페이지</li>
                        <li>우리는 그렇다 만든다 그렇다 홈페이지</li>
                        <li>우리는 그렇다 만든다 그렇다 홈페이지</li>
                    </ul>
                </div>
                <div>
                    <h3>2025</h3>
                    <ul>
                        <li>우리는 그렇다 만든다 그렇다 홈페이지</li>
                        <li>우리는 그렇다 만든다 그렇다 홈페이지</li>
                        <li>우리는 그렇다 만든다 그렇다 홈페이지</li>
                        <li>우리는 그렇다 만든다 그렇다 홈페이지</li>
                    </ul>
                </div>
            </Section>
        </>
    );
}

const Section = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 80px;
    margin-bottom: 80px;
    div {
        width: 50%;
        padding-bottom: 40px;
        position: relative;
    }
    div:nth-child(odd) {
        text-align: right;
        padding-right: 40px;
        border-right: 1px solid black;
        h3::after {
            content: "●";
            position: relative;
            left: 58px;
            color: lightgrey;
        }
    }
    div:nth-child(even) {
        align-self: flex-end;
        border-left: 1px solid black;
        padding-left: 40px;
        h3::before {
            content: "●";
            position: relative;
            left: -58px;
            color: lightgrey;
        }
    }
    div:first-child::after {
        content: "2023";
        font-size: 145px;
        position: absolute;
        font-weight: bold;
        color: rgba(0, 0, 0, 0.1);
        left: 15%;
        top: 50%;
    }
    h3 {
        font-size: 34px;
        position: static;
        margin-top: -15px;
        margin-bottom: 30px;
        font-weight: bold;
        opacity: 0;
    }

    ul {
        list-style: circle;
        display: flex;
        flex-direction: column;
        opacity: 0;
        li {
            font-size: 16px;
            line-height: 1.5;
        }
    }
    div:first-child ul,
    div:first-child h3 {
        animation-name: fadeIn;
        animation-duration: 1s;
        animation-fill-mode: forwards;
    }
    div:nth-child(2) ul,
    div:nth-child(2) h3 {
        animation-name: fadeIn;
        animation-delay: 1s;
        animation-duration: 1s;
        animation-fill-mode: forwards;
    }
    div:nth-child(3) ul,
    div:nth-child(3) h3 {
        animation-name: fadeIn;
        animation-delay: 2s;
        animation-duration: 1s;
        animation-fill-mode: forwards;
    }

    @keyframes fadeIn {
        0% {
            opacity: 0;
            transform: translateY(50px);
        }
        100% {
            opacity: 1;
            transform: translateY(0px);
        }
    }

    @media screen and (max-width: 600px) {
        div {
            width: 70%;
        }
        div:nth-child(even) {
            border-left: 0px;
            h3::before {
                left: -10px;
                font-size: 18px;
                top: -5px;
            }
        }
        div:nth-child(odd) {
            border-right: 0px;
            h3::after {
                left: 10px;
                font-size: 18px;
                top: -5px;
            }
        }
        div:first-child::after {
            content: "";
        }
    }
    @media screen and (max-width: 400px) {
        div {
            width: 90%;
        }
    }
`;
