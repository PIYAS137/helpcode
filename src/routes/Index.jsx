import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import AppNavbar from '../layout/AppNavbar'

const Index = () => {
    return (
        <BrowserRouter>
        <AppNavbar/>
            <Routes>
                <Route path='/' element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Index