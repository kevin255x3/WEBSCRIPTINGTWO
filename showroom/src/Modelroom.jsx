import React from "react";

function Modelroom({ model }) {
  return (
    <div className="bg-gradient-to-r from-slate-300 to-slate-600 rounded-lg shadow-md overflow-hidden hover:scale-110 transform transition duration-300 ">
      <div className="w-full h-screen object-cover flex">
        <model-viewer
          // className="w-full h-96 object-cover"
          camera-controls
          camera-orbit="45deg"
          src={model.modelSrc}
        ></model-viewer>
      </div>

      <div className="p-2">
        <h3 className="font-semibold mb-3.5 font-Sans text-yellow-500">
          {model.title} by {model.designer}{" "}
        </h3>
        <p className="text-sm text-gray-200 text-base mb-2 font-Garamond">
          {model.description}
        </p>
        <p className="text-slate-300 mt-2 font-Sans hover:text-yellow-500 font-bold py-2">
          ${model.price.toFixed(2)}{" "}
        </p>
      </div>
    </div>
  );
}

export default Modelroom;
