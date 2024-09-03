import React from 'react'
import Paragraph from '../uikit/Paragraph'
import Logoitem from '../uikit/logoitem'
import Subtitle from '../uikit/Subtitle'



type Props = { 
  title : string, 
  subtitle : string,
  paragraphe: string,
  logos: string[]
}

const LogoSection5 = ({title, subtitle, paragraphe, logos}:Props) => {
  return (
    <section className='sm:px-20 bg-white my-4'>
        <div className='py-12 px-12 w-full bg-white my-4 flex flex-col max-w-[1280px] mx-auto'>
            <Subtitle 
                text={subtitle}
                className='block text-start text-lg mb-8'
            />
        <div className="logos flex items-center justify-center sm:justify-start flex-wrap sw-2/3 gap-3">
            {/* <Logoitem src='webflow.svg' />
            <Logoitem src='relume.svg' />
            <Logoitem src='webflow.svg' />
            <Logoitem src='relume.svg' />
            <Logoitem src='webflow.svg' />
            <Logoitem src='relume.svg' />
            <Logoitem src='webflow.svg' />
            <Logoitem src='relume.svg' />
            <Logoitem src='webflow.svg' />
            <Logoitem src='relume.svg' />
            <Logoitem src='webflow.svg' /> */}

            { logos.map((item:string) => <Logoitem src={item} key={title}/>)}
        </div>
        </div>
    </section>
  )
}

export default LogoSection5
