import React from "react";
import { useRef } from "react";
import { useCoordinatesContext } from "../../Context/coordinatesContext";

function SideBar() {
  const latInputRef = useRef();
  const lonInputRef = useRef();
  const { coordinates, addCoordinates } = useCoordinatesContext();

 
  return (
    <section className="col-span-4 lg:col-span-3 bg-slate-800 p-7 pt-12 sm:h-full h-fit ">
      <h1 className="text-2xl lg:text-4xl text-center text-slate-100 w-full">
        Please Enter The Coordinates
      </h1>
      <div className="flex gap-5 flex-col 2xl:flex-row my-10 items-center justify-evenly">
        <div>
          <label className=" mx-3 text-lg text-slate-200" htmlFor="latInput">
            lat
          </label>
          <input
            ref={latInputRef}
            className="rounded-md h-10 p-2"
            id="latInput"
            type="number"
          />
        </div>
        <div>
          <label className="text-slate-200 text-lg mx-3" htmlFor="lonInput">
            lon
          </label>
          <input
            ref={lonInputRef}
            className="rounded-md h-10 p-2"
            id="lonInput"
            type="number"
          />
        </div>
      </div>
      <button
        onClick={submitHandler}
        className="bg-teal-500 text-slate-50 text-2xl p-2 rounded-md shadow-md block w-full "
      >
        Search
      </button>
      <ul className="h-[max(60vh,24rem)] overflow-y-scroll mt-4">
        {coordinates.length >= 1 &&
          coordinates.map(([lat, lon], i) => (
            <li
              className="p-2 rounded-md bg-slate-700 text-slate-50 text-center my-2"
              key={i}
            >
              lat: {lat}, lon: {lon}
            </li>
          ))}
           <button
        onClick={submitHandler}
        className="bg-teal-500 text-slate-50 text-2xl p-2 rounded-md shadow-md block w-full "
      >
        خروج
      </button>
      </ul>
    </section>
  );

  function submitHandler() {
    const lat = latInputRef.current.value;
    const lon = lonInputRef.current.value;
    if (isNaN(lat) || isNaN(lon)) return;
    addCoordinates(lat, lon);
  }
}

export default SideBar;
