import { useLocation, useNavigate } from "react-router-dom";

// const
const InputStyle = "flex justify-center font-mono rounded-[50px] text-[20px] bg-black text-white bg-opacity-30 placeholder-gray-600 px-6 py-3";

const Negotiate = () => {
    const location = useLocation();
    const leadsData = location.state.data;

    const navigate = useNavigate();
    
    const handleClose = () => {
        navigate(-1);
    }

    const handleEdit = () => {
        navigate('/register', { state: {data: leadsData} });
    }

    const handleSuccess = () => {
        navigate('/clients');
    }
    
    return (
        <div className="flex flex-col">
            <div className="flex flex-col gap-8 pt-28 px-16 text-white">
                <div className="font-bold text-[30px]">
                    Informacoes do Cliente
                </div>
                <div className="grid grid-cols-3 gap-5">
                    <div className={InputStyle}>
                        {leadsData.name}
                    </div>
                    <div className={InputStyle}>
                        {leadsData.email}
                    </div>
                    <div className={InputStyle}>
                        {leadsData.phone}
                    </div>
                </div>
                <div className="font-bold text-[30px]">
                    Informacoes do Veiculo
                </div>
                <div className="grid grid-cols-3 gap-5">
                    <div className={InputStyle}>
                        {leadsData.car}
                    </div>
                    <div className={InputStyle}>
                        {leadsData.year}
                    </div>
                    <div className={InputStyle}>
                        {leadsData.mileage}
                    </div>
                </div>
                <div className="font-bold text-[30px]">
                    Informacoes do Financiamento
                </div>
                <div className="grid grid-cols-3 gap-5">
                    <div className={InputStyle}>
                        Valor Pago: R$ {leadsData.entry + (leadsData.installment * leadsData.paid)}
                    </div>
                    <div className={InputStyle}>
                        Saldo Devedor: R$ {leadsData.installment * leadsData.times}
                    </div>
                    <div className={InputStyle}>
                        Ate R$ {leadsData.fipe * 0.25} (25% da Fipe)
                    </div>
                </div>
                <textarea className="flex font-mono rounded-[20px] text-[20px] bg-black text-white bg-opacity-30 placeholder-gray-600 px-6 py-3 h-56" />
            </div>
            <div className="flex flex-row justify-end gap-5 px-20 -mt-8">
                <button onClick={handleClose} className="w-[70px] h-[70px]"><img className="rounded-full" src="close.png" alt="close" width={70} height={70} /></button>
                <button onClick={handleEdit} className="w-[70px] h-[70px]"><img className="rounded-full" src="edit.png" alt="edit" width={70} height={70} /></button>
                <button onClick={handleSuccess} className="w-[70px] h-[70px]"><img className="rounded-full" src="success.png" alt="success" width={70} height={50} /></button>
            </div>
        </div>
    );
}

export default Negotiate;