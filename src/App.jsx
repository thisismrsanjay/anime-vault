
import './App.css'
import AnimeItem from './components/AnimeItem'
import Home from './components/Home'
import Popular from './components/Popular'
import { useGlobalContext } from './context/global'

import { BrowserRouter ,Routes,Route} from 'react-router-dom'

function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Home/>} />
      <Route path="/anime/:id" element={<AnimeItem/>} />
    </Routes>
    </BrowserRouter>
   
  )
}

export default App
