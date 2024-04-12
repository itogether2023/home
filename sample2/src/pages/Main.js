import React from "react";
import styled from "styled-components";

import bground from "assets/img/main/back.jpg";

export default function Main() {
    return (
        <Section>
            <div className="BG">
                <p className="com">ITgether</p>
                <p className="des">
                    IT With You <br />
                    We are together <br />
                    Ok, bye
                </p>
            </div>
        </Section>
    );
}

const Section = styled.div`
    height: 100vh;
    background: url(${bground});
    display: flex;
    align-items: center;
    div {
        padding: 0px 50px;
        display: flex;
        gap: 40px;
        .com {
            font-size: 96px;
            color: #fff;
            padding: 20px;
            background: rgba(0, 0, 0, 0.5);
            border-radius: 20px;
            font-weight: bold;
            animation: fadeIn;
            animation-duration: 1s;
        }
        .des {
            font-size: 38px;
            font-weight: bold;
            color: #fff;
            letter-spacing: 3px;
            opacity: 0;
            animation: fadeIn 1s 1s forwards;
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
    }
    @media screen and (max-width: 1000px) {
        align-items: flex-start;
        .BG {
            margin: 150px auto;
            flex-direction: column;
        }
    }
    @media screen and (max-width: 1000px) {
        .BG {
            .com {
                font-size: 64px;
            }
            .des {
                font-size: 28px;
            }
        }
    }
    @media screen and (max-width: 400px) {
        .BG {
            padding: 0px;
            .com {
                font-size: 54px;
            }
            .des {
                font-size: 20px;
            }
        }
    }
`;
