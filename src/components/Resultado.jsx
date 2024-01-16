import useCotizador from "../hooks/useCotizador"
const Resultado = () => {
    const {precio} = useCotizador()
  return (
    precio ? (
        <h1 className="font-bold text-indigo-100">El precio final del auto será de <span className="text-green-200">{precio}$</span></h1> 
    ):(
        <h1>¡Completa el formulario para descubrir el precio aqui!</h1>
    )
     

     
  
    
  )
}

export default Resultado