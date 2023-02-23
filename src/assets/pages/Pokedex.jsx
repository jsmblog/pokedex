import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import PaginationButton from '../../components/PaginationButton'
import PokemonCard from '../../components/pokedex/PokemonCard'

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([])
  const [types, setTypes] = useState([])
  const [selectType, setSelectType] = useState("")
  const [pokemonName, setPokemonName] = useState("")
  const [pokemonFilter, setPokemonFilter] = useState([])
  const [currentPage, setCurrentPage] = useState(1)

  const nameTrainer = useSelector(store => store.nameTrainer)
  
  const handleSelectType = (e) => {
    setSelectType(e.target.value)
}
const handleSubmit = (e) => {
  e.preventDefault()
  setPokemonName(e.target.pokemonName.value)
}

const paginationLogic = () => {
  const pokemonPerPage = 12;
  const sliceStart = (currentPage - 1) * pokemonPerPage
  const sliceEnd = sliceStart + pokemonPerPage
  const pokemonInPage = pokemonFilter.slice(sliceStart , sliceEnd);
  const lastPage = Math.ceil(pokemonFilter.length / pokemonPerPage) || 1
  const pagePerBlock = 5;
  const pageActual = Math.ceil(currentPage / pagePerBlock)
  let pageInBlock = []
    const minPage = (pageActual * pagePerBlock - pagePerBlock) + 1
    const maxPage =  pageActual * pagePerBlock
    for(let i = minPage ; i <= maxPage ; i++){
      if(i <= lastPage){
        pageInBlock.push(i)
      }
    }
    return {pageInBlock , lastPage , pokemonInPage}
}
const handleNextPage = () => {
  const nextPage = currentPage + 1;
  if(nextPage > lastPage){
    setCurrentPage(1) 
  }else {
    setCurrentPage(nextPage)
  }
  
}

const handlePreviusPage = () => {
  const newPage = currentPage - 1 ;
  if(newPage < 1){
    setCurrentPage(lastPage)

  }else {
    setCurrentPage(newPage)
  }
}

const {pageInBlock , lastPage , pokemonInPage} = paginationLogic()


  useEffect (() => {
    const URL = `https://pokeapi.co/api/v2/${selectType ? `type/${selectType}/` :"pokemon/?limit=100/" }`
    axios.get(URL)
      .then((res) => {
        if(selectType){
          const pokemonByType = res.data.pokemon.map(pokemon => {
            return {
              name: pokemon.pokemon.name ,
              url: pokemon.pokemon.url
            }
          })
          setPokemons(pokemonByType)
        }else{
          setPokemons(res.data.results)
        }
      })
      .catch((err) => console.log(err))
    } ,[selectType])


    useEffect(() => {
        const pokemonByName = pokemons.filter( pokemon => pokemon.name.includes(pokemonName.toLowerCase()))
        setPokemonFilter(pokemonByName)
    }, [pokemonName , pokemons])

    useEffect(() => {
    const URl_SELECT=`https://pokeapi.co/api/v2/type/`
    axios.get(URl_SELECT)
      .then((res) => setTypes(res.data.results))
      .catch((err) => console.log(err))
    } ,[])

    useEffect(() => {
      setCurrentPage(1)
    }, [pokemons])

  return (
    <main>
     
      <form onSubmit={handleSubmit}>
     <p className='paragraph'><span>¡Welcome! {nameTrainer}</span><h2> here you can find information about yours favorites pokemon.</h2> </p>
        <div className='Searching'>
          <input id='pokemonName' type="text" placeholder='Search a pokemon here...' />
          <button>
            Search
          </button>
        </div>
        <div className='contFilterPokemon'>
        <select  onChange={handleSelectType}>
            <option className='optionSelect' value="">All</option>
            {
             types.map(type => <option className='optionSelect' key={type.url}>{type.name}</option>)
            }
        </select>
        </div>
        <PaginationButton setCurrentPage={setCurrentPage} handleNextPage={handleNextPage} handlePreviusPage={handlePreviusPage} lastPage={lastPage} pageInBlock={pageInBlock} />
      </form>
      <section >
        {
          pokemonInPage.map(pokemon => <PokemonCard key={pokemon.url} pokemonUrl={pokemon.url} />)
        }
      </section>
      <PaginationButton setCurrentPage={setCurrentPage} handleNextPage={handleNextPage} handlePreviusPage={handlePreviusPage} lastPage={lastPage} pageInBlock={pageInBlock} />
    </main>
  )
}

export default Pokedex

{
  /** <section>
        <ul>
          <li onClick={() => setCurrentPage(1)}>...</li>
          {
            pageInBlock.map(page => <li onClick={() => setCurrentPage(page)} key={page}>{page}</li> )
          }
          <li onClick={() => setCurrentPage(lastPage)}>...</li>
        </ul>
      </section> */
}
{
  /*
    <section>
        <div>
          <button onClick={() => setCurrentPage(1)}>. . .</button>
          <button onClick={handlePreviusPage} >{`<<`}</button>
          {
            pageInBlock.map(page => <button onClick={() => setCurrentPage(page)} key={page} >{page}</button>)
          }
           <button onClick={handleNextPage} >{`>>`}</button>
          <button onClick={() => setCurrentPage(lastPage)} >. . .</button>
         
        </div>
      </section>  
  */
}