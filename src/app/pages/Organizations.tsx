/**
 * If a user has access to more than 1 organization they'll end up 
 * on this page. This will simply list all the available organizations
 * the current user has access to
 */
import React, { useEffect } from 'react'
import backend from '../backend/api'



export default () => {
    
    useEffect(() => {
        console.log(`Orgs: ${backend.baseUrl}`)
    }, [])

    return (
        <p>Organizations</p>
    )
}