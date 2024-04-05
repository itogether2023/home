import React from "react";
import styled from "styled-components";

export default function Side(props) {
    return (
        <Section>
            <h2>로고</h2>
            <ul>
                <li
                    onClick={() => {
                        props.changeView("page");
                    }}
                >
                    페이지
                </li>
                <li
                    onClick={() => {
                        props.changeView("design");
                    }}
                >
                    디자인
                </li>
                <li
                    onClick={() => {
                        props.changeView("function");
                    }}
                >
                    기능
                </li>
            </ul>
        </Section>
    );
}

const Section = styled.div`
    flex: 1;

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
        li:hover {
            background-color: rgba(0, 0, 0, 0.5);
        }
    }
`;
