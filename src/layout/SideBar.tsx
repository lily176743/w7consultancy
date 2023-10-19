import { Link } from "react-router-dom";

// project import
import logo from "../images/mark.png";

const SideBar = () => {
    return (
        <div className="flex flex-col items-center p-12">
            <img src={logo} className="rounded-full w-40 h-40 mb-12" alt="mark" />
            <Link to='/register' className="font-mono text-xl text-white my-3">Register</Link>
            <Link to='/leads' className="font-mono text-xl text-white my-3">Leads</Link>
        </div>
    );
};

export default SideBar;