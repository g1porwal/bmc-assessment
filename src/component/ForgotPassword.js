import React from "react";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  return (
    <>
      <div className="grid justify-items-end text-[#ff5722]  text-[16px]">
        <Link to="/"> Forgot your Password? </Link>
      </div>
    </>
  );
}
