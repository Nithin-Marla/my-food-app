import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import Home from "./Home"
import VegItems from "./VegItems"
import NonVeg from "./NonVeg"
import Milk from "./Milk"

function App() {
  return (
    <>
     <BrowserRouter>
     
     <Link to={"/home"}> Home </Link>
     <Link to={"/veg-items"}> Veg Items </Link>
     <Link to={"/non-veg-items"}> Non Veg Items </Link>
     <Link to={"/milk-items"}> Milk Items </Link>

     <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/veg-items" element={<VegItems/>}/>
      <Route path="/non-veg-items" element={<NonVeg/>}/>
      <Route path="/milk-items" element={<Milk/>}/>
     </Routes>
     
     </BrowserRouter>
    </>
  )
}

export default App
