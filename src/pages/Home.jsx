import React, { useCallback, useContext } from 'react'
import SearchBar from '../components/SearchBar';
import Description from '../components/Description';
import sLogo from "../images/smallLogo.png";
import Contacts from '../components/Contacts';
import { useState,useEffect } from 'react';
import { PageContext } from '../context/ContextProvider';

const Home = () => {

  const [data,setData] = useState();
  const {activeIndex} = useContext(PageContext);

const fetchData = async() => {
  const res = await fetch('https://api.dictionaryapi.dev/api/v2/entries/en/apple');
        const values = await res.json();
        setData(values[0]);
}

     useEffect(() => {
      fetchData(); 
      },[]);

    const handleSubmit =async (query) => {
        const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${query}`);
        const values = await res.json();
        setData(values[0]);
        }


  return (
    <div className='flex items-center flex-col w-full gap-3'>

       <div className='flex items-center w-11/12 md:w-8/12 mt-2'>
       <img src={sLogo} alt="suvaye" className='h-10 w-10'/>
        <h3 className='font-bold ml-1'>Suvaye Dictionary</h3>
       </div>

        <div className='lg:w-4/6 md:w-5/5 w-11/12'>
        <SearchBar submit={handleSubmit}/>
        </div>

        <div className='lg:w-4/6 md:w-5/6 w-11/12'>
        <Description datas={data} indx={activeIndex} />
        </div>

        <div className='lg:w-4/6 md:w-5/6 w-11/12 h-44'>
        <Contacts datas={data} indx={activeIndex} />
        </div>
    </div>
  )
}

export default Home