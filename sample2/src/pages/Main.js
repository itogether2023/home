import React from "react";
import styled from "styled-components";

import bground from "assets/img/main/back.jpg";

export default function Main() {
    return (
        <Section>
            <div className="BG">
                <p className="com">ITogether</p>
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
        }
        .des {
            font-size: 38px;
            font-weight: bold;
            color: #fff;
            letter-spacing: 3px;
        }
    }
`;
