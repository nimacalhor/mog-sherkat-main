import React from "react";

function ConfirmCodeForm({ onSubmit, value, onOtpChange }) {
  return (
    <form
      className="items-center flex flex-col mt-6"
      onSubmit={onSubmit}
    >
      <input
        type="number"
        placeholder="کد تایید"
        className="items-center bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-2 focus:bg-gray200 focus:outline-none focus:ring-1 
    focus:ring-blue-500 transition ease-in-out duration-150"
        value={value}
        onChange={onOtpChange}
      />
      <button
        type="submit"
        className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-1 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
      >
        تایید کد
      </button>
    </form>
  );
}

export default ConfirmCodeForm;
