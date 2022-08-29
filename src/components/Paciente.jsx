const Paciente = () => {
  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
       <p className="font-bold mb-3 text-gray-700 uppercase">propietario: {""}
            <span className= "font-normal normal-case ">Juan</span>
       </p>


       <p className="font-bold mb-3 text-gray-700 uppercase">Email: {""}
            <span className= "font-normal normal-case ">correo@correo.com</span>
       </p>


       <p className="font-bold mb-3 text-gray-700 uppercase">Fecha alta: {""}
            <span className= "font-normal normal-case ">10 Diciembre de 2022</span>
       </p>

       <p className="font-bold mb-3 text-gray-700 uppercase">Síntomas: {""}
            <span className= "font-normal normal-case ">No come, ultimamente lo noto muy caido, toma mucha agua.</span>
       </p>

    </div>
  )
}

export default Paciente   
