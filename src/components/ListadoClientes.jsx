
import Cliente from "./Cliente"

const ListadoClientes = ({ clientes, setCliente, eliminarCliente }) => {


    return (

        <div className="md:w-1/2 ld:w-3/5 md:h-screen overflow-scroll">
            {clientes && clientes.length ? (
                <>
                    <h2 className="font-black text-3xl text-center">Listado Clientes</h2>
                    <p className="text-xl mt-5 mb-10 text-center font-bold">Administra tus {""}
                        <span className="text-indigo-600 font-bold ">Clientes y reparaciones</span>
                    </p>

                    {clientes.map((cliente) => (
                        <Cliente
                            key={cliente.id}
                            cliente={cliente}
                            setCliente={setCliente}
                            eliminarCliente={eliminarCliente}
                        />
                    ))}

                </>
            ) : (
                <>
                    <h2 className="font-black text-3xl text-center">No hay Clientes</h2>
                    <p className="text-xl mt-5 mb-10 text-center font-bold">Comienza a agregar clientes {""}
                        <span className="text-indigo-600 font-bold ">y aparecerán en este lugar</span>
                    </p>
                </>
            )}



        </div>
    )
}

export default ListadoClientes
