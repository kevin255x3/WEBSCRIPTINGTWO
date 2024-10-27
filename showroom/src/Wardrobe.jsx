import React from "react";
import IonIcon from "@reacticons/ionicons";

function Wardrobe({ garment, favourites, handleFavClick }) {
  return (
    <div className="bg-gradient-to-r from-slate-400 to-slate-700 rounded-lg shadow-md overflow-hidden hover:scale-110 transform transition duration-300 ">
      <img src={garment.clothesSrc} className="w-full h-96 object-cover" />
      <div className="p-2">
        <h3 className="font-semibold mb-3.5 font-Sans text-yellow-500">
          {garment.title} by {garment.designer}{" "}
        </h3>
        <p className="text-sm text-gray-200 text-base mb-2 font-Garamond">
          {garment.description}
        </p>
        <p className="text-slate-300 mt-2 font-Sans hover:text-yellow-500 font-bold py-2">
          ${garment.price.toFixed(2)}{" "}
        </p>
        <button
          className="text-red-500"
          onClick={() => {
            handleFavClick(garment.id);
          }}
        >
          {favourites.includes(garment.id) ? (
            <IonIcon name="heart" />
          ) : (
            <IonIcon name="heart-outline" />
          )}
        </button>
      </div>
    </div>
  );
}

export default Wardrobe;
