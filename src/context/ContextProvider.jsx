import React, { createContext, useState } from 'react'

export const PageContext = createContext();

const ContextProvider = ({children}) => {

    const [page,setPage] = useState("home");
   const [gdata,setgData] = useState([]);
   const [activeIndex,setActiveIndex] = useState(0);



    const togglePage =(data) => {
        if(page === "home") {
            setPage("definition");
            setgData(data);
        }
        else {
            setPage("home");
        }
    }   

  return (
    <PageContext.Provider value={{page,togglePage,gdata,activeIndex,setActiveIndex}}>
        {children}
    </PageContext.Provider>

    )
}

export default ContextProvider