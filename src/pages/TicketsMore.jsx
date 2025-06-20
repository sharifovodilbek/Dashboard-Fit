import React, { useContext, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Context } from '../context/Context'
import PriorityBtn from '../components/PriorityBtn'
import Button from "../components/Button"
import { EditIcon, TrashIcon } from '../assets/icons'
import SinglePageLI from "../components/SinglePageLI"
import Modal from '../components/Modal'
import toast, { Toaster } from 'react-hot-toast'

const TicketsMore = () => {
    const { ticketsList, setTicketsList } = useContext(Context)
    const { id } = useParams()
    const navigate = useNavigate()
    const singleTicket = ticketsList.find(item => item.id == id)
    const [openModal, setOpenModal] = useState(false)
    function handleDelete(){
        let deleteIndex = ticketsList.findIndex(item => item.id == singleTicket.id)
        ticketsList.splice(deleteIndex, 1)
        setTicketsList([...ticketsList])
        setOpenModal(false)
        toast.success("Successfully deleted!")
        setTimeout(() => {
            navigate(-1)
        },1000)
    }

    return (
        <div className='bg-white p-5 rounded-md'>
            <Toaster  position="top-center"  reverseOrder={false}/>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-[20px]'>
                    <img className='rounded-full w-[70px] h-[70px]' src={singleTicket?.imgURL} alt='User Img' width={70} height={70} />
                    <div>
                        <h2 className='font-bold text-[20px]'>{singleTicket?.username}</h2>
                        <span>{singleTicket?.flightDate} - {singleTicket?.flightTime}</span>
                    </div>
                </div>
                <div className='flex items-center gap-[15px]'>
                    <PriorityBtn id={singleTicket?.priorityId} />
                    <Button onClick={() => navigate(`edit`)} extrClass={'bg-yellow-600'}> <EditIcon /> </Button>
                    <Button onClick={() => setOpenModal(true)} extrClass={'bg-red-600'}> <TrashIcon /> </Button>
                </div>
            </div>
            <div className='mt-5 flex  gap-[50px]'>
                <ul className='w-[65%] p-3 space-y-4 rounded-md border-[1px] border-slate-500'>
                    <SinglePageLI label={"Comment"} value={singleTicket?.comment} />
                    <SinglePageLI label={"Created At"} value={singleTicket?.createdAt} />
                    <SinglePageLI label={"Update At"} value={singleTicket?.updatedAt ? singleTicket?.updatedAt : "-"} />
                </ul>
            </div>
            <Modal open={openModal} setOpen={setOpenModal}>
                <div className='mt-5 w-[400px] text-center'>
                    <h2 className='font-bold text-[25px] mb-5'>Are you sure to delete?</h2>
                    <div className='flex items-center justify-center gap-5'>
                        <Button onClick={() => setOpenModal(false)} extrClass={'w-[45%] bg-salte-600'}>Cancel</Button>
                        <Button onClick={handleDelete} extrClass={'w-[45%] bg-red-600'}>Delete</Button>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default TicketsMore