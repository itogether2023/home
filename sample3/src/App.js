import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";

import Header from "./components/Header";
import Footer from "./components/Footer";

import "./asset/css/common.css";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Main></Main>}></Route>
            </Routes>
            <Footer />
        </>
    );
}

export default App;
