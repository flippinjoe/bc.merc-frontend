
import React from 'react'
import { BrowserRouter, Route, Link } from "react-router-dom";

import Nav from './components/Nav'
import Landing from './pages/Landing'
import Home from './pages/Home'
import Organizations from './pages/Organizations';

const App = () => {
    

    return (
        <BrowserRouter>
        <Nav></Nav>
        <Route path="/">
            <Landing></Landing>
        </Route>
        <Route path="/home">
            <Home />
        </Route>
        <Route path="/organizations">
            <Organizations />
        </Route>
    </BrowserRouter>
    )
}

export default App