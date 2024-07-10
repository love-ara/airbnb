
import React from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Navbar    from "./components/Navbar"
import Hero    from "./components/Hero"

export default function App(){
  return (
      <>
          <BrowserRouter>
            <Routes>
            <Route>

                <Route element={<Hero/>} path={"/home"}/>

            </Route>
            </Routes>

          </BrowserRouter>
      </>
  );
}

