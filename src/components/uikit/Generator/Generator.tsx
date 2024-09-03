import Version1 from '@/components/Version/Version1'
import LogoSection from '@/components/logoSectionModels/LogoSection1'
import LogoSection2 from '@/components/logoSectionModels/LogoSection2'
import LogoSection3 from '@/components/logoSectionModels/LogoSection3'
import LogoSection4 from '@/components/logoSectionModels/LogoSection4'
import LogoSection5 from '@/components/logoSectionModels/LogoSection5'
import LogoSection6 from '@/components/logoSectionModels/LogoSection6'
import React from 'react'


type Props = { 
    title : string, 
    subtitle : string,
    paragraphe: string,
    version: string,
    variante: string,
    logos: string[]
}


const Generator = ({title, subtitle, paragraphe, version, logos, variante}:Props) => {
    
  return (
   <>
    { version == "v1" && (
        <Version1 variante={variante} title={title} subtitle={subtitle} paragraphe={paragraphe} logos={logos}/>
    )}
  
    { version == "v2" && variante == "variante2" && (
      <LogoSection6 title={title} subtitle={subtitle} paragraphe={paragraphe}/>
    )}
   </>
  )
}

export default Generator
