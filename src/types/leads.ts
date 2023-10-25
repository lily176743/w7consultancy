export interface LeadsType {
    _id?: string;
    name?: string;
    email?:string;
    phone?: string;
    car?:string;
    year?: number | any;
    fipe?: string;
    mileage?: number | any;
    entry?: number | any;
    installment?: number | any;
    paid?: number | any;
    times?: number | any;
}

export interface LeadsProps {
    leads: LeadsType[];
    loading: boolean;
    error: string | null;
}