
import './App.css'
import Header from './assets/Header'
import Index from './assets/Index'
import Motivacao from './assets/Motivacao'
import Trabalhos from './assets/Trabalhos'
import Curriculo from './assets/Curriculo'
import Contato from './assets/Contato'

import { Routes, Route } from "react-router-dom"
function App() {

  return (
    <>
      <Header />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/motivacao" element={<Motivacao />} />
          <Route path="/trabalhos" element={<Trabalhos />} />
          <Route path="/curriculo" element={<Curriculo />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </div>
    </>
  )
}

export default App
