import { useState } from 'react';
import { Link } from "react-router-dom";

// constant
const menuItem = [
    { title: 'Cadastro', path: '/register' },
    { title: 'Leads', path: '/leads' },
]

const ItemSelectStyle = "flex items-center justify-center w-56 h-12 rounded-[50px] bg-black"
const ItemNormalStyle = "flex items-center justify-center w-56 h-12"

const SideBar = () => {
    const [state, setState] = useState<string>("register");

    return (
        <div className="flex flex-col gap-3 items-center">
            <img src='logo512.png' className="rounded-full w-40 h-40 my-12" alt="mark" />
            {menuItem.map((item) => (
                <div key={item.title} className={state === item.title ? ItemSelectStyle : ItemNormalStyle}>
                    <Link
                        to={item.path}
                        key={item.title}
                        onClick={() => setState(item.title)}
                        className="font-mono text-2xl text-white"
                    >
                        {item.title}
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default SideBar;