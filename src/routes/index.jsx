import React from 'react'
import { pageRouteList } from '../hooks/paths'
import { Routes, Route } from 'react-router-dom';


const PageRoutes = () => {
    return (
        <div>
            <Routes>{pageRouteList.map(item => <Route key={item.id} path={item.path} element={item.element} />)}</Routes>
        </div>
    )
}

export default PageRoutes