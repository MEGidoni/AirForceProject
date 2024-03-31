import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AllVisuals from '../components/visual/AllVisuals'
import AllDetailed from '../components/detailes/AllDetailed'
import Add from '../pages/Add'

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<AllDetailed/>} />
                <Route path='/Visual' element={<AllVisuals/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes