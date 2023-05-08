import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Vans from './components/Vans'
import VanDetail from './components/VanDetails'
import Layout from './components/Layout';
import Dashboard from './components/Host/Dashboard'
import Income from './components/Host/Income'
import Reviews from './components/Host/Reviews'
import HostLayout from './components/Host/HostLayout';
import HostVans from './components/Host/HostVans';
import HostVanDetails from './components/Host/HostVanDetails'
import Details from './components/Host/Details';
import Pricing from './components/Host/Pricing';
import Photos from './components/Host/Photos';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="vans">
                        <Route index element={<Vans />} />
                        <Route path=":id" element={<VanDetail />} />
                    </Route>
                    <Route path="host" element={<HostLayout />}>
                        <Route index element={<Dashboard />} />
                        <Route path="income" element={<Income />} />
                        <Route path='vans' element={<HostVans />} />
                        <Route path='vans/:id' element={<HostVanDetails />}>
                            <Route index element={<Details />} />
                            <Route path='pricing' element={<Pricing />} />
                            <Route path='photos' element={<Photos />} />
                        </Route>
                        <Route path="reviews" element={<Reviews />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
    }

export default App