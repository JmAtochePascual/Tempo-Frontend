
import { keepPreviousData, useQuery } from "@tanstack/react-query"
import { getUsers } from "../../services/apiService"
import { useState } from "react";
import { TApiUser, TApiUsers } from "../../types/authType";

const HomePage = () => {
  const [page, setPage] = useState(1);
  const totalPages = 10; // Estimamos que hay 10 páginas en total

  const { data, isLoading, isError } = useQuery<TApiUsers>({
    queryKey: ["getUsers", page],
    queryFn: () => getUsers({ page, results: 10 }),
    placeholderData: keepPreviousData,
  })

  if (isLoading) return <p className="text-white">Cargando...</p>
  if (isError) return <p>Ocurrió un error</p>
  if (data) return (
    <div>
      <h1 className="text-3xl font-bold mb-4 text-white">Lista de Usuarios</h1>

      <div className="pb-4 overflow-x-auto">
        <table className="w-full border-collapse border border-gray-700 text-white">
          <thead>
            <tr className="bg-gray-800">
              <th className="border border-gray-600 p-2">Nombre</th>
              <th className="border border-gray-600 p-2">Apellido</th>
              <th className="border border-gray-600 p-2">Correo</th>
              <th className="border border-gray-600 p-2">Teléfono</th>
            </tr>
          </thead>
          <tbody>
            {data?.results.map((user: TApiUser) => (
              <tr key={user.login.uuid} className="text-center">
                <td className="border border-gray-600 p-2">{user.name.first}</td>
                <td className="border border-gray-600 p-2">{user.name.last}</td>
                <td className="border border-gray-600 p-2">{user.email}</td>
                <td className="border border-gray-600 p-2">{user.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="w-full mt-4 flex justify-center flex-wrap">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className="px-4 py-2 mx-1 my-2 bg-gray-800 text-white rounded disabled:opacity-50"
        >
          Anterior
        </button>

        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i + 1}
            onClick={() => setPage(i + 1)}
            className={`px-4 py-2 mx-1 my-2 ${page === i + 1 ? "bg-blue-600" : "bg-gray-800"
              } text-white rounded`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={page === totalPages}
          className="px-4 py-2 mx-1 my-2 bg-gray-800 text-white rounded disabled:opacity-50"
        >
          Siguiente
        </button>
      </div>
    </div>
  )
}

export default HomePage