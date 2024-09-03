import React from 'react'
import Paragraph from '../uikit/Paragraph'
import Logoitem from '../uikit/logoitem'
import LogoItemBG from '../uikit/LogoItemBG'
import Subtitle from '../uikit/Subtitle'

type Props = { 
  title : string, 
  subtitle : string,
  paragraphe: string,
  logos: string[]
}



const LogoSection3 = ({title, subtitle, paragraphe, logos}:Props) => {
  return (
    <section className='sm:px-20 bg-white my-4'>
    <div className='py-12 px-2 w-full my-4 flex flex-col items-center'>
        <Subtitle 
            text={subtitle}
            className='block text-center text-lg mb-8'
        />
        <div className="logos flex flex-wrap justify-center ">
            {/* <Logoitem src='webflow.svg' />
            <Logoitem src='relume.svg' />
            <Logoitem src='webflow.svg' />
            <Logoitem src='relume.svg' />
            <Logoitem src='webflow.svg' />
            <Logoitem src='relume.svg' />
            <Logoitem src='webflow.svg' /> */}
          { logos.map((item:string) => <Logoitem src={item} key={title}/>) }
        </div>
    </div>
</section>
  )
}

export default LogoSection3
