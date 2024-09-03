import Image from 'next/image'
import React from 'react'
import Logoitem from '../uikit/logoitem'
import Paragraph from '../uikit/Paragraph'
import Subtitle from '../uikit/Subtitle'

type Props = { 
  title : string, 
  subtitle : string,
  paragraphe: string,
  logoBG?: boolean,
  logos?: string[]
}


const LogoSection = ({title, subtitle, paragraphe, logoBG,  logos}:Props) => {
  return (
    <section className='sm:px-20 bg-white my-4'>
        <div className='py-12 px-2 w-full my-4 flex flex-col items-center'>
            <Subtitle 
                text={subtitle} 
                className='block text-center text-lg mb-8'
            />
            <div className="logos flex flex-wrap justify-center ">
                <Logoitem src='webflow.svg' />
                <Logoitem src='relume.svg' />
                <Logoitem src='webflow.svg' />
                <Logoitem src='relume.svg' />
                <Logoitem src='webflow.svg' />
                <Logoitem src='relume.svg' />
                <Logoitem src='webflow.svg' />
                <Logoitem src='relume.svg' />
                <Logoitem src='webflow.svg' />
                <Logoitem src='relume.svg' />
                <Logoitem src='webflow.svg' />
            </div>
        </div>
    </section>
  )
}

export default LogoSection
