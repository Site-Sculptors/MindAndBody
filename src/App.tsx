
import './App.css'
import { Route, Routes } from "react-router-dom";

import Footer from './Components/Footer'
import Header from './Components/Header'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import Workouts from './Pages/Workouts'
import Recipes from './Pages/Recipes'
import Signin from './Pages/Signin'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/workouts" element={<Workouts />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
