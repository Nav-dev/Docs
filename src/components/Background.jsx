/* eslint-disable no-unused-vars */
import React from 'react'

function Background() {
  return (
    <>
    <div className='fixed x-[2] w-full h-screen'>
    <div className='absolute top-[5%] w-full py-10 flex justify-center text-zinc-600 text-xl font-semibold'>Document</div>
    <h1 className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[10vw] leading-none tracking-tighter font-semibold text-zinc-900'>Docs.</h1>
    </div>
    </>
  )
}

export default Background