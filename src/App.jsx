import "./App.css";

import CurrentCoordinateContextProvider from "./map/providers/CurrentCoordinateContextProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SessionContextProvider from "./auth/providers/SessionContextProvider";
import AppMap from "./map/components/AppMap";
import RegisterUser from "./auth/components/RegisterUser/RegisterUser";

function App() {
  return (
    <BrowserRouter>
      <SessionContextProvider>
        <CurrentCoordinateContextProvider>
          <Routes>
            <Route path="/" element={<AppMap />} />
            <Route path="/CreateUser" element={<RegisterUser />} />
          </Routes>
        </CurrentCoordinateContextProvider>
      </SessionContextProvider>
    </BrowserRouter>
  );
}

export default App;
