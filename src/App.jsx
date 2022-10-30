import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { useThemeHook } from "./GlobalComponents/ThemeProvider"
import Header from "./components/Header"
import { HashRouter, Routes, Route } from "react-router-dom"

//pages
import Home from "./Pages/Home"
import Cart from "./Pages/Cart"

function App() {
  const [theme] = useThemeHook()
  return (
    <main
      className={theme ? "bg-black" : "bg-light-2"}
      style={{ height: "100vh", overflowY: "auto" }}
    >
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="cart" element={<Cart />}></Route>
        </Routes>
      </HashRouter>
    </main>
  )
}

export default App
