import React from 'react'
import { useDispatch } from 'react-redux'
import { setNameTrainerGlobal } from '../../slices/nameTrainer'



const Home = () => {
    const dispatch = useDispatch()
 
    const handleSubmit = (e) =>{
        e.preventDefault()
        const nameTrainer = e.target.nameTrainer.value
       dispatch( setNameTrainerGlobal(nameTrainer))
    }

  return (
    <div className='logoHome'>
        <section >
            <div className='imgHomeLogo'> 
                <img src="public\logo-pokedex.png" alt="" width={200} />
            </div>
        <section className='cardWelcome'>
        <div className='smsOfWelcome'>
            <div className='pikachu'>
            <img src='public\pokedexImg.png'></img>
            </div>
            <h2>
                ¡ Hello Trainer !
            </h2>
            <p>
                Give me your name to start!
            </p>
        </div>
        <form className='formLogin' onSubmit={handleSubmit}>
            <input required id='nameTrainer' type="text" placeholder='Your name here...' />
            <button >Start</button>
        </form>
        </section>
        </section>
    </div>
  )
}

export default Home