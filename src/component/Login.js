import React, { useState } from "react";
import hideIcon from "../assests/svg/hidepassword.svg";
import showIcon from "../assests/svg/showpassword.svg";
import { useNavigate } from "react-router-dom";
import ForgotPassword from "./ForgotPassword";
import LoginTitle from "./LoginTitle";
import Input from "./Input";
import Button from "./Button";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [errorText, setErrorText] = useState(false);
  const [errorTextMessage, setErrorTextMessage] = useState(
    "Invalid email address or password."
  );

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.loginEmailInput.value;
    const password = event.target.loginPasswordInput.value;
    if (email === "jeevansethia@gmail.com" && password === "12345678") {
      sessionStorage.setItem("token", 123456789)
      navigate("/home-page");
    } else {
      setErrorTextMessage("Invalid email address or password.");
      setErrorText(true);
    }
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen space-y-2 bg-gradient-to-b from-blue-500 to-purple-600 bg-authslate ">
      <div className="w-4/5 p-8 bg-white rounded rounded-lg shadow shadow-lg bg-opacity-90 sm:w-96">
        <LoginTitle />
        <form onSubmit={handleLoginSubmit} className="space-y-3">
          <div className="mt-4">
            {errorText && (
              <p className={`text-[#ff5722] text-sm`}>{errorTextMessage}</p>
            )}
            <label className="text-sm text-gray-700">
              Email <span className="text-[#D44453]">*</span>
            </label>
            <br />
            <Input
              id="loginEmailInput"
              type="text"
              placeholder="Enter your email address"
              className="border border-gray-400 text-gray-700 bg-[#EEF1FE] bg-opacity-90 text-sm focus:border-[#F2994A] outline-none text-[#2d333a] w-full p-2 rounded min-h-[45px]"
            />
          </div>
          <div className="">
            <label className="text-sm text-gray-700">
              Password <span className="text-[#D44453]">*</span>
            </label>
            <br />
            <div className="relative">
              <Input
                id="loginPasswordInput"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="border border-gray-400 text-gray-700 bg-[#EEF1FE] focus:border-[#F2994A] text-sm outline-none text-[#2d333a] w-full p-2 rounded min-h-[45px]"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 text-sm ">
                <img
                  onClick={handleShowPassword}
                  alt="hideShowIcon"
                  src={showPassword ? showIcon : hideIcon}
                  className="h-4 text-[#fff] cursor-pointer"
                ></img>
              </div>
            </div>
          </div>
          <ForgotPassword />
          <Button
            type="submit"
            className="border border-orange w-full items-center bg-[#ff5722] min-h-[45px] text-base text-white rounded text-center cursor-pointer"
            btnText={"Login"}
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
