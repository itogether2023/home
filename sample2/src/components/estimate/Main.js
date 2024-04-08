import React, { useEffect, useState } from "react";
import styled from "styled-components";

export default function Main(props) {
    const data = props.data;
    const [cateItemList, setCateItemList] = useState(null);
    const [loading, setLoading] = useState(false);

    const [selectList, setSelectList] = useState([]);

    useEffect(() => {}, []);

    useEffect(() => {
        setLoading(false);
        for (let i = 0; i < data.length; i++) {
            if (data[i].cateName == props.viewPoint) {
                setCateItemList(data[i]);
                break;
            }
        }
        setLoading(true);
    }, [props]);

    const handleCheckItem = (e) => {
        props.handleCheckItem(e);
    };

    return (
        <Section>
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
        </Section>
    );
}

const Section = styled.div`
    flex: 5;
    margin-left: 20px;
    margin-top: 70px;
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
