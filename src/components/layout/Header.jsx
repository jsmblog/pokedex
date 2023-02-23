import React from 'react'
import { useDispatch } from 'react-redux'
import { logOut } from '../../slices/nameTrainer'


const Header = ({logoPokedex}) => {
    
    const dispatch = useDispatch()

    const handleClickLogOut = () => {
        dispatch(logOut())
    }

  return (
    <header >
        <div>
            <div className='headerprincipal'><img src={logoPokedex} alt="" /></div>
        </div>
        <div>
            <div><button className='btnHeader' onClick={handleClickLogOut} >Log out</button></div>
        </div>
    </header>
  )
}

export default Header