import React from "react";
import styled from "styled-components";

import eData from "../../eData";

export default function Main(props) {
    // const { ladingPage, responsive, company, shop } = props.checkBoxData;

    const test = props.checkBoxData;
    console.log(test);

    return (
        <Section>
            {props.page == "page" && (
                <ul className="menuList">
                    {eData.page.map((item) => {
                        return (
                            <li>
                                <input
                                    type="checkbox"
                                    id={item.id}
                                    name={test[item.id]}
                                    checked={test[item.id]}
                                    onChange={props.changeCheck}
                                />
                                <label htmlFor={item.id}>{item.name}</label>
                                <span>{item.price}</span>
                            </li>
                        );
                    })}
                </ul>
            )}
            {props.page == "design" && (
                <ul className="menuList">
                    {eData.design.map((item) => {
                        return (
                            <li>
                                <input type="checkbox" id={item.id} />
                                <label htmlFor={item.id}>{item.name}</label>
                                <span>{item.price}</span>
                            </li>
                        );
                    })}
                </ul>
            )}
            {props.page == "function" && (
                <ul className="menuList">
                    {eData.function.map((item) => {
                        return (
                            <li>
                                <input type="checkbox" id={item.id} />
                                <label htmlFor={item.id}>{item.name}</label>
                                <span>{item.price}</span>
                            </li>
                        );
                    })}
                </ul>
            )}
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
            input[type="checkbox"] {
                vertical-align: bottom;
            }
            label {
                padding-left: 10px;
                font-size: 18px;
            }
            span {
                float: right;
                font-size: 18px;
            }
        }
    }
`;
