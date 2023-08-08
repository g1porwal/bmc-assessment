import React, { useState } from "react";
import Button from "./Button";

const data = [
  {
    id: 1,
    name: "Data A",
    description: "This is Data A. It does something.",
  },
  {
    id: 2,
    name: "Data B",
    description: "This is Data B. It does something else.",
  },
  {
    id: 3,
    name: "Data C",
    description: "This is Data C. It does something different.",
  },
];

export default function DataPage() {
  const [selectedData, setSelectedData] = useState(null);

  const handleDataSelection = (data) => {
    setSelectedData(data);
  };

  const handleIngestion = () => {
    alert(`Ingesting ${selectedData.name}`);
    setSelectedData(null);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-500 to-purple-600">
      <div className="p-8 bg-white rounded-lg shadow-lg bg-opacity-90">
        <h2 className="text-2xl font-bold text-gray-800">Data Page</h2>
        <div>
          <p className="font-semibold text-gray-700 text-md">
            Select data to ingest:
          </p>
          <ul className="grid gap-4">
            {data?.map((item) => (
              <li
                key={item.id}
                className={`p-4 rounded-lg cursor-pointer ${
                  selectedData && selectedData.id === item.id
                    ? "bg-[#ff5722] bg-opacity-50"
                    : ""
                }`}
                onClick={() => handleDataSelection(item)}
              >
                <h3 className="text-xl font-semibold text-gray-900">
                  {item.name}
                </h3>
                <p className="text-gray-700">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
        {selectedData && (
          <div className="py-2">
            <p className="text-lg font-semibold text-gray-900">
              You have selected {selectedData.name}.
            </p>
            <p>{selectedData.description}</p>
            <Button
              type="button"
              className="mt-2 border border-orange rounded px-6 min-h-[45px] bg-[#ff5722] text-white cursor-pointer"
              btnText={"Ingest Data"}
              onClick={handleIngestion}
            />
          </div>
        )}
      </div>
    </div>
  );
}
