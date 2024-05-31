import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

import Main from "./pages/Main";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio2";

import Header from "./components/Header";
import Footer from "./components/Footer";

import "./asset/css/common.css";
import "./asset/css/fonts.css";
import "./asset/css/ani.css";
import { useEffect, useState } from "react";

function App() {
    const location = useLocation();
    const [startLoading, setStartLoading] = useState(false);
    const [closeLoading, setCloseLoading] = useState(true);
    const [boxSize, setBoxSize] = useState(0);
    const [page, setPage] = useState("");

    const navigate = useNavigate();

    const [xy, setXY] = useState({ x: 0, y: 0 });

    useEffect(() => {
        setPage(location.pathname.substring(1).toUpperCase());
        console.log(page);
    }, [location]);

    const xyHandler = (e, linkTarget) => {
        setStartLoading(true);
        navigate(linkTarget);
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
                <Route
                    path="/portfolio"
                    element={<Portfolio></Portfolio>}
                ></Route>
                <Route path="/contact" element={<Contact></Contact>}></Route>
            </Routes>
            {page !== "" && <Footer />}
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
