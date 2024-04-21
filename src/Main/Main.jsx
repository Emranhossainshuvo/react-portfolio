import { Outlet } from "react-router-dom";
import Home from "../pages/Home/Home";

const Main = () => {
    return (
        <div>
            <Outlet>
                <Home></Home>
            </Outlet>
        </div>
    );
};
export default Main;