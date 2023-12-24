import React, { useState } from "react";
import { coordinatesContext } from "../../Context/coordinatesContext";
import Map from "./Map";
import SideBar from "./SideBar";
import { useSessionData } from "../../Context/SessionDataContext";
import { Link } from "react-router-dom";

const MainPage = () => {
  const [coordinates, setCoordinates] = useState([]);
  const [currentCoordinates, setCurrentCoordinates] = useState([
    35.7019167328534, 51.39129638671876,
  ]);

  const addHandler = (lat, lon) => {
    setCoordinates((prevCoordinates) => [...prevCoordinates, [lat, lon]]);
    setCurrentCoordinates([lat, lon]);
  };

  const { sessionId } = useSessionData();
  console.log(sessionId);

  return (
    <>
      {sessionId ? (
        <coordinatesContext.Provider
          value={{ coordinates, addCoordinates: addHandler }}
        >
          <div className="grid-cols-12 md:grid h-full">
            <section className="col-span-8 lg:col-span-9">
              <Map />
            </section>
            <SideBar />
          </div>
        </coordinatesContext.Provider>
      ) : (
        <div className="bg-gray-300 w-full flex items-center justify-center h-screen">
          <div className="item-center h-auto w-full max-w-md bg-slate-50 border border-slate-200 rounded-lg sahdow-md p-6 items-center ">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                شما وارد اکانت خود نشده اید 
            </h2>
            <Link
              to="/CreateUser"
              className='mt-6 flex justify-center bg-emerald-500 text-white font-bold py-2 px-4 rounded-md mt-2 hover:bg-emerald-300 transition ease-in-out duration-150"'
            >
              ورود
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default MainPage;
