import {useState} from "react"
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadosPacientes from "./components/ListadosPacientes"


function App() {

  const [pacientes,setPacientes] = useState ([]);

return (
    <div className="container mx-auto mt-20">
      <Header
        numeros={1}
      />
      
      <div className= "mt-12 md:flex">

          <Formulario />
          <ListadosPacientes />

      </div>
      
    </div>
  )
}

export default App
