import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

import Header from "components/Header";
import Footer from "components/Footer";

import Main from "pages/main/Main";

import "assets/css/common.css";

function App() {
    return (
        <>
            <Header></Header>
            <Routes>
                <Route path="/" element={<Main />}></Route>
            </Routes>
            <Footer></Footer>
        </>
    );
}

export default App;
