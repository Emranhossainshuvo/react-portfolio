import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="flex justify-between">
            <div>
                <h2>Md. Emran Hossain</h2>
            </div>
            <div className="flex justify-between gap-4">
                <NavLink to="/works"><h4>Works</h4></NavLink>
                <h4>Experience</h4>
            </div>
        </div>
    );
};

export default Navbar;