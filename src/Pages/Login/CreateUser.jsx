import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import { useSessionData } from '../../Context/SessionDataContext';


const CreateUser = () => {
  const { setSessionData } = useSessionData();
  const [num, setNum] = useState("");
  const [forward, setForward] = useState(false);
  const [otp, setOtp] = useState("");
  const [validateComplete, setValidateComplete] = useState(false);

  const showToast = (data,successColor) => {
    toast.success(`${data.message}`, {
      position: 'top-right',
      autoClose: 5000, 
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      style: {
        background: successColor || '#28a745',
      },
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://192.168.1.150:9696/services/mobile/otp/get-otp",
        {
          method: "POST",
          body: JSON.stringify({ phoneNumber: num }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();
      if (data.messageCode === "0") {
        console.log(data);
        setForward(true);
        showToast(data , 'white')
      } else {
        console.log(data);
        showToast(data , 'LightCoral')
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const phoneNumberChangeHandler = (e) => {
    setNum(e.target.value);
  };

  const validateOTPHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://192.168.1.150:9696/services/mobile/otp/validate-otp",
        {
          method: "POST",
          body: JSON.stringify({ phoneNumber: num, otp }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();
      if (data.messageCode === "0") {
        console.log(data);
        showToast(data , 'white')
        setForward(true);
        setValidateComplete(true);
        setSessionData(data.data.sessionId);
      } else {
        console.log(data);
        showToast(data ,'LightCoral' )
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const otpChangeHandler = (e) => {
    setOtp(e.target.value);
  };

  return (
    <div className="bg-gray-300 w-full flex items-center justify-center h-screen">
      <div className="item-center h-auto w-full max-w-md bg-slate-50 border border-slate-200 rounded-lg sahdow-md p-6 items-center ">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
          ساخت کاربر
        </h2>
        <form className="flex flex-col" onSubmit={submitHandler}>
          <input
            type="number"
            placeholder="تلفن"
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray200 focus:outline-none focus:ring-1 
           focus:ring-blue-500 transition ease-in-out duration-150 "
            value={num}
            onChange={phoneNumberChangeHandler}
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-2 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
          >
            ساخت کاربر
          </button>
        </form>
        {forward && (
          <form className="items-center flex flex-col mt-6" onSubmit={validateOTPHandler}>
            <input
              type="number"
              placeholder="کد تایید"
              className="items-center bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-2 focus:bg-gray200 focus:outline-none focus:ring-1 
              focus:ring-blue-500 transition ease-in-out duration-150"
              value={otp}
              onChange={otpChangeHandler}
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-1 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
            >
              تایید کد
            </button>
          </form>
        )}
        {validateComplete && (
          <>
          <Link
            to="/"
            className="mt-3 flex justify-center bg-emerald-500 text-white font-bold py-2 px-4 rounded-md mt-2 hover:bg-emerald-300 transition ease-in-out duration-150"
          >
            ورود به برنامه
          </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default CreateUser;
