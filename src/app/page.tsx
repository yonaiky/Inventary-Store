import React from 'react';

const CityDetector = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-green-500 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-4">Detector de Ciudad</h1>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Nombre"
            className="w-full p-2 border border-gray-300 rounded"
          />
		  
		   <input
            type="text"
            placeholder="Apellido"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded w-full">
          Detectar
        </button>
      </div>
    </div>
  );
};

export default CityDetector;
