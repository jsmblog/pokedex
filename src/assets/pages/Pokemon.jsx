import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const Pokemon = () => {
  const [pokemon, setPokemon] = useState()

    const {id} = useParams()

    useEffect(() => {
        const URL = `https://pokeapi.co/api/v2/pokemon/${id}`
        axios.get(URL)
        .then((res) => setPokemon(res.data))
        .catch((err) => console.log(err))
    }, [])

  return (
    <main className='pokemonCardLastSection'>
        <section >
              <section>
                <div className='pokemonCardLastSection_img'> 
                    <img  src={pokemon?.sprites.other["official-artwork"].front_default} alt="" />
                </div>
                <section>
                  <h2 className='numberPokemon' >Nº <span> {pokemon?.id}</span></h2>
                  <h2 className='namePokemonCard'>{pokemon?.name}</h2>
                  <div>
                  <div className='pokemonCardTypeAndHabilities' >
                      <div >
                          <h4>Weight</h4>
                          <h4 className='HeightAndWeight'>{pokemon?.weight}</h4>
                      </div>
                  </div>
                <div className='pokemonCardTypeAndHabilities'>
                    <div>
                        <h4>Height</h4>
                        <h4 className='HeightAndWeight'>{pokemon?.height}</h4>
                    </div>
                </div>
                  </div>
              </section>
                <div className='pokemonCardTypeAndHabilities'>
                  <h3>Type</h3>
                </div>
                      <div className='pokemonCardTypeAndHabilities'>
                        {
                          pokemon?.types.map(type => <div key={type.type.name} ><span>{type.type.name}</span></div> )
                        }
                      </div>
                  <div className='pokemonCardTypeAndHabilities'>
                    <div>
                      <h3>Abilities</h3>
                    </div>
                    <div>
                    </div>
              </div>
              <div className='pokemonCardTypeAndHabilities'>
                {
                  pokemon?.abilities.map(ability => <div key={ability.ability.name} ><span>{ability.ability.name}</span></div>)
                }
              </div>
              <section>
                <h2 className='co-Stats'>Stats</h2>
                <section className='pokemonCardStat'>
                  {
                    pokemon?.stats.map(stat => (
                      <section key={stat.stat.name}>
                        <div >
                          <h3>{stat.stat.name}</h3>
                          <h3 className='pokemonCardStat_color'>{stat.base_stat}</h3>
                        </div>
                      </section>
                    ) )
                  }
                </section>
              </section>
                
                </section>
            </section>
    </main>
  
)}

export default Pokemon