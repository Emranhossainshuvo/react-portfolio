import { Outlet } from "react-router-dom";
import Home from "../pages/Home/Home";

const Main = () => {
    return (
        <div className="max-w-screen-xl mx-auto text-[#2A66AC]">
            <Outlet>
                <Home></Home>
            </Outlet>
        </div>
    );
};
export default Main;