import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const PokemonCard = ({pokemonUrl}) => {
    const [pokemon, setPokemon] = useState()
    
    const navigate = useNavigate()

    const handleClickPokemonPage = () => {
            navigate(`/pokedex/${pokemon.id}`)
    }
 
    useEffect(()=>{
        axios.get(pokemonUrl)
        .then((res) => setPokemon(res.data))
        .catch((err) => console.log(err))

    },[])

  return (
   <section>
     <section  className='pokemonCard'  onClick={handleClickPokemonPage}>
        <div>
            <div></div>
            <img className='imgPokemon' src={pokemon?.sprites.other[`official-artwork`].front_default} alt="" />
        </div>
       <div className='typePokemon'>
       <h3 id='namePokemon'>{pokemon?.name}</h3>
        <h3 >{pokemon?.types[0].type.name} {pokemon?.types[1] && `/ ${pokemon?.types[1].type.name}` }</h3>
        <h5>Type:</h5>
       </div>
        <section>
            {
                pokemon?.stats.map(stat => 
                    <div key={stat.stat.url}>
                        <h5 className='namePowers'>{stat.stat.name}</h5>
                        <h5 className='statPokemos'>{stat.base_stat}</h5>
                    </div>
                )
            }
        </section>
    </section>
   </section>
  )
}

export default PokemonCard