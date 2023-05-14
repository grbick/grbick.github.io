import React from "react";
import "./App.scss";
import CharPage from "./pages/CharPage";
import HomePage from "./pages/HomePage";
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom"

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Routes>
              <Route 
                path={`/`}
                element={<HomePage />} />
              <Route 
                path={`/character/:id`}
                element={<CharPage />} />
              <Route path="*" element={<Navigate to={`/`}/>} replace/>
            </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
