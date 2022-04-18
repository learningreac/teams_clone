import Header from "../common/header";
import Sidebar from "../common/sidebar";
import LeftFold from "./left-fold/index";
import RightFold from "./right-fold";

const Calls = () => {
    return (
        <div>
            <Header />
            <div>
                <div>
                    <Sidebar />
                </div>
                <div>
                    <LeftFold />
                </div>
                <div>
                    <RightFold />
                </div>
            </div>
            
        </div>
    )
};

export default Calls;