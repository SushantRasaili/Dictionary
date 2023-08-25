import React from 'react'
import RectBlue from "../images/Rectangle.png"
import RectGray from "../images/RectangleGray.png"
import BigLogo from "../images/BigLogo.png"
import tweet from "../images/tweet.png"
import { PageContext } from '../context/ContextProvider'
import { useContext } from 'react'



const Contacts = ({datas}) => {


  const {togglePage} = useContext(PageContext);



  return (
    <div className='relative h-full w-full mt-32 mb-14'>
        <img src={RectGray} alt="bgGray" className='absolute right-0 top-0 h-ch w-full' />
        <img src={RectBlue} alt="bgGray" className='absolute right-3 bottom-0 w-cw h-full block'/>
        <img src="https://thumbs.dreamstime.com/z/logo-online-dictionary-concept-laptop-as-book-99816714.jpg" alt="bgGray"
         className='absolute sm:left-16 left-4 sm:bottom-8 bottom-16 h-28 w-28 md:h-52 md:w-48 cursor-pointer rounded-md'
         onClick={() => togglePage(datas)}/>
        <div className="absolute sm:right-32 right-8 top-16 flex flex-row transform -rotate-3 gap-2">
            <img src={tweet} alt="twiter" className='h-8 w-8'/>
            <h3 className='text-white font-bold'>english.official</h3>
        </div>

        <p className='text-white absolute bottom-12 sm:right-24 right-8 transform -rotate-3'>Follow us on twitter for latest updates</p>

       
    </div>
  )
}

export default Contacts