import { Routes, Route } from "react-router-dom";

import { HeroesRoutes } from "../heroes";
import { Login } from "../auth";

import { PrivateRoutes } from "./PrivateRoutes.jsx";
import { PublicRoutes } from "./PublicRoutes.jsx";

export const AppRouter = () => {
  return (
    <>
      <Routes>

      <Route path="login" element={
        <PublicRoutes>
          <Login />
        </PublicRoutes>
        }>

      </Route>

        <Route path="login" element={<Login />}></Route>

        <Route path="/*" element={
            <PrivateRoutes>
              <HeroesRoutes />
            </PrivateRoutes>
  
        }>
        </Route>

      </Routes>
    
    
    
    </>
  )
}
