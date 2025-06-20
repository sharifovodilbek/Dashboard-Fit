import { useContext, useEffect, useState } from "react"
import Avatar from "../assets/images/avatar.svg"
import { Context } from "../context/Context"
import Button from "../components/Button"
import Loading from "../hooks/Loading"
import { useNavigate, useParams } from "react-router-dom"
import toast, { Toaster } from "react-hot-toast"

const TicketCreate = () => {
  let date = new Date()
  const {id:editId} = useParams()
  const navigate = useNavigate()
  let dateTime = `${date.getDate().toString().padStart(2, 0)}.${(date.getMonth() + 1).toString().padStart(2, 0)}.${date.getFullYear()}`
  const { ticketsList, setTicketsList } = useContext(Context)
  const [isLoading, setIsLoading] = useState(false)
  const id = ticketsList[ticketsList.length - 1]?.id ? ticketsList[ticketsList.length - 1]?.id + 1 : 1
  const [imgURL, setImgURL] = useState("")
  const [comment, setComment] = useState("")
  const [updatedAt, setUpdatedAt] = useState("")
  const [username, setUsername] = useState("")
  const [createdAt, setCreatedAt] = useState(dateTime)
  const [flightDate, setFlightDate] = useState("")
  const [flightTime, setFlightTime] = useState("")
  const [priorityId, setPriorityId] = useState("")

  function handleCreateTicket(e) {
    e.preventDefault()
    if(editId){
      setIsLoading(true)
      const editIndex = ticketsList.findIndex(item => item.id == editId)
      const editDate = ticketsList.find(item => item.id == editId)
      const data = {id:editId,imgURL, comment, updatedAt:createdAt, username, createdAt:editDate.createdAt, flightDate, flightTime, priorityId }
      ticketsList.splice(editIndex, 1, data)
      setTicketsList([...ticketsList])
      toast.success("Updated...")
      setTimeout(() => navigate(-1), 1000)
    }
    else{
      setIsLoading(true)
      const data = { id, imgURL, comment, updatedAt, username, createdAt, flightDate, flightTime, priorityId }
      setTicketsList([...ticketsList, data])
      toast.success("Created...")
      setTimeout(() => navigate(-1), 1000)
    }
  }

  const updateData = ticketsList.find(item => item.id == editId)
  useEffect(() => {
    if(editId){
      setComment(updateData.comment)
      setUsername(updateData.username)
      setFlightDate(updateData.flightDate)
      setFlightTime(updateData.flightTime)
      setPriorityId(updateData.priorityId)
      setImgURL(updateData.imgURL)
    }
  },[])


  return (
    <div className="bg-white p-5 rounded-md">
      <Toaster  position="top-center"  reverseOrder={false}/>
      <h2 className="font-bold text-[25px] ">Create Tickets</h2>
      <form autoComplete="off" onSubmit={handleCreateTicket} >
        <div className="mt-5 flex justify-between">
          <div className="w-[48%] space-y-3">
            <label className="flex flex-col gap-1">
              <span className="pl-1">Enter comment</span>
              <input value={comment} onChange={(e) => setComment(e.target.value)} className="w-fill py-2 pl-3 rounded-md outline-none border-[1px] border-slate-300" type="text" placeholder="Enter comment" name="comment" />
            </label>
            <label className="flex flex-col gap-1">
              <span className="pl-1">Enter username</span>
              <input value={username} onChange={(e) => setUsername(e.target.value)} className="w-fill py-2 pl-3 rounded-md outline-none border-[1px] border-slate-300" type="text" placeholder="Enter username" name="username" />
            </label>
            <label className="flex flex-col gap-1">
              <span className="pl-1">Flight Date</span>
              <input value={flightDate} onChange={(e) => setFlightDate(e.target.value)} className="w-fill py-2 pl-3 rounded-md outline-none border-[1px] border-slate-300" type="date" placeholder="Enter date" name="flightDate" />
            </label>
          </div>
          <div className="w-[48%] space-y-3">
            <label className="flex flex-col gap-1">
              <span className="pl-1">Choose time</span>
              <input value={flightTime} onChange={(e) => setFlightTime(e.target.value)} className="w-fill py-2 pl-3 rounded-md outline-none border-[1px] border-slate-300" type="time" placeholder="Enter date" name="flightDate" />
            </label>
            <label className="flex flex-col gap-1">
              <span className="pl-1">Choose priority</span>
              <select value={priorityId} onChange={(e) => setPriorityId(e.target.value)} className="w-fill py-2 pl-3 rounded-md outline-none border-[1px] border-slate-300" name="flightDate">
                <option value="0">High</option>
                <option value="1">Low</option>
                <option value="2">Normal</option>
              </select>
            </label>
            <label>
              <input onChange={(e) => setImgURL(URL.createObjectURL(e.target.files[0]))} className="hidden" type="file" />
              <div className="w-[100px] relative h-[100px] rounded-full border-[1.5px] border-dashed">
                <img className="rounded-full absolute w-full h-full" src={imgURL != "" ? imgURL : Avatar} alt="Avatar img" />
              </div>
            </label>
          </div>
        </div>
        <Button extrClass={'w-[200px] mx-auto block text-[18px] mt-5'} type={"submit"}>
          {isLoading ? <Loading extrClass={'mx-auto'} /> : (editId ? "Update":"Create")}
        </Button>
      </form>
    </div>
  )
}

export default TicketCreate