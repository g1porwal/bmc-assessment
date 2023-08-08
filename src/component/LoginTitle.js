import React from "react";
import { Link } from "react-router-dom";
 const LoginTitle = () => {

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-2xl font-bold text-gray-700">
        Login
      </div>
      <div className="mt-2 text-base text-gray-700">
        <span>Need an account?</span>
        <Link to="/"
          className="text-[#ff5722] pl-1"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
}
export default LoginTitle