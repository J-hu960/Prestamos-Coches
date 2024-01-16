/* eslint-disable react/prop-types */
import { createContext, useState } from "react"

const CotizadorContext = createContext()

const CotizadorProvider = ({children}) => {

    const [marca,setMarca] = useState('')
    const [year,setYear] = useState('')
    const [plan,setPlan] = useState('')
    const [precio,setPrecio] = useState(null)

    function handleSubmit(e){
        if(e){
            e.preventDefault()
        }
        if(marca==='' ||plan==='' || year==='') return
        let interesYear=2023-(parseInt(year))
        let final = 10000 

        if(marca==='Americano'){
            final += final*0.25
        }else if (marca==='Europeo'){
            final += final*0.5;

        }else if(marca==='Asiático'){
            final += final* 0.15

        }

        if(plan==='basico'){
            final += final*0.2
        }else if(plan==='completo'){
            final += final*0.5
        }
        final -= final*(interesYear/10)


        setPrecio(final)
    }






  return (
  <CotizadorContext.Provider value={{
    marca,
    setMarca,
    year,
    setYear,
    plan,
    setPlan,
    handleSubmit,
    precio


  }}>
      {children}
  </CotizadorContext.Provider>
  )
}
export{CotizadorContext}

export default CotizadorProvider