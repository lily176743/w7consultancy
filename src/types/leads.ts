export interface LeadsType {
    _id?: string;
    name: string;
    email:string;
    phone: string;
    car:string;
    year: number | undefined;
    fipe: string;
    mileage: number | undefined;
    entry: number | undefined;
    installment: number | undefined;
    paid: number | undefined;
    times: number | undefined;
}

export interface LeadsProps {
    leads: LeadsType[];
    loading: boolean;
    error: string | null;
}