import React, { useState } from "react";
import PhoneForm from "../PhoneForm";
import ConfirmCodeForm from "../ConfirmCodeForm";
import { Link } from "react-router-dom";
import useSessionContext from "../../hooks/useSessionContext";
import { showToast } from "../../../global/helper/global.helper";
import { getOtp, validateOtp } from "../../api/auth.api";

function RegisterUser() {
  const { setSessionData } = useSessionContext();
  const [num, setNum] = useState("");
  const [forward, setForward] = useState(false);
  const [otp, setOtp] = useState("");
  const [validateComplete, setValidateComplete] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    const { data, ok } = await getOtp(num);
    if (ok && data.messageCode === "0") {
      console.log(data);
      setForward(true);
      showToast(data, "white");
    } else {
      console.log(data);
      showToast(data, "LightCoral");
    }
  };

  const phoneNumberChangeHandler = (e) => {
    setNum(e.target.value);
  };

  const validateOTPHandler = async (e) => {
    e.preventDefault();

    const { data, ok } = await validateOtp(num, otp);
    if (ok && data.messageCode === "0") {
      console.log(data);
      showToast(data, "white");
      setForward(true);
      setValidateComplete(true);
      setSessionData(data.data.sessionId);
    } else {
      console.log(data);
      showToast(data, "LightCoral");
    }
  };

  const otpChangeHandler = (e) => {
    setOtp(e.target.value);
  };

  return (
    <div className="bg-gray-300 w-full flex items-center justify-center h-screen">
      <div className="item-center h-auto w-full max-w-md bg-slate-50 border border-slate-200 rounded-lg sahdow-md p-6 items-center ">
        <PhoneForm
          onPhoneChange={phoneNumberChangeHandler}
          value={num}
          onSubmit={submitHandler}
        />
        {forward && (
          <ConfirmCodeForm
            onSubmit={validateOTPHandler}
            value={otp}
            onOtpChange={otpChangeHandler}
          />
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
}

export default RegisterUser;
