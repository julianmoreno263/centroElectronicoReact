

const Cliente = ({ cliente, setCliente, eliminarCliente }) => {

    const { electrodomestico, propietario, telefono, fecha, sintomas, id } = cliente

    const HandleEliminar = () => {
        const respuesta = confirm("Deseas eliminar este cliente?")
        if (respuesta) {
            eliminarCliente(id)
        }
    }


    return (
        <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase">Electrodoméstico: {""}
                <span className="font-normal normal-case">{electrodomestico}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {""}
                <span className="font-normal normal-case">{propietario}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Teléfono: {""}
                <span className="font-normal normal-case">{telefono}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Fecha de ingreso: {""}
                <span className="font-normal normal-case">{fecha}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Síntomas: {""}
                <span className="font-normal normal-case">{sintomas}</span>
            </p>

            <div className="flex justify-between">
                <button
                    type="button"
                    className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
                    onClick={() => setCliente(cliente)}
                >Editar</button>
                <button
                    type="button"
                    className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
                    onClick={HandleEliminar}
                >Eliminar</button>

            </div>
        </div>
    )
}

export default Cliente
