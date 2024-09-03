import React from 'react'
import LogoSection from '../logoSectionModels/LogoSection1'
import LogoSection2 from '../logoSectionModels/LogoSection2'
import LogoSection3 from '../logoSectionModels/LogoSection3'
import LogoSection5 from '../logoSectionModels/LogoSection5'

type Props = { 
    title : string, 
    subtitle : string,
    paragraphe: string,
    variante: string,
    logos: string[]
  }
  

const Version1 = ({title, subtitle, paragraphe, logos, variante}:Props) => {
  return (
   <>
    { variante == "variante1" && (
        <LogoSection title={title} subtitle={subtitle} paragraphe={paragraphe} logos={logos}/>
    )}
    { variante == "variante2" && (
        <LogoSection2 title={title} subtitle={subtitle} paragraphe={paragraphe} logos={logos}/>
    )}
    { variante == "variante3" && (
      <LogoSection3 title={title} subtitle={subtitle} paragraphe={paragraphe} logos={logos}/>
    )}
    {variante == "variante4" && (
      <LogoSection5 title={title} subtitle={subtitle} paragraphe={paragraphe} logos={logos}/>
    )}
   </>
  )
}

export default Version1
