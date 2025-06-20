import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { pageRouteList } from '../hooks/paths'
import LoadingPage from '../components/LoadingPage'

const PageRoutes = () => {
  return (
    <>
    <Suspense fallback={<LoadingPage/>}>
      <Routes> {pageRouteList.map(item => <Route key={item.id} path={item.path} element={item.element}/>)} </Routes>
    </Suspense>
    </>
  )
}

export default PageRoutes