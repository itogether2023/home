import React from "react";
import styled from "styled-components";

import Maps from "./Map";

import company from "assets/img/main/company.jpg";
import mamot from "assets/img/main/mamot.png";
import mamot2 from "assets/img/main/mamot2.png";
import sec3Back from "assets/img/main/m_welfare_bg.jpg";
import sec4Back from "assets/img/main/m_partners_bg.jpg";
import footer from "components/Footer";

export default function Main() {
    return (
        <>
            <Section1>
                <div className="mainBanner">
                    <div className="tBox">
                        <h1>ITogether</h1>
                        <p>
                            IT 트렌드를 만드는 전문기업으로 고객에게
                            <br />
                            새로운 가치를 창출하는 사람 중심의 회사입니다.
                        </p>
                    </div>
                </div>
            </Section1>
            <Section2>
                <h2>사업영역</h2>
                <div className="business">
                    <div>
                        <div className="img">
                            <img src={mamot} alt="" />
                        </div>
                        <h4>사업영역1</h4>
                        <p>그렇다 우리는 사업을 한다 그렇다</p>
                    </div>
                    <div>
                        <div className="img">
                            <img src={mamot} alt="" />
                        </div>
                        <h4>사업영역2</h4>
                        <p>그렇다 우리는 사업을 한다 그렇다</p>
                    </div>
                    <div>
                        <div className="img">
                            <img src={mamot} alt="" />
                        </div>
                        <h4>사업영역3</h4>
                        <p>그렇다 우리는 사업을 한다 그렇다</p>
                    </div>
                    <div>
                        <div className="img">
                            <img src={mamot} alt="" />
                        </div>
                        <h4>사업영역4</h4>
                        <p>그렇다 우리는 사업을 한다 그렇다</p>
                    </div>
                </div>
            </Section2>
            <Section3>
                <h2>복리후생제도</h2>
                <h4>
                    Itogether는 전직원 연봉제를 바탕으로 <br />
                    임직원의 자기계발을 위한 다양한 복리후생제도를 실시하고
                    있습니다.
                </h4>
                <ul>
                    <li>해외 및 국내 여행 지원</li>
                    <li>맥북 프로 지원</li>
                    <li>개인 역량 강화 프로그램</li>
                    <li>외부 교육비 지원</li>
                    <li>워크샵 및 송년회 없음</li>
                    <li>경조사 지원</li>
                    <li>생일선물 지원</li>
                    <li>도서지원</li>
                    <li>고급 의자 구비</li>
                    <li>연 2회 방학</li>
                    <li>퇴직 연금 지원</li>
                    <li>4대보험</li>
                </ul>
            </Section3>
            <Section4>
                <h2>고객사</h2>
                <h4>
                    Itogether는 다수의 고객사와 신뢰를 바탕으로 한 동반자 관계를
                    유지하고 있습니다.
                </h4>
                <ul>
                    <li>삼성</li>
                    <li>Apple</li>
                    <li>LG</li>
                    <li>SK</li>
                    <li>기타 등등</li>
                </ul>
            </Section4>
            <Section5>
                <h2>찾아오시는 길</h2>
                {Maps("35.8039", "128.499", "map", "더나은 이비인후과")}
                <ul className="infoBox">
                    <li className="com">
                        <div>
                            <img src={mamot2} alt="" />
                        </div>
                        <p>Itogether</p>
                    </li>
                    <li className="addr">
                        <p>
                            대구특별시 강남구 죽전동 11길 <br />
                            중앙타워
                        </p>
                    </li>
                    <li className="tel">
                        <p>대표번호 : 000 - 000 - 0000</p>
                        <p>팩스번호 : 000 - 000 - 0000</p>
                        <p>이메일 : Itogether@gmail.com</p>
                    </li>
                </ul>
            </Section5>
        </>
    );
}

const Section1 = styled.div`
    .mainBanner {
        background: url(${company});
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        height: 500px;
        position: relative;
        .tBox {
            position: absolute;
            transform: translate(-50%, -50%);
            top: 50%;
            left: 30%;
            background-color: rgba(0, 0, 0, 0.7);
            color: #fff;
            display: inline-block;
            padding: 20px 30px;
            border-radius: 20px;
            h1 {
                font-size: 48px;
                font-weight: bolder;
                /* color: #fff; */
                padding: 10px 0px;
            }
            p {
                font-size: 24px;
                font-weight: bold;
                line-height: 1.5;
                padding: 10px 0px;
                /* color: #fff; */
            }
        }
        @media screen and (max-width: 800px) {
            .tBox {
                top: 50%;
                left: 50%;
                width: 75%;
                h1 {
                    font-size: 42px;
                }
                p {
                    font-size: 18px;
                }
            }
        }
        @media screen and (max-width: 600px) {
            height: 400px;
            .tBox {
                h1 {
                    font-size: 32px;
                }
                p {
                    font-size: 16px;
                }
            }
        }
    }
`;

const Section2 = styled.div`
    margin-top: 80px;
    margin-bottom: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
        font-size: 44px;
        font-weight: bold;
        margin-bottom: 80px;
    }
    .business {
        display: flex;
        gap: 50px;
        div img {
            width: 100%;
            border-radius: 10px;
        }
        h4 {
            font-size: 28px;
            font-weight: bold;
            padding: 10px 0px;
        }
        p {
            font-size: 18px;
            line-height: 1.2;
        }
    }
    @media screen and (max-width: 1200px) {
        .business {
            transition: 0.5s;
            width: 100%;
            padding: 0 20px;
            gap: 20px;
            div img {
                width: 100%;
                border-radius: 10px;
            }
            p {
                font-size: 16px;
            }
        }
    }
    @media screen and (max-width: 800px) {
        h2 {
            font-size: 36px;
        }
        .business {
            h4 {
                font-size: 20px;
            }
            p {
                font-size: 14px;
            }
        }
    }
    @media screen and (max-width: 600px) {
        margin-top: 40px;
        margin-bottom: 60px;
        h2 {
            font-size: 32px;
            margin-bottom: 60px;
        }
        .business {
            display: grid;
            grid-template-columns: 1fr 1fr;
        }

        .business div div,
        .business div h4,
        .business div p {
            margin: 0 auto;
            width: 75%;
        }
    }
`;

const Section3 = styled.div`
    background: url(${sec3Back});
    padding-top: 80px;
    padding-bottom: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
        font-size: 44px;
        font-weight: bold;
        margin-bottom: 60px;
    }
    h4 {
        text-align: center;
        font-size: 24px;
        line-height: 1.5;
    }
    ul {
        padding-top: 30px;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 10px;
        li {
            padding: 20px 30px;
            text-align: center;
            border: 1px solid black;
            border-radius: 3px;
            line-height: 1.2;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
    @media screen and (max-width: 800px) {
        h2 {
            font-size: 36px;
        }
        padding: 30px 20px;
        h4 {
            font-size: 20px;
        }
        ul li {
            padding: 20px 20px;
            font-size: 12px;
        }
    }
    @media screen and (max-width: 600px) {
        h2 {
            font-size: 32px;
            margin-bottom: 40px;
        }

        h4 {
            font-size: 16px;
        }
        ul li {
            padding: 10px 10px;
            font-size: 12px;
        }
    }
`;

const Section4 = styled.div`
    background: url(${sec4Back});
    padding-top: 80px;
    padding-bottom: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
        font-size: 44px;
        font-weight: bold;
        margin-bottom: 60px;
        color: #fff;
    }
    h4 {
        text-align: center;
        font-size: 24px;
        line-height: 1.5;
        color: #fff;
    }
    ul {
        padding-top: 30px;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 10px;
        li {
            padding: 20px 30px;
            text-align: center;
            border: 1px solid #fff;
            color: #fff;
        }
    }
    @media screen and (max-width: 800px) {
        padding: 30px 20px;
        h2 {
            font-size: 36px;
        }
        h4 {
            font-size: 18px;
        }
        ul li {
            padding: 10px 20px;
            font-size: 16px;
        }
    }
    @media screen and (max-width: 600px) {
        h2 {
            font-size: 32px;
            margin-bottom: 40px;
        }
        h4 {
            font-size: 16px;
        }
    }
`;

const Section5 = styled.div`
    padding-top: 80px;
    padding-bottom: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
        font-size: 44px;
        font-weight: bold;
        margin-bottom: 60px;
    }
    .infoBox {
        margin-top: 30px;
        display: flex;

        .com {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 10px;
            border-right: 1px solid #999;
            padding: 0px 20px;
            p {
                font-size: 28px;
            }
            div img {
                border-radius: 15px;
            }
        }
        .addr {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 10px;
            border-right: 1px solid #999;
            padding: 0px 20px;
            p {
                line-height: 1.2;
                font-size: 18px;
            }
        }
        .tel {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 10px;
            padding: 0px 20px;
            p {
                font-size: 16px;
            }
        }
    }
    @media screen and (max-width: 800px) {
        h2 {
            font-size: 36px;
        }
        .infoBox .com p {
            font-size: 20px;
        }
        .infoBox .com {
            padding: 0 5px;
            gap: 0;
        }
        .infoBox .com div img {
            width: 70%;
        }
        .infoBox .addr {
            padding: 0 5px;
        }
        .infoBox .addr p {
            font-size: 16px;
            word-break: keep-all;
        }
        .infoBox .tel {
            padding: 0 5px;
        }
    }
    @media screen and (max-width: 600px) {
        .infoBox {
            flex-direction: column;
            gap: 20px;
        }
        .infoBox .com,
        .infoBox .addr {
            border: 0px;
        }
    }
`;
