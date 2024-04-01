import React from "react";
import styled from "styled-components";

export default function Header() {
    return (
        <>
            <Head>
                <div className="wrap">
                    <nav>
                        <div className="logo">로고 이미지</div>
                        <ul className="menuBox">
                            <li>회사소개</li>
                            <li>사업영역</li>
                            <li>복리후생</li>
                            <li>고객사</li>
                            <li>찾아오시는 길</li>
                            <li>커뮤니티</li>
                        </ul>
                    </nav>
                </div>
            </Head>
        </>
    );
}

const Head = styled.div`
    margin: 20px 0px;
    nav {
        display: flex;
        justify-content: space-around;
        ul {
            li {
                padding: 0px 10px;
                font-size: 16px;
                font-weight: bold;
                cursor: pointer;
            }
        }
    }
`;
