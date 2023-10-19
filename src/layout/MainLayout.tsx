import { Outlet } from "react-router-dom";

// project import
import SideBar from "./SideBar";

const MainLayout = () => {
    return (
        <div className="flex flex-row p-3 bg-black h-screen">
            <div className="basis-1/6 bg-gradient-to-t from-amber-950 from-0% via-stone-900 via-30% to-stone-600 to-90% rounded-[50px] m-3">
                <SideBar />
            </div>
            <div className="basis-5/6 bg-gradient-to-t from-amber-950 from-0% via-stone-900 via-30% to-stone-600 to-90% rounded-[50px] m-3 content-center grid">
                <Outlet />
            </div>
        </div>
    );
};

export default MainLayout;