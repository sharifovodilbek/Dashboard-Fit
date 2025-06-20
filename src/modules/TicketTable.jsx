import { useContext } from "react"
import { Context } from "../context/Context"
import TicketItem from "../components/TicketItem"
const TicketTable = () => {
      const {searchRes} = useContext(Context)
    return (
        <table className='w-full'>
            <thead>
                <tr className='text-[14px] font-bold text-[#9FA2B4]'>
                    <th className='text-start pb-[11px] border-b-[1.5px] border-[#DFE0EB] pl-[32px]'>Ticket details</th>
                    <th className='text-start pb-[11px] border-b-[1.5px] border-[#DFE0EB]'>Customer name</th>
                    <th className='text-start pb-[11px] border-b-[1.5px] border-[#DFE0EB]'>Date</th>
                    <th className='text-start pb-[11px] border-b-[1.5px] border-[#DFE0EB] pr-[32px]'>Priority</th>
                </tr>
            </thead>
            <tbody>
                {searchRes.map(item => <TicketItem key={item.id} item={item}/>)}
            </tbody>
        </table>
    )
}

export default TicketTable