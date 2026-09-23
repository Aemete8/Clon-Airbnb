import { Outlet } from "react-router";
import Header from "../layout/Header";
import Footer from "../layout/Footer";


export function MainLayout() {
    return (
        <div className="app">
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}