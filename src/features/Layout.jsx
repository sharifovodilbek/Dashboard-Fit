import Navbar from '../modules/Navbar'
import Header from '../modules/Header'
import PageRoutes from '../routes'

const Layout = () => {
  return (
    <div className='flex justify-between'>
      <Navbar />
      <div className='w-[78%] p-[30px] h-[100vh] overflow-y-auto'>
        <Header />
        <PageRoutes />
      </div>
    </div>
  )
}

export default Layout