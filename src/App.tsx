import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "@/views/Home"
import Header from "./components/Header"

function App() {
  return (
    <div className="wrapper">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
