import React from "react";
import styled from "styled-components";

import Banner from "components/Banner";
import PortfolioList from "components/portfolio/PortfolioList";

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
                        <PortfolioList
                            src={mamot}
                            title={"Itogether"}
                            content={"그렇다 우리는 홈페이지를 만든다 그렇다"}
                            link={"http://141.164.55.226:9000/"}
                        ></PortfolioList>
                        <PortfolioList
                            src={mamot1}
                            title={"PKD 컴퍼니"}
                            content={"그렇다 우리는 사업을 한다 그렇다"}
                            link={"http://141.164.55.226:9000/"}
                        ></PortfolioList>
                        <PortfolioList
                            src={mamot2}
                            title={"PKD 컴퍼니"}
                            content={"그렇다 이것은 홈페이지다 그렇다"}
                            link={"http://141.164.55.226:9000/"}
                        ></PortfolioList>
                        <PortfolioList
                            src={mamot3}
                            title={"PKD 컴퍼니"}
                            content={"그렇다 그런가? 그렇다"}
                            link={"http://141.164.55.226:9000/"}
                        ></PortfolioList>
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
        }
    }
`;
