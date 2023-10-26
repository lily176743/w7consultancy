import { useEffect } from "react";
import { RootState, dispatch, useSelector } from "../store";
import { fetchLeads } from "../store/reducers/leads";

const Leads = () => {
    const leadsProps = useSelector((state: RootState) => state.leads);

    useEffect(() => {
        dispatch(fetchLeads());
    }, []);

    let leadsData = leadsProps.leads;
    console.log(leadsData);

    return (
        <div className="flex items-center justify-center text-[50px] text-white">This is Leads Page</div>
    );
};

export default Leads;