import React from "react";

function PhoneForm({ onSubmit, value, onPhoneChange }) {
  return (
    <>
      <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
        ساخت کاربر
      </h2>
      <form className="flex flex-col" onSubmit={onSubmit}>
        <input
          type="number"
          placeholder="تلفن"
          className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray200 focus:outline-none focus:ring-1 
         focus:ring-blue-500 transition ease-in-out duration-150 "
          value={value}
          onChange={onPhoneChange}
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-2 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
        >
          ساخت کاربر
        </button>
      </form>
    </>
  );
}

export default PhoneForm;
