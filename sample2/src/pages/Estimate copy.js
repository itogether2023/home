import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Banner from "components/Banner";
import Side from "../components/estimate/Side";
import Main from "../components/estimate/Main";

import dataJson from "../data";

export default function Estimate() {
    const [data] = useState(dataJson.cateData);
    const [viewPoint, setViewPoint] = useState("페이지");
    const [calcData, setCalcData] = useState([]);

    const [landing, setLanding] = useState(false);
    const [responsive, setResponsive] = useState(false);
    const [company, setCompany] = useState(false);
    const [shop, setShop] = useState(false);
    const [weDesign, setWeDesign] = useState(false);
    const [youDesign, setYouDesign] = useState(false);
    const [board, setBoard] = useState(false);
    const [onMap, setOnMap] = useState(false);

    const handleChangeViewPoint = (point) => {
        setViewPoint(point);
    };

    const handleCheckItem = (e) => {
        switch (e.target.id) {
            case "landing":
                setLanding(!landing);
                break;
            case "responsive":
                setResponsive(!responsive);
                break;
            case "company":
                setCompany(!company);
                break;
            case "shop":
                setShop(!shop);
                break;
            case "weDesign":
                setWeDesign(!weDesign);
                break;
            case "youDesign":
                setYouDesign(!youDesign);
                break;
            case "board":
                setBoard(!board);
                break;
            case "onMap":
                setOnMap(!onMap);
                break;
        }
    };

    return (
        <>
            <Banner text="Estimate"></Banner>
            <Section className="wrap">
                <Comp>
                    <Side
                        viewPoint={viewPoint}
                        data={data}
                        handleChangeViewPoint={handleChangeViewPoint}
                    />
                    <Main
                        viewPoint={viewPoint}
                        data={data}
                        handleCheckItem={handleCheckItem}
                    />
                </Comp>
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
    @media screen and (max-width: 800px) {
    }
`;
const Comp = styled.div`
    display: flex;
    margin-top: 40px;
    @media screen and (max-width: 800px) {
        flex-direction: column;
    }
`;
const Calculate = styled.div``;
