import Logo from "../assets/images/logo.svg"
import React from "react"

const LazyLoading = () => {
  return (
    <div className="flex items-center justify-center fixed inset-0 bg-white z-50">
        <img className="loading-img" src={Logo} alt="Logo" width={70} height={70}/>
    </div>
  )
}

export default LazyLoading