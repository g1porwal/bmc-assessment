import React from "react";
import closeIcon from "../assests/svg/close.svg";
import Button from "./Button";

const NewFeatureCard = ({lastCard, title, description, onClose, onNext }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md bg-opacity-90 w-80">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-xl font-semibold">{title}</h3>
        <button
          className="text-gray-400 hover:text-gray-600 focus:outline-none"
          onClick={onClose}
        >
          <img
            alt="closeIcon"
            src={closeIcon}
            className="h-4 text-[#fff] cursor-pointer"
          ></img>
        </button>
      </div>
      <p className="mb-4 text-gray-600">{description}</p>

      <Button
        onClick={lastCard ? onClose : onNext}
        type="button"
        className="mt-2 border border-orange rounded px-6 min-h-[45px] bg-[#ff5722] text-white cursor-pointer"
        btnText={lastCard ? "Finish" : "Next"}
      />
    </div>
  );
};

export default NewFeatureCard;
