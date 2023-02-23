import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './assets/pages/Home'
import Pokedex from './assets/pages/Pokedex'
import Pokemon from './assets/pages/Pokemon'
import ProtectedHome from './components/ProtectedHome'
import ProtectedRoutes from './components/ProtectedRoutes'
import logoPokedex from './asset img/logoPokedex.png'
import pokedexpikachu from './asset img/pokedexPikachu.png'

function App() {

  return (
    <div className="App">
    <Routes >
      <Route element={<ProtectedHome />} >
        <Route path='/' element={<Home logoPokedex={logoPokedex} pokedexpikachu={pokedexpikachu} />}  />
      </Route>
    <Route element={<ProtectedRoutes logoPokedex={logoPokedex} />} >
      <Route path='/pokedex' element={<Pokedex />} />
      <Route path='/pokedex/:id' element={<Pokemon />} />
    </Route> 
    </Routes>
    </div>
  )
}

export default App
