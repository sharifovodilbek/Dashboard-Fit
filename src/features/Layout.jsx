import React from 'react'
import PageRoutes from '../routes'
import Header from '../modules/Header'
import Navbar from '../modules/Navbar'

const Layout = () => {
    return (
        <div className='flex justify-between'>
            <Navbar />
            <div className='w-[78%] h-[100vh] overflow-y-auto'>
                <Header />
                <PageRoutes />
            </div>
        </div>
    )
}

export default Layout