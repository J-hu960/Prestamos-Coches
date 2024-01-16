import useCotizador from '../hooks/useCotizador'
const Formulario = () => {

    const {marca,setMarca,year,setYear,plan,setPlan,handleSubmit} = useCotizador()


  return (
    <main className="bg-white   w-3/4 lg:w-2/4 lg:h-2/4 flex flex-col items-start pt-12 pl-8 pr-8 pb-8 rounded-lg" >
        <form onSubmit={(e)=>handleSubmit(e)} className="flex flex-col w-full h-full gap-y-5" action="">
            <div className="flex flex-col gap-y-3">
                <label className="text-xl text-gray-500 font-bold" htmlFor="">Marca</label>
                <select value={marca} onChange={e=>setMarca(e.target.value)} className="border-2 border-gray-400 rounded w-full" name="" id="">
                    <option value="">--Seleccione Marca--</option>
                    <option value="Americano">Americano</option>
                    <option value="Asiático">Asiático</option>
                    <option value="Europeo">Europeo</option>
                </select>
            </div>
            <div className="flex flex-col gap-y-3">
                <label className="text-xl text-gray-500 font-bold" htmlFor="">Año</label>
                <select  value={year} onChange={e=>setYear(e.target.value)} className="border-2 border-gray-400 rounded w-full" name="" id="">
                    <option value="">--Seleccione Año--</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                </select>
            </div>
            <div>
                <h2 className="text-xl text-gray-500 font-bold">ELIGE UN PLAN</h2>
                <div className="flex gap-x-4 mt-2">
                  <div className="flex items-center">
                     <label className="font-medium mr-2 text-black" htmlFor="">Básico</label>
                     <input onClick={e=>setPlan(e.target.value)}  value='basico' name="plan" type="radio" />
                  </div>
                  <div className="flex items-center">
                     <label className="font-medium mr-2 text-black" htmlFor="">Completo</label>
                     <input  onClick={e=>setPlan(e.target.value)}  value='completo' name='plan' type="radio" />
                  </div>  
                </div>

            </div>
            <input className="w-full h-12 bg-indigo-600 rounded text-white font-bold text-xl" value={'Cotizar'} type="submit" name="" id="" />
        </form>
    </main>
  )
}

export default Formulario