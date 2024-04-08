import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import Banner from "components/Banner";

import dataJson from "../../data";

export default function NewsDetail() {
    const [loading, setLoading] = useState(false);
    let { id } = useParams();
    const [detail, setDetail] = useState();

    useEffect(() => {
        setLoading(false);
        let pageId = Number(id) - 1;
        setDetail(dataJson.noticeData[pageId]);
        setLoading(true);
    }, []);
    return (
        <>
            <Banner text="Notice"></Banner>

            {loading && (
                <Content className="wrap">
                    <li>
                        <h2>{detail.title}</h2>
                    </li>
                    <li>
                        <h4>작성자 {detail.user} </h4>
                    </li>
                    <li>
                        <img src={detail.img} />
                        <p>{detail.content}</p>
                    </li>
                </Content>
            )}
        </>
    );
}

const Content = styled.ul`
    margin: 120px auto;
    display: flex;
    flex-direction: column;
    border: 1px solid gray;
    border-radius: 10px;
    padding: 40px 20px;
    li {
        padding: 10px 20px;
    }
    li h2 {
        font-size: 32px;
        font-weight: bold;
        margin-bottom: 10px;
        padding-bottom: 30px;
        border-bottom: 1px solid black;
    }
    li h4 {
        font-size: 20px;
        font-weight: bold;
    }
    li img {
        margin-bottom: 20px;
    }
    li p {
        font-size: 16px;
        line-height: 1.4;
        letter-spacing: 0.8px;
    }
`;
