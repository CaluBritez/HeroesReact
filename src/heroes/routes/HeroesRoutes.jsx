import { Routes, Route, Navigate } from "react-router-dom"

import { Navbar } from "../../ui"
import { DC, Marvel, Search, Hero } from "../pages"

export const HeroesRoutes = () => {
    return (
    <>
        <Navbar />

        <div className="container">
            <Routes>
                <Route path="marvel" element={<Marvel />}></Route>
                <Route path="dc" element={<DC />}></Route>
                <Route path="search" element={<Search />}></Route>
                <Route path="hero/:id" element={<Hero />}></Route>


                <Route path="/" element={<Navigate to="/marvel" />}></Route>

            </Routes>
        </div>
    </>
  )
}
