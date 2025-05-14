import HomePage from "./pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import Nav from "./components/Nav";

export default function App() {
    return (
        <>
        <BrowserRouter>
        <Nav/>
            <Routes>
                <Route index element={<HomePage/>}/>
                <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
        </BrowserRouter>
        </>         
    )
}