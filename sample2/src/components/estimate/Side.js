import React, { useEffect, useState } from "react";
import styled from "styled-components";

export default function Side(props) {
    const [focusOn, setFocusOn] = useState("");
    const [cateList] = useState(props.data);

    useEffect(() => {
        setFocusOn(props.viewPoint);
    }, []);

    const handleChangeViewPoint = (point, e) => {
        props.handleChangeViewPoint(point);
        setFocusOn(e.target.textContent);
    };

    return (
        <Section>
            <h2>로고</h2>
            <ul>
                {cateList.map((cate, i) => {
                    return (
                        <li
                            key={i}
                            className={
                                focusOn === cate.cateName ? "focusOn" : ""
                            }
                            onClick={(e) => {
                                handleChangeViewPoint(cate.cateName, e);
                            }}
                        >
                            {cate.cateName}
                        </li>
                    );
                })}
            </ul>
        </Section>
    );
}

const Section = styled.div`
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
