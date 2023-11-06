export interface LeadsType {
    _id?: string;
    name?: string;
    email?:string;
    phone?: string;
    car?:string;
    year?: number | any;
    fipe?: number | any;
    mileage?: number | any;
    entry?: number | any;
    installment?: number | any;
    paid?: number | any;
    times?: number | any;
    attendant: string;
}

export interface LeadsProps {
    leads: LeadsType[];
    loading: boolean;
    error: string | null;
}