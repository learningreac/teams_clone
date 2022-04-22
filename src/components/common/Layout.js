import Header from "./header";
import Sidebar from "./sidebar";
import './layout.css';

import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div className="container">
            <Header />
            <div className="body">
                <Sidebar />
                <div className="dashbord-container">
                    <Outlet/>
                </div>
            </div>

        </div>
    )
};

export default Layout