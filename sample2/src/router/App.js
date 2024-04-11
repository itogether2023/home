import { useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

import { Provider, useSelector } from "react-redux";
import store from "store";

import Login from "pages/Login";
import Header from "components/Header";
import Footer from "components/Footer";
import Main from "pages/Main";
import AboutUs from "pages/AboutUs";
import History from "pages/History";
import Estimate from "pages/Estimate";
import Portfolio from "pages/Portfolio";
import News from "pages/News";
import NewsDetail from "components/news/NewsDetail";
import Notice from "pages/Notice";
import NoticeDetail from "components/notice/NoticeDetail";
import Contact from "pages/Contact";

import { UseSelector } from "react-redux";

import "assets/css/common.css";

function App() {
    let store = useSelector((state) => {
        return state;
    });

    return (
        <>
            {store.login.loginModalState && <Login></Login>}
            <Header></Header>
            <Routes>
                <Route path="/" element={<Main />}></Route>
                <Route
                    path="/pages/About"
                    element={<AboutUs></AboutUs>}
                ></Route>
                <Route
                    path="/pages/History"
                    element={<History></History>}
                ></Route>
                <Route
                    path="/pages/Estimate"
                    element={<Estimate></Estimate>}
                ></Route>
                <Route
                    path="/pages/Portfolio"
                    element={<Portfolio></Portfolio>}
                ></Route>
                <Route path="/pages/News" element={<News></News>}></Route>
                <Route path="/pages/NewsDetail/:id" element={<NewsDetail />} />
                <Route path="/pages/Notice" element={<Notice></Notice>}></Route>
                <Route
                    path="/pages/NoticeDetail/:id"
                    element={<NoticeDetail />}
                />
                <Route
                    path="/pages/Contact"
                    element={<Contact></Contact>}
                ></Route>
            </Routes>
            <Footer></Footer>
        </>
    );
}

export default App;
