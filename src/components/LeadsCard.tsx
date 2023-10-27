import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';

import IconButton from "../components/IconButton";
import { LeadsType } from '../types/leads';

export interface Props {
    leads: LeadsType;
    handleLeadsEdit: () => void;
}

const colors: Record<string, string> = {
    'Attendant 1': 'bg-blue-300',
    'Attendant 2': 'bg-orange-300',
    'Attendant 3': 'bg-yellow-300',
    'Attendant 4': 'bg-green-300',
}

const LeadsCard = ({ leads, handleLeadsEdit }: Props) => {
    return (
        <div className={"flex items-center justify-between h-52 rounded-[30px] " + colors[leads.attendant]}>
            <div className="flex flex-col gap-5 pl-16">
                <div className="text-[20px] font-semibold font-mono">{leads.name}</div>
                <div className="text-[20px] font-mono"><span className="font-semibold">Carro:</span> {leads.car}</div>
                <div className="text-[20px] font-mono"><span className="font-semibold">Oferta Max.</span> {leads.fipe}</div>
            </div>
            <div className="flex flex-col gap-5 pr-16 items-end">
                <div className="text-[30px] font-mono">{leads.attendant}</div>
                <IconButton color="primary" sx={{ ml: 'auto', '&:hover': { background: 'transparent' } }} onClick={handleLeadsEdit}>
                    <EditNoteOutlinedIcon sx={{ fontSize: 50 }} />
                </IconButton>
                <div className="text-[30px] font-mono">Entrar</div>
            </div>
        </div>
    );
}

export default LeadsCard;