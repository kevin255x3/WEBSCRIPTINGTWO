import React from "react";

function InformationSection({ designer, brand, resource }) {
  return (
    <div className="mt-8 grid grid-cols-3 gap-6">
      <div>
        <h1 className="text-4xl font-Archivo text-yellow-500 text-center mb-8">
          Designers you should know
        </h1>
        {designer.map((designerInfo) => (
          <div key={designerInfo.id} className="mb-4">
            <h2 className="text-2xl font-bold mb-3.5 font-Sans text-yellow-500 decoration-yellow-400 underline">
              {designerInfo.designer}
            </h2>
            <p className="text-sm text-gray-200 text-base mb-4 font-Garamond">
              {designerInfo.description}
            </p>
            <p className="text-sm text-gray-200 mt-2 font-Sans">
              Involvement: {designerInfo.involvement}
            </p>
          </div>
        ))}
      </div>

      <div>
        <h1 className="text-4xl font-Archivo text-yellow-500 text-center mb-8">
          Brands you should know
        </h1>
        {brand.map((brandInfo) => (
          <div key={brandInfo.id} className="mb-4">
            <h2 className="text-2xl font-bold mb-3.5 font-Sans text-yellow-500 underline decoration-yellow-400">
              {brandInfo.brand}
            </h2>
            <p className="text-sm text-gray-200 text-base mb-4 font-Garamond">
              {brandInfo.description}
            </p>
            <p className="text-sm font-Sans text-gray-200">
              Founder: {brandInfo.founder}
            </p>
          </div>
        ))}
      </div>

      <div>
        <h1 className="text-4xl font-Archivo text-yellow-500 text-center mb-8">
          Additional Resources
        </h1>
        {resource.map((resourceInfo) => (
          <div key={resourceInfo.id} className="mb-4">
            <h2 className="text-2xl font-bold font-Sans text-yellow-500 mb-3.5 decoration-yellow-400 underline">
              {resourceInfo.title}
            </h2>
            <p className="text-sm text-gray-200 text-base mb-4 font-Garamond">
              {resourceInfo.description}
            </p>
            <a
              href={resourceInfo.link}
              className="text-slate-300 font-bold font-Sans hover:text-yellow-500"
            >
              Learn More!
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InformationSection;
