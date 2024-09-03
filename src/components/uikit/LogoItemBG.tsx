import Image from 'next/image'
import React from 'react'

type Props = {
  src : string,
  
}

const LogoItemBG = ( { src }:Props) => {
  return ( 
    <div className="item flex gap-2 bg-[#eeeeee] p-4 justify-center max-w-full">
      <Image src={src} width={140} height={56} alt=""/>
      {/* <span className='text-xl'>{name}</span> */}
    </div>
  )
}

export default LogoItemBG
