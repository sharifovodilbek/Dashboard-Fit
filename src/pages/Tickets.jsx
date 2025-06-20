import TicketTableTopAction from '../components/TicketTableTopAction'
import TicketTable from '../modules/TicketTable'
import { useNavigate } from 'react-router-dom'

const Tickets = () => {
  const navigate = useNavigate()

  return (
    <div className='bg-[white] py-[32px] rounded-[8px] border-[1px] border-[#DFE0EB]'>
      <div className='pb-[48px] px-[32px] flex items-center justify-between'>
        <h2 className='font-bold text-[19px]'>All tickets</h2>
        <div className='flex items-center gap-[32px]'>
          <TicketTableTopAction title={"Sort"} type={"sort"}/>
          <TicketTableTopAction title={"Filter"}/>
          <button onClick={() => navigate("create")} className='bg-[#363740] text-white font-semibold text-[12px] rounded-[20px] p-2'>+ Create ticket</button>
        </div>
      </div>
      <TicketTable/>
    </div>

  )
}

export default Tickets