import Banner from "components/Banner";
import React from "react";
import styled from "styled-components";

export default function News() {
    return (
        <>
            <Banner text="News"></Banner>
            <Section>
                <table>
                    <thead>
                        <tr>
                            <th>글번호</th>
                            <th>제목</th>
                            <th>작성자</th>
                            <th>작성일</th>
                            <th>조회수</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>
                                [속보] 삼성, 애플 "Itogether 매우 위험한 회사로
                                성장할 것"
                            </td>
                            <td>PKD</td>
                            <td>34/01/23</td>
                            <td>124k</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>
                                [속보] Itogether 주식회사 설립! 주식시장 이대로
                                괜찮을 것인가?
                            </td>
                            <td>PKD</td>
                            <td>34/01/23</td>
                            <td>124k</td>
                        </tr>
                    </tbody>
                </table>
            </Section>
        </>
    );
}

const Section = styled.div`
    margin-top: 60px;
    margin-bottom: 100px;
    table {
        margin: 0 auto;
        border-collapse: collapse;
        width: 80%;
        th:nth-child(1) {
            width: 40px;
        }
        th:nth-child(2) {
            width: 320px;
        }
        th:nth-child(3) {
            width: 80px;
        }
        th:nth-child(4) {
            width: 80px;
        }
        th:nth-child(5) {
            width: 80px;
        }
        th {
            font-size: 18px;
            font-weight: bold;
            letter-spacing: 2px;
            padding: 20px 0px;
            border-bottom: 1px solid gray;
            color: white;
        }
        thead tr {
            background: black;
            border-radius: 15px;
        }
        td {
            border-bottom: 1px solid gray;
            padding: 20px 0px;
            text-align: center;
            vertical-align: middle;
        }

        td:nth-child(2) {
            text-align: start;
            font-size: 17px;
        }
    }
`;
