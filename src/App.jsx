import { useContext } from "react"
import Home from "./pages/Home"
import Description from "./components/Description";
import { PageContext } from "./context/ContextProvider"




function App() {

const {page,gdata} = useContext(PageContext);

  return (
    <div>
      {page === "home" ? <Home /> : 
      <div className='flex flex-col gap-5 h-screen w-screen px-10 justify-center items-center '>
      <div className="lg:w-4/6 md:w-5/6 w-11/12 flex flex-col gap-5">
      <h3 className="w-full font-bold">Word: Apple</h3>

      <Description datas={gdata}/>  
        </div>
    </div> } 

      
    </div>
  )
}

export default App
