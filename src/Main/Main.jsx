import { Outlet } from "react-router-dom";
import Home from "../pages/Home/Home";

const Main = () => {
    return (
        <div className="max-w-screen-lg mx-auto">
            <Outlet>
                <Home></Home>
            </Outlet>
        </div>
    );
};
export default Main;