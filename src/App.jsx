import "./App.css";

import { useState } from "react";
import { currentCoordinatesContext } from "./Context/currentCoordinatesContext";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateUser from "./Pages/Login/CreateUser";
import {
  SessionDataProvider,
  useSessionData,
} from "./Context/SessionDataContext";
import MainPage from "./Pages/MainPage/MainPage";

function App() {
  const [currentCoordinates, setCurrentCoordinates] = useState([
    35.7019167328534, 51.39129638671876,
  ]);

  return (
    <BrowserRouter>
      <SessionDataProvider>
        <currentCoordinatesContext.Provider
          value={{ currentCoordinates, setCurrentCoordinates }}
        >
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/CreateUser" element={<CreateUser />} />
          </Routes>
        </currentCoordinatesContext.Provider>
      </SessionDataProvider>
    </BrowserRouter>
  );
}

export default App;
