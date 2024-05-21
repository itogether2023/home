import { Route, Routes, useNavigate } from "react-router-dom";
import styled from "styled-components";

import Main from "./pages/Main";
import About from "./pages/About";

import Header from "./components/Header";
import Footer from "./components/Footer";

import "./asset/css/common.css";
import "./asset/css/fonts.css";
import "./asset/css/ani.css";
import { useEffect, useState } from "react";

function App() {
    const [startLoading, setStartLoading] = useState(false);
    const [closeLoading, setCloseLoading] = useState(true);
    const [boxSize, setBoxSize] = useState(0);
    const navigate = useNavigate();

    const [xy, setXY] = useState({ x: 0, y: 0 });

    const xyHandler = (e, linkTarget) => {
        setStartLoading(true);
        // setTimeout(() => {
        //     const mouseX = e.clientX;
        //     const mouseY = e.clientY;
        //     setXY({ x: mouseX, y: mouseY });
        //     setBoxSize(300);
        // }, 100);
        // setTimeout(() => {
        //     navigate(linkTarget);
        //     setBoxSize(0);
        // }, 1000);
        // setTimeout(() => {
        //     setStartLoading(false);
        // }, 2000);
        setTimeout(() => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            setXY({ x: mouseX, y: mouseY });
            setBoxSize(300);

            setTimeout(() => {
                navigate(linkTarget);
                setTimeout(() => {
                    setBoxSize(0);
                    setTimeout(() => {
                        setStartLoading(false);
                    }, 1000); // 마지막 애니메이션 종료 후 1초 후에 로딩 상태를 해제합니다.
                }, 1000); // 페이지 이동 후 1초 후에 박스 크기를 다시 0으로 설정합니다.
            }, 1000); // 박스 크기가 300으로 변한 후 1초 후에 페이지를 이동합니다.
        }, 100); // 로딩 상태를 설정한 후 0.1초 후에 박스 크기를 설정합니다.
    };

    return (
        <section>
            {startLoading && (
                <PageMoveBox x={xy.x} y={xy.y} boxSize={boxSize}></PageMoveBox>
            )}

            <Header xyHandler={xyHandler} />
            <Routes>
                <Route
                    path="/"
                    element={<Main></Main>}
                    closeLoading={closeLoading}
                    setCloseLoading={setCloseLoading}
                ></Route>
                <Route path="/about" element={<About></About>}></Route>
            </Routes>

            {/* <Footer /> */}
        </section>
    );
}

const PageMoveBox = styled.div`
    position: absolute;
    width: ${(props) => props.boxSize}vw;
    height: ${(props) => props.boxSize}vw;
    background: #262626;
    border-radius: 50%;
    z-index: 10;
    top: ${(props) => props.y}px;
    left: ${(props) => props.x}px;
    transform: translate(-50%, -50%);
    transition: width 1.5s, height 1.5s;
`;

export default App;
