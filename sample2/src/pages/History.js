import Banner from "components/Banner";
import React from "react";
import styled from "styled-components";

export default function History() {
    return (
        <>
            <Banner text="History"></Banner>
            <Section>
                <div>
                    <h3>2023</h3>
                    <ul>
                        <li>
                            5cm 길이로 잘라 낸 소갈비는 기름을 떼어내고 찬물에
                            담가 핏물을 뺀 다음 폭 2cm 정도의 간격으로 칼집을
                            넣는다.
                        </li>
                        <li>
                            갈비에 물 800g(4cup)을 부어 삶아 건져내고 갈비 삶은
                            육수는 기름을 걷어낸다.
                        </li>
                        <li>
                            무와 당근은 가로 3cm, 세로 3cm, 두께 2cm 정도로 썰어
                            가장자리를 다듬는다.
                        </li>
                        <li>
                            표고버섯은 1시간 정도 따듯한 물에 물려서 기둥을 떼고
                            반으로 가른다.
                        </li>
                    </ul>
                </div>
                <div>
                    <h3>2024</h3>
                    <ul>
                        <li>
                            밤은 속껍질까지 벗기고 대추는 깨끗이 씻어 씨를 빼고
                            은행은 기름에 살짝 볶아 속껍질을 벗긴다.
                        </li>
                        <li>
                            달걀은 황백지단을 부쳐 길이 2cm 정도로 마름모꼴로
                            썬다.
                        </li>
                        <li>각각의 재료를 섞어 양념장을 만든다.</li>
                        <li>
                            냄비에 갈비, 무, 당근, 표고버섯, 밤과 양념장 1/2을
                            넣고 30분 정도 재웠다가 육수 500g(2 1/2cup) 정도를
                            붓고 중불에서 끓인다.
                        </li>
                    </ul>
                </div>
                <div>
                    <h3>2025</h3>
                    <ul>
                        <li>
                            국물이 반으로 줄어들면 대추와 은행을 넣고 나머지
                            양념장을 넣어 위아래로 섞어 골고루 간이 들도록 하고
                            국물을 끼얹어 윤기를 낸다.
                        </li>
                        <li>
                            국물이 자작해지면 그릇에 찜을 담고 위에 지단 썬 것과
                            잣을 뿌려낸다.
                        </li>
                        <li>
                            ※ 기호에 따라, 남은 양념장 소스에 녹말을 풀거나
                            걸죽하게 졸여 갈비찜에 뿌려 나가도 좋다.
                        </li>
                    </ul>
                </div>
            </Section>
        </>
    );
}

const Section = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 80px;
    margin-bottom: 80px;
    div {
        width: 50%;
        padding-bottom: 40px;
        position: relative;
    }
    div:nth-child(odd) {
        text-align: right;
        padding-right: 40px;
        border-right: 1px solid black;
        h3::after {
            content: "●";
            position: relative;
            left: 58px;
            color: lightgrey;
        }
    }
    div:nth-child(even) {
        align-self: flex-end;
        border-left: 1px solid black;
        padding-left: 40px;
        h3::before {
            content: "●";
            position: relative;
            left: -58px;
            color: lightgrey;
        }
    }
    div:first-child::after {
        content: "2023";
        font-size: 145px;
        position: absolute;
        font-weight: bold;
        color: rgba(0, 0, 0, 0.1);
        left: 15%;
        top: 50%;
    }
    h3 {
        font-size: 34px;
        position: static;
        margin-top: -15px;
        margin-bottom: 30px;
        font-weight: bold;
    }

    ul {
        list-style: circle;
        li {
            font-size: 16px;
            line-height: 1.5;
        }
    }
`;
