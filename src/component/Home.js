import React, { useEffect, useState } from "react";
import Logo from "../logo.svg";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import NewFeatureCard from "./NewFeature";
const Home = () => {
  const navigate = useNavigate();

  const token = sessionStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, []);
  
  const handleGetStart = () => {
    navigate("/data-page");
  };

  const newFeatures = [
    {
      title: "Feature 1",
      description: "This is our logo.",
    },
    {
      title: "Feature 2",
      description: "Description of Feature 2.",
    },
    {
      title: "Feature 3",
      description: "Description of Feature 3.",
    },
  ];

  const [currentStep, setCurrentStep] = useState(0);
  const [currentElement, setCurrentElement] = useState(1);

  const handleNext = () => {
    if (currentStep < newFeatures.length - 1) {
      setCurrentStep(currentStep + 1);
      if (currentElement === 1) {
        setCurrentElement(2);
      } else if (currentElement === 2) {
        setCurrentElement(3);
      }
    }
  };

  const handleClose = () => {
    setCurrentElement(1);
    setCurrentElement(0);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-500 to-purple-600">
      <div className="flex items-center mb-6">
        <img src={Logo} alt="Application Logo" className="w-24 h-24" />
        {currentElement === 1 && (
          <NewFeatureCard
            title={newFeatures[currentStep].title}
            description={newFeatures[currentStep].description}
            onNext={handleNext}
            onClose={handleClose}
          />
        )}
      </div>
      <div className="max-w-md p-8 bg-white rounded-lg shadow-lg bg-opacity-90">
        {currentElement === 2 && (
          <NewFeatureCard
            title={newFeatures[currentStep].title}
            description={newFeatures[currentStep].description}
            onNext={handleNext}
            onClose={handleClose}
          />
        )}
        <h2 className="justify-center mb-6 text-2xl font-bold text-gray-800">
          Welcome to our Web App
        </h2>
        <p className="mb-4 text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec justo
          a risus hendrerit eleifend. Nulla facilisi. Fusce vel malesuada
          turpis, vel volutpat odio. Nulla facilisi. Fusce vel malesuada turpis,
          vel volutpat odio.
        </p>
        <p className="mb-4 text-gray-700">
          Phasellus bibendum, justo quis fermentum bibendum, mi elit iaculis
          sapien, a tincidunt elit ex ac mi. Proin id lectus risus.
        </p>
        <Button
          type="button"
          className="border border-orange rounded px-6 min-h-[45px] bg-[#ff5722] text-white cursor-pointer"
          btnText={"Get Started"}
          onClick={handleGetStart}
        />
        {currentElement === 3 && (
          <NewFeatureCard
            title={newFeatures[currentStep].title}
            description={newFeatures[currentStep].description}
            onNext={handleNext}
            onClose={handleClose}
            lastCard={true}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
