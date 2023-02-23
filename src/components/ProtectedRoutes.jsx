import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import Header from './layout/Header'

const ProtectedRoutes = ({logoPokedex}) => {
   
    const nameTrainer =  useSelector(store => store.nameTrainer)
    
    if(nameTrainer){
        return (
            <>
                <Header logoPokedex={logoPokedex}/>
                <Outlet/>
            </>
        )
    }else{
        return <Navigate to="/" />
    }

}

export default ProtectedRoutes