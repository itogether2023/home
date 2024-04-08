import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

import Banner from "components/Banner";

import dataJson from "../data";

export default function Notice() {
    const [noticeList, setNoticeList] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(false);
        setNoticeList(dataJson.noticeData);
        setLoading(true);
    }, []);

    return (
        <>
            <Banner text="Notice" />
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
                        {loading &&
                            noticeList.map((notice, i) => {
                                return (
                                    <tr>
                                        <td>{notice.id}</td>
                                        <td>
                                            <Link
                                                to={{
                                                    pathname: `/pages/NoticeDetail/${notice.id}`,
                                                }}
                                            >
                                                {notice.title}
                                            </Link>
                                        </td>
                                        <td>{notice.user}</td>
                                        <td>{notice.date}</td>
                                        <td>124k</td>
                                    </tr>
                                );
                            })}
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
