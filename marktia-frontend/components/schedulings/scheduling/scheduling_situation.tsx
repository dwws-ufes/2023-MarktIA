import { Scheduling } from "@/models/scheduling";
import FormattedDate from "../../common/formattedData/formatted_date";
import ChangeSchedulingStatus from "./change_scheduling_status";

type SchedulingSituationProps = {
    scheduling: Scheduling;
    providerId: string;
}

export default function SchedulingSituation({ scheduling, providerId }: SchedulingSituationProps) {
    return (
        <div className="p-5">
            <div className="py-2"><span>Status: {scheduling.status}</span></div>
            <div className="py-2"><span>Data de Criação: <FormattedDate date={scheduling.creationDate} /></span></div>
            <div className="py-2"><span>Data de Finalização: {scheduling.completionDate ? <FormattedDate date={scheduling.completionDate} /> : ""}</span></div>

            <ChangeSchedulingStatus scheduling={scheduling} providerId={providerId} />
        </div>
    )
}