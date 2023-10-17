import { Link } from "react-router-dom";

const SideBar = () => {
    return (
        <div className="flex flex-col">
            <h1>This is SideBar</h1>
            <Link to='/register'>Regiser</Link>
            <Link to='/leads'>Leads</Link>
        </div>
    );
};

export default SideBar;