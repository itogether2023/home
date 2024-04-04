import React, { useEffect, useState } from "react";
import styled from "styled-components";

import BG from "assets/img/banner/bannerBG2.jpg";

export default function Banner(props) {
    return (
        <Section>
            <h2>{props.text}</h2>
        </Section>
    );
}

const Section = styled.div`
    background: url(${BG});
    padding: 120px 0px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    h2 {
        font-size: 64px;
        font-weight: bold;
        color: #fff;
        text-align: center;
        letter-spacing: 1.5px;
    }
`;
