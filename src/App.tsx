import { Routes , Route } from "react-router-dom"
import Home from "./pages/Home"
import Store from "./pages/Store"
import About from "./pages/About"
import Navbar from "./components/Navbar"
import { CarsShoppingProvider } from "./context/CarsShoppingContext"
import "./App.css"

function App() {

  return (
    <CarsShoppingProvider>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} index/>
        <Route path="/store" element={<Store/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </CarsShoppingProvider>
  )
}

export default App
