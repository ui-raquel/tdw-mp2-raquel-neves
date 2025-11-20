import React from "react";
import { ghibliApi } from "./../../store/api/ghibliApi";


export default function FilmList() {
  const { data: Films, error, isLoading } = ghibliApi.useGetFilmsQuery();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center p-8">
        <div className="text-lg">A carregar filmes...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center p-8">
        <div className="text-red-500">Erro ao carregar os filmes: {JSON.stringify(error)}</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Fotos de Gatos</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {Films?.map((film, index) => (
          <div key={film.id || index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <img 
              src={film.image} 
              alt={`Filme ${index + 1}`}
              className="w-full h-64 object-cover"
            />
          </div>
        ))}
      </div>
      
      {Films?.length === 0 && (
        <div className="text-center p-8">
          <p className="text-gray-500">Nenhum filme encontrado.</p>
        </div>
      )}
    </div>
  );
}