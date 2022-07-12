import { NavLink } from 'react-router-dom'
import '../App.css'

function Navbar() {
    return (
        <nav className='main-nav'>
            <ul>
                <li>
                    <NavLink
                        to='/'
                        className={({ isActive }) =>
                            isActive ? 'link active' : 'link'
                        }
                    >
                        Home
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to='/products'
                        className={({ isActive }) =>
                            isActive ? 'link active' : 'link'
                        }
                    >
                        Products
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/about'
                        className={({ isActive }) =>
                            isActive ? 'link active' : 'link'
                        }
                    >
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='login'
                        className={({ isActive }) =>
                            isActive ? 'link active' : 'link'
                        }
                    >
                        Login
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
