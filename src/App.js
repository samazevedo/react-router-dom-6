import './App.css'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import ProductItem from './pages/ProductItem'
import Error from './pages/Error'
import Dashboard from './pages/Dashboard'
import SharedLayout from './pages/SharedLayout'
import Login from './pages/Login'
import ProtectedRoute from './pages/ProtectedRoute'
import SharedProductLayout from './pages/SharedProductLayout'

function App() {
    const [user, setUser] = useState({
        name: '',
        email: '',
    })
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<SharedLayout />}>
                        <Route path='/' element={<Home />} />
                        <Route path='/about' element={<About />} />
                        <Route
                            path='/products'
                            element={<SharedProductLayout />}
                        >
                            <Route index element={<Products />} />
                            <Route path=':id' element={<ProductItem />} />
                        </Route>
                        <Route path='*' element={<Error />} />
                        <Route
                            path='/dashboard'
                            element={
                                <ProtectedRoute user={user}>
                                    <Dashboard user={user} />
                                </ProtectedRoute>
                            }
                        >
                            <Route path='stats' element={<div>Stats</div>} />
                        </Route>
                        <Route
                            path='/login'
                            element={<Login setUser={setUser} />}
                        />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
