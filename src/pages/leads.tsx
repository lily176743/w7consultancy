import { useEffect } from "react";

import { RootState, dispatch, useSelector } from "../store";
import { fetchLeads } from "../store/reducers/leads";
import LeadsCard from "../components/LeadsCard";

const Leads = () => {
    const leadsProps = useSelector((state: RootState) => state.leads);

    useEffect(() => {
        dispatch(fetchLeads());
    }, []);

    let leadsData = leadsProps.leads;

    return (
        <div className="flex flex-col gap-5 px-10 py-10">
            <div className="flex items-center justify-center h-36 text-white font-semibold text-3xl">Leads</div>
            {leadsData.map((data) => (
                <LeadsCard key={data._id} leads={data} />
            ))}
        </div>
    );
};

export default Leads;