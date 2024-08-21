import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

export default function ProtectedRoute() {
    const {userData} = useSelector(store => store.user)
    
    if (!userData){
        
        return(<Navigate to="/login"/>)
        
    }
  return (
    <Outlet/>
  )
}
