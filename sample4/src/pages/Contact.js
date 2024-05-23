import React, { useEffect } from "react";
import styled from "styled-components";

import AOS from "aos";
import "aos/dist/aos.css";

export default function Contact() {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <Section>
            <h1 data-aos="fade" data-aos-duration="1000" data-aos-delay="1000">
                What We Make It
            </h1>
            <h4 data-aos="fade" data-aos-duration="1000" data-aos-delay="1200">
                Transforming the whispers of your dreams
            </h4>
            <p></p>
            <form
                data-aos="fade"
                data-aos-duration="1000"
                data-aos-delay="1400"
                action=""
            >
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
            </form>
        </Section>
    );
}

const Section = styled.div`
    padding-top: 200px;
    padding-bottom: 100px;
    background: black;
    color: white;
    h1 {
        font-size: 68px;
        padding-bottom: 20px;
        text-align: center;
    }
    h4 {
        font-size: 32px;
        padding-bottom: 120px;
        text-align: center;
    }
    form {
        color: white;
        margin: 0 auto;
        margin-bottom: 120px;
        width: 90%;
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
