import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Banner from "components/Banner";

import dataJson from "../data";

export default function Estimate() {
    const [data] = useState(dataJson.cateData);
    const [viewPoint, setViewPoint] = useState("페이지");
    const [focusOn, setFocusOn] = useState("페이지");
    const [calcData, setCalcData] = useState([]);
    const [cateItemList, setCateItemList] = useState(null);
    const [loading, setLoading] = useState(false);

    const [landing, setLanding] = useState(false);
    const [responsive, setResponsive] = useState(false);
    const [company, setCompany] = useState(false);
    const [shop, setShop] = useState(false);
    const [weDesign, setWeDesign] = useState(false);
    const [youDesign, setYouDesign] = useState(false);
    const [board, setBoard] = useState(false);
    const [onMap, setOnMap] = useState(false);

    useEffect(() => {
        setLoading(false);
        let arr = data.find((item) => {
            return item.cateName === viewPoint;
        });
        setCateItemList(arr);
        setLoading(true);
    }, [viewPoint]);

    const handleChangeViewPoint = (point, e) => {
        setViewPoint(point);
        setFocusOn(e.target.textContent);
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
                    <Side>
                        <h2>로고</h2>
                        <ul>
                            {data.map((cate, i) => {
                                return (
                                    <li
                                        key={i}
                                        className={
                                            focusOn === cate.cateName
                                                ? "focusOn"
                                                : ""
                                        }
                                        onClick={(e) => {
                                            handleChangeViewPoint(
                                                cate.cateName,
                                                e
                                            );
                                        }}
                                    >
                                        {cate.cateName}
                                    </li>
                                );
                            })}
                        </ul>
                    </Side>
                    <Main>
                        <ul className="menuList">
                            {loading &&
                                cateItemList.list.map((item, i) => {
                                    return (
                                        <li
                                            onClick={(e) => {
                                                handleCheckItem(e);
                                            }}
                                            id={item.value}
                                        >
                                            <p>{item.name}</p>
                                            <span>{item.price}원</span>
                                        </li>
                                    );
                                })}
                        </ul>
                    </Main>
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

const Main = styled.div`
    flex: 5;
    margin: 70px 20px 0px 20px;

    height: 400px;
    .menuList {
        display: flex;
        flex-direction: column;
        gap: 20px;
        li {
            padding: 20px 30px;
            border: 1px solid lightgrey;
            border-radius: 5px;
            /* input[type="checkbox"] {
                vertical-align: bottom;
            }
            label {
                padding-left: 10px;
                font-size: 18px;
            } */
            p {
                display: inline-block;
                padding-left: 10px;
                font-size: 18px;
            }
            span {
                float: right;
                font-size: 18px;
            }
        }
        li.select {
            background-color: gray;
            color: white;
        }
    }
`;
const Side = styled.div`
    flex: 1.5;

    h2 {
        font-size: 38px;
    }
    ul {
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        li {
            padding: 20px 0;
            font-size: 18px;
            background-color: #000;
            color: #fff;
            border: 1px solid #fff;
            text-align: center;
            cursor: default;
            transition: 0.5s all;
        }

        li.focusOn {
            background-color: rgba(0, 0, 0, 0.5);
        }
    }
    @media screen and (max-width: 800px) {
        h2 {
            text-align: center;
            margin-bottom: 20px;
        }
        ul {
            width: 80%;
            margin: 0 auto;
            flex-direction: row;
            li {
                flex: 1;
            }
        }
    }
    @media screen and (max-width: 400px) {
        ul {
            width: 90%;
            li {
                font-size: 16px;
            }
        }
    }
`;
