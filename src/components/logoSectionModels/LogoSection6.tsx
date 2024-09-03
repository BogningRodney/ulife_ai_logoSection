import React from 'react'
import LogoItemBG from '../uikit/LogoItemBG'
import Subtitle from '../uikit/Subtitle'




type Props = { 
  title : string, 
  subtitle : string,
  paragraphe: string,
  logos: string[]
}




const LogoSection6 = ({title, subtitle, paragraphe, logos}:Props) => {
  return (
    <section className='bg-white flex sm:justify-center sm:px-20 my-4'>
      
    <div className=' py-12 px-[5%] gap-12 sm:gap-14 w-full bg-white my-4 flex flex-col justify-center items-center'>
            <Subtitle 
                text={subtitle}
                className='block text-center text-lg mb-3'
            />
        <div className="logos gap-2 grid grid-cols-2 sm:grid-cols-3 2 w-full flex justify-center">
            <LogoItemBG src='webflow.svg' />
            <LogoItemBG src='relume.svg' /> 
            <LogoItemBG src='webflow.svg' />
            <LogoItemBG src='relume.svg' />
            <LogoItemBG src='webflow.svg' />
            <LogoItemBG src='relume.svg' />
        </div>
    </div>
</section>
  )
}

export default LogoSection6
