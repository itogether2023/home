import React from "react";
import styled from "styled-components";

export default function PortfolioList(props) {
    return (
        <List>
            <div>
                <img src={props.src} />
            </div>
            <h4>{props.title}</h4>
            <p className="cate">{props.content}</p>
            <div className="btn">
                <p>견적문의</p>
                <a href={props.link} target="_blank">
                    사이트 방문
                </a>
            </div>
        </List>
    );
}

const List = styled.li`
    margin-bottom: 20px;
    /* position: relative; */
    /* z-index: 1; */
    div img {
        border: 1px solid gray;
        border-radius: 10px;
        width: 100%;
        height: 300px;
        border-radius: 10px;
        transition: 1s all;
        filter: brightness(50%);
    }
    div img:hover {
        filter: brightness(100%);
        transform: scale(1.05);
        overflow: hidden;
    }

    h4 {
        text-align: center;
        font-size: 24px;
        font-weight: bold;
        margin-top: 20px;
        margin-bottom: 10px;
    }
    .cate {
        color: gray;
        text-align: center;
        font-size: 16px;
        margin-bottom: 20px;
    }
    .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        margin-top: 10px;
        gap: 20px;
        p,
        a {
            flex: 1;
            padding: 10px 0;
            border: 1px solid gray;
            border-radius: 5px;
            cursor: default;
            transition: 0.5s all;
        }
        p:hover,
        a:hover {
            background-color: black;
            color: white;
        }
    }
`;
