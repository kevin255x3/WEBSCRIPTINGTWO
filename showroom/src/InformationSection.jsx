import react from "React";

function InformationSection({ information }) {
  return (
    <div className="mt-8 grid grid-cols-3 gap-6">
      <h1 className="text-4xl font-Archivo text-yellow-500 text-center mb-8">
        {" "}
        Brands you should know{" "}
      </h1>
      <h1 className="text-4xl font-Archivo text-yellow-500 text-center mb-8">
        {" "}
        Designers you should know{" "}
      </h1>
      <h1 className="text-4xl font-Archivo text-yellow-500 text-center mb-8">
        {" "}
        Additional Resources{" "}
      </h1>
      <div className="bg-gradient-to-b from-slate-200 to-slate-500 rounded-lg shadow-md overflow-hidden hover:scale-110 transform transition duration-300"></div>
    </div>
  );
}

export default InformationSection;
