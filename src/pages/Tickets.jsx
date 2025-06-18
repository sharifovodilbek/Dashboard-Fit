import React from 'react'
import TicketTableTopAction from '../components/TicketTableTopAction'
import TicketTable from '../modules/TicketTable'

const Tickets = () => {
  return (
    <div className='bg-[white] rounded-[8px] py-[32px] border-[1px] border-[#DFE0EB]'>
      <div className=' px-[32px] pb-48px flex items-center justify-between'>
        <h2 className='font-bold text-[19px]'>All tickets</h2>
        <div className='flex items-center gap-[32px] '>
          <TicketTableTopAction title={'Sort'} type={'sort'} />
          <TicketTableTopAction title={'Filter'} />
          <button className='bg-[#363740] text-white font-semibold text-[12px] rounded-[20px] p-2'>Create ticket</button>
        </div>
      </div>
      <TicketTable/>
    </div>
  )
}

export default Tickets