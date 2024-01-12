/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useRef ,useState } from 'react'
import  Card from './Card'

function Foreground() {

    const ref = useRef(null)
    const data =[
        {
        desc:"aef afa asdfae adfgqa afrqa afqer avearg.",
        filesize:".9mb", 
        close:false, 
        tag:{isOpen: true, tagTitle:"Download Now", tagColor:"green"},
    },

        {
        desc:"aef afa asdfae adfgqa afrqa afqer avearg.",
        filesize:".9mb", 
        close:false, 
        tag:{isOpen: true, tagTitle:"Download Now", tagColor:"blue"},
    },
        {
        desc:"aef afa asdfae adfgqa afrqa afqer avearg.",
        filesize:".9mb", 
        close:false, 
        tag:{isOpen: true, tagTitle:"Download Now", tagColor:"green"},
    },
    ];
  return (
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5'>
        {data.map((item, index)=>(
            <Card data={item} reference={ref} />
            ))}
    </div>
  );
}

export default Foreground