import React from "react";
import styled from "styled-components";

import Banner from "components/Banner";

export default function Contact() {
    return (
        <>
            <Banner text="Contact Us"></Banner>
            <Section className="wrap">
                <div className="title">
                    <h2>제작 문의</h2>
                </div>
                <form action="">
                    <div className="fBox">
                        <div>
                            <label htmlFor="company">회사명</label>
                            <input
                                type="text"
                                placeholder="회사명 / 담당자 이름을 적어주세요"
                                id="company"
                            />
                        </div>
                        <div>
                            <label htmlFor="work">업종</label>
                            <input
                                type="text"
                                placeholder="업종을 적어주세요"
                                id="work"
                            />
                        </div>
                    </div>
                    <div className="fBox">
                        <div>
                            <label htmlFor="tel">연락처</label>
                            <input
                                type="text"
                                placeholder="연락처를 -를 빼고 입력해주세요"
                                id="tel"
                            />
                        </div>
                        <div>
                            <label htmlFor="email">이메일</label>
                            <input
                                type="text"
                                placeholder="이메일을 적어주세요"
                                id="email"
                            />
                        </div>
                    </div>
                    <div className="TBox">
                        <p>문의사항</p>
                        <textarea
                            name=""
                            id=""
                            cols="30"
                            rows="10"
                            placeholder="문의사항을 적어주세요"
                        ></textarea>
                    </div>
                    <div>
                        <button type="submit">전송하기</button>
                    </div>
                </form>
            </Section>
        </>
    );
}

const Section = styled.div`
    .title {
        margin: 80px;
        h2 {
            font-size: 48px;
            text-align: center;
            font-weight: bold;
        }
    }
    form {
        margin: 0 auto;
        margin-bottom: 120px;
        width: 80%;
        .fBox {
            display: flex;
            margin-bottom: 20px;
            div {
                flex: 1;
                label {
                    font-size: 20px;
                    vertical-align: middle;
                    width: 20%;
                    display: inline-block;
                    font-weight: bold;
                }
                input[type="text"] {
                    vertical-align: middle;
                    border-radius: 10px;
                    padding: 5px 10px;
                    width: 60%;
                    border: 1px solid lightgrey;
                }
                input[type="text"]:focus {
                    border: 1px solid black;
                }
            }
        }
        .TBox textarea {
            width: 100%;
            height: 400px;
            padding: 5px 10px;
            border: 1px solid lightgrey;
            border-radius: 10px;
            resize: none;
        }
        .TBox textarea:focus {
            border: 1px solid black;
        }
        .TBox p {
            font-size: 20px;
            font-weight: bold;
            margin-bottom: 20px;
        }
    }
`;
