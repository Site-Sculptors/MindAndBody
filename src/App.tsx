
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Footer from './Views/Footer'
import Header from './Views/Header'
import About from './Views/About'
import Contact from './Views/Contact'
import Home from './Views/Home'
import Workouts from './Views/Workouts'
import Recipes from './Views/Recipes'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Recipes" element={<Recipes />} />
          <Route path="/Workouts" element={<Workouts />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
