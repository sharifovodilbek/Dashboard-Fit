import { useContext, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { navList } from '../hooks/paths';
import { ArrowBack, LupaIcon, NotificationIcon } from '../assets/icons';
import AvatarIcon from "../assets/images/avatar.svg"
import { Context } from '../context/Context';

const Header = () => {
  const {ticketsList, setSearchRes} = useContext(Context)
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const [showInput, setShowInput] = useState(false)
  function handleBlur(e){
    setTimeout(() => {
      setShowInput(false)
      e.target.value = null
    }, 2000)
  }
  function handleSearch(e){
    if(location.pathname == "/tickets"){
     let filterTicket = ticketsList.filter(item => item.username.toLowerCase().includes(e.target.value.toLowerCase()))
     if(!e.target.value){
       setSearchRes(ticketsList)
      }
      else{
       setSearchRes(filterTicket)
     }
    }
  }
  return (
    <div className='flex items-center justify-between mb-[58px]'>
      {navList.find(item => item.path == pathname)?.title ? <strong className='font-bold text-[24px] text-[#252733]'>{navList.find(item => item.path == pathname)?.title}</strong> : <button onClick={() => navigate(-1)}> <ArrowBack/> </button>}
      <div className='flex items-center gap-[32px]'>
        <div className='flex items-center gap-[24px]'>
          <div className='flex items-center'>
            <button className={`${showInput ? "hidden" : ""} cursor-pointer`} onClick={() => setShowInput(true)}> <LupaIcon /> </button>
            <input onChange={handleSearch} onBlur={handleBlur} className={`border-[1px] duration-400 rounded-2xl outline-none  ${showInput ? "focus:shadow-sm shadow-blue-500 py-1 pl-2 border-slate-200 w-[180px]" : "w-0 border-transparent"}`} placeholder='Searching...' />
          </div>
          <button> <NotificationIcon /> </button>
        </div>
        <span className='w-[1px] h-[32px] inline-block bg-[#DFE0EB]'></span>
        <div className='flex items-center gap-[24px]'>
          <p className='font-semibold text-[14px]'>Jones Ferdinand</p>
          <img src={AvatarIcon} alt='Avatar' width={44} height={44} />
        </div>
      </div>
    </div>
  )
}

export default Header