import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

import Header from "components/Header";
import Footer from "components/Footer";

import Main from "pages/Main";
import AboutUs from "pages/AboutUs";
import History from "pages/History";
import Team from "pages/Team";
import Funds from "pages/Funds";
import Portfolio from "pages/Portfolio";
import News from "pages/News";
import Notice from "pages/Notice";
import Contact from "pages/Contact";

import "assets/css/common.css";

function App() {
    return (
        <>
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

                <Route path="/pages/Team" element={<Team></Team>}></Route>
                <Route path="/pages/Funds" element={<Funds></Funds>}></Route>
                <Route
                    path="/pages/Portfolio"
                    element={<Portfolio></Portfolio>}
                ></Route>
                <Route path="/pages/News" element={<News></News>}></Route>
                <Route path="/pages/Notice" element={<Notice></Notice>}></Route>
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
