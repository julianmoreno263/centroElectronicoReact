import { useState, useEffect } from "react"
import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoClientes from "./components/ListadoClientes"

function App() {

  const [clientes, setClientes] = useState([])
  const [cliente, setCliente] = useState({})

  //si las dependencias estan vacias es que el useEffect solo se ejecuta una vez, este useEffect lo que hace es capturar lo que haya en el LS apenas se carge el componente, si hay algo lo guarda en el state, asi si se recarga la app no se pierden los datos, el segundo useEffect es el que va almacenando en LS.
  useEffect(() => {
    //aqui con ?? [] le estamos diciendo que si no hay nada en LS  pues agrege un array vacio, LS solo admite strings por eso se usa JSON.parse( en js no existe el tipo array,solo objetos,si vemos en consola nos dira object)
    const clientesLS = JSON.parse(localStorage.getItem("clientes")) ?? []
    setClientes(clientesLS)
  }, [])

  //useEffect es buen lugar para hacer la sincronizacion con el localStorage y mantener los datos, pero este useEffect es el que va almacenando los datos en el localStorage,pero si recargamos como la primera vez que se ejecuta la app el state de clientes es un array vacio,la informacion se pierde, para corregir esto es el primer useEffect(podemos tener varios useEffect en un componente)
  useEffect(() => {
    localStorage.setItem("clientes", JSON.stringify(clientes))
  }, clientes)

  const eliminarCliente = (id) => {
    const clientesActualizados = clientes.filter(cliente => cliente.id !== id)
    setClientes(clientesActualizados)
  }


  return (

    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario
          clientes={clientes}
          setClientes={setClientes}
          cliente={cliente}
          setCliente={setCliente}
        />
        <ListadoClientes
          clientes={clientes}
          setCliente={setCliente}
          cliente={cliente}
          eliminarCliente={eliminarCliente}
        />
      </div>

    </div>
  )
}

export default App
