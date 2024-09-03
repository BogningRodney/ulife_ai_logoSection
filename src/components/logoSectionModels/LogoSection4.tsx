import React from 'react'
import Title from '../uikit/Title'
import Paragraph from '../uikit/Paragraph'
import { Button } from '../ui/button'
import LogoItemBG from '../uikit/LogoItemBG'
import { ChevronRight } from 'lucide-react'



type Props = { 
    title : string, 
    subtitle : string,
    paragraphe: string,
    logoBG?: boolean,
    logos?: string[]
  }




const LogoSection4 = ({title, subtitle, paragraphe, logoBG,  logos}:Props) => {
  return (
    <section className='bg-white flex sm:justify-center my-4'>
        <div className=' py-4 px-4 sm:py-20 sm:px-20 gap-12 my-4 flex flex-col sm:flex-row items-center'>
            <div className="text flex flex-col gap-2 sm:w-1/2">
                <Title text={title} className='mb-2.5 mx-3.5'/>
                <Paragraph 
                    text={paragraphe}
                    className='mb-2.5 mx-4'
                />
                <div>
                    <div className="button mx-3.5 flex">
                        <Button variant={'outline'} >Button</Button>
                        <Button >Button <ChevronRight /></Button>
                    </div>
                </div>
            </div>
            <div className="logos grid grid-cols-2 gap-2 sm:w-1/2">
                <LogoItemBG src='webflow.svg' />
                <LogoItemBG src='webflow.svg' />
                <LogoItemBG src='relume.svg' /> 
                <LogoItemBG src='relume.svg' /> 
                <LogoItemBG src='webflow.svg' />
                <LogoItemBG src='webflow.svg' />
                <LogoItemBG src='relume.svg' /> 
                <LogoItemBG src='relume.svg' />
                
            </div>
        </div>
    </section>
  )
}

export default LogoSection4
