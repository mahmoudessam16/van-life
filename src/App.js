import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import About from './components/About'
import Vans from './components/Vans'
import './App.css'


function App() {
    return (
        <React.StrictMode>
            <BrowserRouter>
            <nav>
                <h1>#VANLIFE</h1>
                <div>
                    <Link to="/about">About</Link>
                    <Link to="/vans">Vans</Link>
                </div>
            </nav>
            <Routes>
                <Route path='/vans' element={<Vans />} />
                <Route path='/about' element={<About />} />
            </Routes>
            </BrowserRouter>
        </React.StrictMode>
    )
}

export default App
