import React from "react";

import Banner from "components/Banner";

import Mamot from "assets/img/about/mamot.png";
import styled from "styled-components";

import titleBG from "assets/img/about/greet.jpg";
import logo from "assets/img/about/mamot.png";

export default function AboutUs() {
    return (
        <>
            <Banner text="About"></Banner>

            <Section className="wrap">
                <div className="title">
                    <div className="titleBg"></div>
                    <h3>"A Solution provider leading the It Company"</h3>
                </div>
                <div className="description">
                    <img src={Mamot} alt="" className="logo" />
                    <div>
                        <h3>"빛나는 코드의 비밀, 미래를 열어가는 혁신의 장"</h3>
                        <p>
                            한 IT 기업에서 일하는 주인공, 프로그래머인 PKD는
                            항상 혁신적인 아이디어로 회사의 발전을 이끌고자
                            노력하지만, 어느 날 갑자기 운명의 여정을 시작하게
                            된다. 어느 날, 회사 내부에서 새로운 프로젝트를 위한
                            AI 기술을 개발하는 과정에서, PKD의 작업실에 갑자기
                            게임을 할 수 있는 기능이 담긴 비밀스러운 코드가
                            발견된다.
                        </p>
                        <p>
                            PKD는 이것을 이용하여 자신이 개발한 알고리즘을
                            사용하여 회사의 서버에 장난을 치며 재미있는 게임을
                            만들어본다. 하지만 예상치 못한 문제로 인해 회사 내부
                            시스템이 마비되고, 엉뚱한 사건들이 벌어지기
                            시작한다. 게임을 통해 미래의 기술을 경험하던 중,
                            PKD는 미래에서는 사람들이 보다 혁신적인 기술을 통해
                            놀며 즐기는 것을 발견한다.
                        </p>
                        <p>
                            PKD는 이를 통해 회사가 새로운 방향을 모색하기 위해
                            혁신적인 기술을 더욱 활용할 수 있다는 것을 깨닫고,
                            게임을 통해 회사의 미래를 개척하기 시작한다. 이렇게
                            PKD는 우연히 발견한 코드를 통해 회사의 미래를
                            엿보고, 그것을 통해 새로운 아이디어를 제시하며
                            회사의 발전을 이끄는데...
                        </p>
                        <p>라는 내용의 소설 추천 좀</p>
                    </div>
                </div>

                <ul className="info">
                    <li>
                        <div>
                            <i class="fa-solid fa-building"></i>
                            <p>기업명</p>
                        </div>
                        <div>Itogether</div>
                    </li>
                    <li>
                        <div>
                            <i class="fa-solid fa-user"></i>
                            <p>사장</p>
                        </div>
                        <div>PKD</div>
                    </li>
                    <li>
                        <div>
                            <i class="fa-solid fa-clock"></i>
                            <p>사업개시일</p>
                        </div>
                        <div>2023년 언제더라?</div>
                    </li>
                    <li>
                        <div>
                            <i class="fa-solid fa-briefcase"></i>
                            <p>업종</p>
                        </div>
                        <div>IT개발</div>
                    </li>

                    <li>
                        <div>
                            <i class="fa-solid fa-location-dot"></i>
                            <p>본사 소재</p>
                        </div>
                        <div>대구 어딘가</div>
                    </li>
                    <li>
                        <div>
                            <i class="fa-solid fa-gear"></i>
                            <p>제품 및 서비스</p>
                        </div>
                        <div>뭘까 이건</div>
                    </li>
                </ul>
            </Section>
        </>
    );
}

const Section = styled.div`
    margin-top: 50px;
    .title {
        position: relative;
        .titleBg {
            background: url(${titleBG});
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
            height: 300px;
            filter: brightness(50%);
        }

        h3 {
            position: absolute;
            font-size: 32px;
            color: white;
            transform: translate(-50%, -50%);
            top: 50%;
            left: 50%;
        }
    }

    .description {
        margin: 60px 0px;
        display: grid;
        grid-template-columns: 160px 1fr;
        gap: 100px;
        div {
            display: flex;
            flex-direction: column;

            h3 {
                font-size: 32px;
                font-weight: bold;
                padding-bottom: 30px;
            }
            p {
                padding-bottom: 20px;
                font-size: 18px;
                line-height: 1.4;
            }
        }
        img {
            width: 100%;
            height: auto;
        }
    }

    .info {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 30px;
        padding: 0px 10px;
        margin-bottom: 80px;
        li {
            padding: 30px 20px;
            background-color: rgba(0, 0, 0, 0.05);
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 5px;
            div {
                flex: 1;
                text-align: center;
                i {
                    font-size: 54px;
                    line-height: 1.5;
                }
                p {
                    font-size: 16px;
                    font-weight: bold;
                }
            }
            div:first-child {
                border-right: 1px solid #fff;
            }
            div:nth-child(2) {
                font-size: 18px;
            }
        }
    }
`;
