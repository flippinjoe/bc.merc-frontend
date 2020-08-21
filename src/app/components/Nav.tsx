

import React from 'react'
import { useLocation, NavLink } from 'react-router-dom'

export default () => {
    const location = useLocation()

    
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Landing</NavLink>
                </li>

                <li>
                    <NavLink to="/home">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/organizations">Orgs</NavLink>
                </li>
            </ul>
        </nav>
    )
}