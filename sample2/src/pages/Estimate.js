import React, { useState } from "react";
import styled from "styled-components";

import Banner from "components/Banner";
import Side from "../components/estimate/Side";
import Main from "../components/estimate/Main";

export default function Estimate() {
    const [view, setView] = useState("page");

    const [ladingPage, setLadingPage] = useState(false);
    const [responsive, setResponsive] = useState(false);
    const [company, setCompany] = useState(false);
    const [shop, setShop] = useState(false);

    const checkBoxData = {
        ladingPage,
        responsive,
        company,
        shop,
    };

    const changeView = (chView) => {
        setView(chView);
    };

    const changeCheck = (e) => {
        setLadingPage((ladingPage) => !ladingPage);
        console.log(e.target.name);
    };

    return (
        <>
            <Banner text="Estimate"></Banner>

            <Section className="wrap">
                <div className="title">
                    <h2>원하는 기능을 넣어 예상 견적을 짜보세요</h2>
                </div>
                <Comp>
                    <Side page={view} changeView={changeView}></Side>
                    <Main
                        page={view}
                        changeCheck={changeCheck}
                        checkBoxData={checkBoxData}
                    ></Main>
                </Comp>
                <Calculate>
                    <ul></ul>
                    <div className="total">총 견적</div>
                </Calculate>
            </Section>
        </>
    );
}

const Section = styled.div`
    margin-top: 20px;
    margin-bottom: 80px;
    .title {
        font-size: 32px;
        text-align: center;
        padding: 30px 0;
        color: #fff;
        background-color: #000;
        border-radius: 5px;
    }
`;
const Comp = styled.div`
    display: flex;
    margin-top: 40px;
`;
const Calculate = styled.div``;
