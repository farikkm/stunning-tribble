import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "@/views/Home"
import Catalog from "./views/Catalog"

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/catalog" element={<Catalog />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
