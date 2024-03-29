import React, { useEffect, useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/Constants';

const Header = () => {

  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {

    console.log(searchQuery);

    // getSearchSuggestions();

  },[searchQuery]);

  const getSearchSuggestions = async () => {

    const data = await fetch( YOUTUBE_SEARCH_API + encodeURIComponent(searchQuery),  { mode: 'no-cors' });
    const json = await data.json();
    console.log(json);

  };
 

  const dispatch = useDispatch();

  const ToggleHandler = () => {
    dispatch(toggleMenu());
  }


  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
        <div className='flex col-span-1'>
            <GiHamburgerMenu className='h-9 w-6 cursor-pointer' onClick={ () => ToggleHandler() }/>
            <img  className='h-8 mx-2 '
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png" alt="" />
        </div>
        <div className='col-span-10 text-center'>
            <input className='w-1/2 border border-gray-400 rounded-l-full p-2' type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
            <button className='border border-gray-400 rounded-r-full p-2'>Search</button>
        </div>
        <div className='col-span-1'>
            <img className='h-8'
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR81iX4Mo49Z3oCPSx-GtgiMAkdDop2uVmVvw&usqp=CAU" alt="" />
        </div>
    </div>
  )
}

export default Header