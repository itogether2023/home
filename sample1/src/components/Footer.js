import React from "react";
import styled from "styled-components";

export default function footer() {
    return (
        <>
            <Footer>
                <p>(주)Itogether</p>
                <p>대표 : 박경도</p>
                <p>Copyright 2023. (주)Itogether. All rights reserved.</p>
            </Footer>
        </>
    );
}

const Footer = styled.div`
    background-color: #888;
    padding: 50px 50px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;
