import React from 'react'
import Play from "../images/CircledPlay.png"
import Pause from "../images/PauseButton.png"
import {useState,useEffect} from 'react';


const Description = ({datas}) => {

  const [definitions,setDefinitions] = useState([]);
  const [audioUrl,setAudioUrl] = useState("");  
  const [isPlaying,setIsPlaying] = useState(false);

     useEffect(() => {

      if(datas) {
        setDefinitions(datas?.meanings[0]?.definitions);
        setAudioUrl(datas?.phonetics[0]?.audio);
      }
     
      },[datas]);


  const handleClick =(index) => (event) => {
    event.preventDefault();
        const defs = datas?.meanings[index]?.definitions;
        setDefinitions(defs);
  }

  const handleAudio =(e) => {
    e.preventDefault();

    const audioElem = new Audio(audioUrl&&audioUrl);

    if(isPlaying) {
        audioElem.pause();
        setIsPlaying(false);
    }
    else {
      audioElem.play();
      setIsPlaying(true);
    }

  }



  return (
    <div className='flex flex-col px-4 pb-5 gap-2 border-gray-100 border-2 rounded-xl'
    style={{minHeight: "20rem"}}>

             <div className='flex flex-row items-center gap-1 mt-5'>
              {isPlaying ?
                <img src={Pause} alt="play" className='h-10 w-10 cursor-pointer ' onClick={handleAudio}/>
              :
              <img src={Play} alt="play" className='h-10 w-10 cursor-pointer ' onClick={handleAudio}/>
            }
                <p className=''>{datas?.phonetic}</p>
            </div>



            <div className='flex flex-row gap-2'>
              {datas?.meanings?.map((item,index) => 
                <button key={index} className='text-white text-center bg-black h-8 w-20 px-2 rounded'
                onClick={handleClick(index)}>
                  {item?.partOfSpeech}</button>
              
                )}
              
            </div> 

            <div className='flex flex-col'>
              {definitions?.map((item,index) => 
            <p key={index}>{index&&index+1}.{item?.definition}</p>
              )}
            </div>


    </div>
  )
}

export default Description