import React from 'react'
import Paragraph from '../uikit/Paragraph'
import Subtitle from '../uikit/Subtitle'
import Logoitem from '../uikit/logoitem'

type Props = { 
  title : string, 
  subtitle : string,
  paragraphe: string,
  logos: string[]
}


const LogoSection2 = ({title, subtitle, paragraphe,  logos}:Props) => {
  return (
   <section className='py-12 px-5 sm:px-12 w-full bg-white my-4'>
    <div className='flex flex-col sm:flex-row justify-around items-center sm:px-20 gap-11'>
      <div className="text flex flex-col w-1/3">
        <Subtitle 
            text={subtitle}
            className='block text-lg '
        />
      </div>

      <div className="logos flex items-center flex-wrap sw-2/3">
          { logos.map((item:string) => <Logoitem src={item} key={title}/>) }
      </div>
    </div>
   </section>
  )
}

export default LogoSection2
