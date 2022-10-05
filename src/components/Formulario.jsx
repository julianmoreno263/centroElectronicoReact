import { useState, useEffect } from "react"
import Error from "./Error"

const Formulario = ({ clientes, setClientes, cliente, setCliente }) => {
    //state
    const [electrodomestico, setElectrodomestico] = useState("")
    const [propietario, setPropietario] = useState("")
    const [telefono, setTelefono] = useState("")
    const [fecha, setFecha] = useState("")
    const [sintomas, setSintomas] = useState("")

    const [error, setError] = useState(false)

    //useEffect escucha por los cambios que sucedan en un state,el state se le pasa en las dependencias []
    useEffect(() => {
        //comprobamos si el objeto cliente esta vacio o no, si tiene algo le decimos que ponga esos datos en el formulario al dar click en editar(apenas se de click en editar,como hay un cambio en el state de cliente,el useEffect ejecuta lo que haya en su interior)
        if (Object.keys(cliente).length > 0) {
            setElectrodomestico(cliente.electrodomestico)
            setPropietario(cliente.propietario)
            setTelefono(cliente.telefono)
            setFecha(cliente.fecha)
            setSintomas(cliente.sintomas)

        }
    }, [cliente])

    const generarId = () => {
        const random = Math.random().toString(36).substring(2)
        const fecha = Date.now().toString(36)
        return random + fecha
    }


    const handleSubmit = (e) => {
        e.preventDefault()

        //validacion, si hay un campo vacio muestra un error
        if ([electrodomestico, propietario, telefono, fecha, sintomas].includes("")) {
            setError(true)
            return
        }
        setError(false)//si pasa validacion se debe poner de nuevo el state a false

        //objeto de cliente que se almacenara en el state clientes de app.js, este es el objeto en memoria de lo que escribimos en el formulario, pero en los parametros del componente le estamos pasando el state de cliente, osea un objeto ya creado. En si "cliente" sera el objeto sin actualizar y objetoCliente sera el actualizado
        const objetoCliente = {
            electrodomestico,
            propietario,
            telefono,
            fecha,
            sintomas,

        }

        //si existe un cliente podemos editar,si no lo hay no es que estamos generando un nuevo registro desde el formulario, el objeto actualizado debe de tener el mismo id del objeto que aun no ha sido actualizado
        if (cliente.id) {
            //editando el registro
            objetoCliente.id = cliente.id

            const clientesActualizados = clientes.map(clienteState => clienteState.id === cliente.id ? objetoCliente : clienteState)

            //actualizamos el state de clientes con el objeto actualizado
            setClientes(clientesActualizados)

            //limpiamos el state de cliente
            setCliente({})

        } else {
            //nuevo registro
            //Agregamos el objeto nuevo al state de clientes en App.jsx,pasamos una copia del state(que es un array) para mantener el tipo de dato y hay si le agregamos el objeto que se crea a este array(el state debe mantener el tipo de dato,no puede modificarse)
            objetoCliente.id = generarId()//aqui generamos el id para el nuevo registro
            setClientes([...clientes, objetoCliente])
        }

        //reiniciamos el formulario
        setElectrodomestico("")
        setPropietario("")
        setTelefono("")
        setFecha("")
        setSintomas("")


    }


    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-3xl text-center">Seguimiento Clientes</h2>
            <p className="text-lg mt-5 text-center mb-10 font-bold">Ingresa Clientes y {""} <span className="text-indigo-600 font-bold">Administralos</span></p>

            <form onSubmit={handleSubmit}
                action=""
                className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
            >
                {error && <Error ><p>Todos los campos son obligatorios</p></Error>}


                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="electrodomestico">Electrodoméstico</label>
                    <input
                        id="electrodomestico"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        type="text"
                        placeholder="Electrodoméstico"
                        value={electrodomestico}
                        onChange={(e) => setElectrodomestico(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="propietario">Propietario</label>
                    <input
                        id="propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        type="text"
                        placeholder="Propietario"
                        value={propietario}
                        onChange={(e) => setPropietario(e.target.value)}

                    />
                </div>

                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="telefono">Teléfono</label>
                    <input
                        id="telefono"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        type="text"
                        placeholder="Teléfono"
                        value={telefono}
                        onChange={(e) => setTelefono(e.target.value)}

                    />
                </div>

                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="fecha">Fecha ingreso</label>
                    <input
                        id="fecha"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        type="date"
                        placeholder="Fecha de ingreso"
                        value={fecha}
                        onChange={(e) => setFecha(e.target.value)}

                    />
                </div>

                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="sintomas">Síntomas</label>
                    <textarea
                        name=""
                        id="sintomas"
                        cols="30"
                        rows="10"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        placeholder="Síntomas"
                        value={sintomas}
                        onChange={(e) => setSintomas(e.target.value)}

                    />
                </div>

                <input
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
                    value={cliente.id ? "Editar Cliente" : "Agregar Cliente"}

                />
            </form>
        </div>
    )
}

export default Formulario
