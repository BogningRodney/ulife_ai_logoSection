import React from 'react'
import LogoSection from '../logoSectionModels/LogoSection1'
import LogoSection2 from '../logoSectionModels/LogoSection2'
import LogoSection4 from '../logoSectionModels/LogoSection4'
import LogoSection6 from '../logoSectionModels/LogoSection6'

type Props = { 
    title : string, 
    subtitle : string,
    paragraphe: string,
    variante: string,
    logos: string[]
  }
  

const Version2 = ({title, subtitle, paragraphe, logos, variante}:Props) => {
    return (
        <>
         { variante == "variante1" && (
             <LogoSection4 title={title} subtitle={subtitle} paragraphe={paragraphe} logos={logos}/>
         )}
         { variante == "variante2" && (
             <LogoSection6 subtitle={subtitle} title={title}  paragraphe={paragraphe} logos={logos}/>
         )}
        </>
  )
}

export default Version2
