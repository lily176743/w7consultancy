import { useState } from 'react';
import { useNavigate } from "react-router-dom";

// constant
const menuItem = [
    { title: 'Cadastro', path: '/register' },
    { title: 'Leads', path: '/leads' },
    { title: 'Clientes', path: '/clients' },
]

const ItemSelectStyle = "flex items-center justify-center w-56 h-12 rounded-[50px] bg-black"
const ItemNormalStyle = "flex items-center justify-center w-56 h-12"

const SideBar = () => {
    const [state, setState] = useState<string>("register");
    const navigate = useNavigate();

    return (
        <div className="flex flex-col gap-3 items-center">
            <img src='logo512.png' className="rounded-full w-40 h-40 my-12" alt="mark" />
            {menuItem.map((item) => (
                <div key={item.title} className={state === item.title ? ItemSelectStyle : ItemNormalStyle}>
                    <div onClick={() => {navigate(`${item.path}`, { state: {data: ''} }); setState(item.title);}} className='font-mono text-2xl text-white cursor-pointer'>
                        {item.title}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SideBar;