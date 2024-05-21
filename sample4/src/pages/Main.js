import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import AOS from "aos";
import "aos/dist/aos.css";

import banner from "../asset/img/main/banner.jpg";
import monitor from "../asset/img/main/monitor1.jpg";
import comunication from "../asset/img/main/comunication.jpg";
import maintenance from "../asset/img/main/maintenance.jpg";
import office from "../asset/img/main/office.jpg";

export default function Main() {
    const startTarget = useRef(null);
    const [scroll, setScroll] = useState(0);
    const [opacity, setOpacity] = useState([1, 0, 0]);
    const [size, setSize] = useState(0);
    const [backOpa, setBackOpa] = useState(0);

    const onScroll = () => {
        setScroll(window.scrollY);
        console.log(scroll);
    };

    useEffect(() => {
        AOS.init();
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", onScroll);
    });

    useEffect(() => {
        if (scroll <= 2500) {
            setOpacity([-0.0033 * scroll + 8.4, 0, 0]);
        } else if (scroll > 2600 && scroll < 3600) {
            setSize(0.09 * scroll + -260);
            setBackOpa(0);
        } else if (scroll > 3400) {
            setSize(0);
            setBackOpa(1);
        }

        // console.log(opacity);
    }, [scroll]);

    return (
        <Section>
            <div className="banner">
                <h2>테스트테스트</h2>
                <p>
                    혁신으로 연결되는 미래,<br></br> 우리와 함께 이뤄나갑시다.
                </p>
            </div>
            <ScrollBox ref={startTarget}>
                <TitleBox opacity={opacity[0]}>
                    <h2>상상을 현실로, Lumic이 이끕니다.</h2>
                    <p>
                        꿈과 현실이 서로 얽혀 더 큰 세계를 향해 나아가는
                        과정에서,
                        <br></br> Lumic는 마치 마법같은 도구가 되어 우리의
                        상상을 현실로 만들어냅니다.
                    </p>
                </TitleBox>
                <div
                    className="contentBox"
                    data-aos="fade-up"
                    data-aos-offset="400"
                >
                    <div className="content">
                        <img src={monitor} alt="" />
                        <h4>더 나은 기술을 추구합니다</h4>
                        <p>
                            "우리는 기술의 힘으로 혁신을 이끌며,<br></br> 고객의
                            비즈니스를 더 나은 미래로 이끕니다."
                        </p>
                    </div>
                    <div
                        className="content"
                        data-aos="fade-up"
                        data-aos-offset="400"
                    >
                        <img src={comunication} alt="" />
                        <h4>고객과 함께하는 혁신적인 기술 서비스</h4>
                        <p>
                            "고객과의 소통은 우리의 핵심 가치입니다.<br></br>{" "}
                            고객의 의견을 경청하고, 긴밀히 협력하여 최고의
                            솔루션을 제공합니다."
                        </p>
                    </div>
                    <div
                        className="content"
                        data-aos="fade-up"
                        data-aos-offset="400"
                    >
                        <img src={maintenance} alt="" />
                        <h4>끝까지 책임지는 서비스</h4>
                        <p>
                            "프로젝트 완료 후에도 사후 보수를 보장하여, 고객의
                            만족도를 높이고 지속적인 관계를 유지합니다."
                        </p>
                    </div>
                </div>
            </ScrollBox>
            <CrossText>Turning dreams into reality</CrossText>
            <CrossText>Turning dreams into reality</CrossText>
        </Section>
    );
}

const Section = styled.div`
    margin-top: 69px;
    .banner {
        width: 100%;
        height: 100vh;
        background: url(${banner});
        background-position: center;
        background-size: cover;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 15%;
        margin-bottom: 80px;
        h2 {
            font-size: 40px;
            color: #70766e;
            padding-bottom: 20px;
        }
        p {
            padding-bottom: 5px;
        }
    }
`;

const CrossText = styled.h2``;

const ScrollBox = styled.div`
    height: 2000px;
    margin: 0px 70px;
    margin-bottom: 120px;
    .contentBox {
        width: 50%;
        top: 50px;
        float: right;
        text-align: center;
        img {
            width: 300px;
            border-radius: 15px;
        }
        h4 {
            font-size: 24px;
            padding: 15px 0px;
        }
        p {
            font-size: 18px;
            line-height: 1.5;
        }
        .content {
            margin-bottom: 250px;
        }
    }
`;

const TitleBox = styled.div`
    width: 50%;
    position: sticky;
    top: 25%;
    opacity: ${(props) => props.opacity};
    h2 {
        font-size: 32px;
        padding-bottom: 30px;
    }

    p {
        font-size: 18px;
        line-height: 1.5;
    }
`;
