import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { loginCheck } from "store/loginSlice";
import { toggleModal } from "store/loginSlice";

export default function Login() {
    const [userId, setUserId] = useState("");
    const [userPw, setUserPw] = useState("");

    let dispatch = useDispatch();

    const handleChangeInput = (e) => {
        switch (e.target.id) {
            case "id":
                setUserId(e.target.value);
                break;
            case "password":
                setUserPw(e.target.value);
                break;
        }
    };

    return (
        <>
            <Section>
                <div className="box">
                    <p
                        className="close"
                        onClick={() => {
                            dispatch(toggleModal());
                        }}
                    >
                        X
                    </p>
                    <div>
                        <input
                            id="id"
                            type="text"
                            onChange={(e) => {
                                handleChangeInput(e);
                            }}
                            value={userId}
                        />
                    </div>
                    <div>
                        <input
                            id="password"
                            type="password"
                            onChange={(e) => {
                                handleChangeInput(e);
                            }}
                            value={userPw}
                        />
                    </div>
                    <button
                        onClick={() => {
                            dispatch(loginCheck({ id: userId, pw: userPw }));
                        }}
                    >
                        로그인
                    </button>
                </div>
            </Section>
        </>
    );
}

const Section = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
    .box {
        position: absolute;
        width: 300px;
        height: 200px;
        background: white;
        border-radius: 20px;
        transform: translate(-50%, -50%);
        top: 50%;
        left: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
        .close {
            position: absolute;
            top: 0;
            right: 15px;
            font-size: 24px;
            font-weight: bold;
            color: grey;
            cursor: pointer;
        }
        input {
            border: 1px solid lightgray;
            padding: 5px 10px;
            border-radius: 5px;
        }
        input:focus {
            border: 1px solid black;
        }
        button {
            font-size: 16px;
        }
    }
`;
