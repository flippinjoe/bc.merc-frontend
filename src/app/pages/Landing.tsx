/**
 * The landing page is our initial arbiter of logic. This page will handle any
 * initial loading and redirection where necessary
 */

import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default () => {

    useEffect(() => {
        console.log(`INITIAL LOADING`)
    }, [])



    return (
        <p>Hello Landing</p>
    )
}