import React from 'react'
import Generator from '../uikit/Generator/Generator'


let Logos = [
  'webflow.svg',
  'relume.svg',
  'webflow.svg',
  'relume.svg',
  'webflow.svg'
]

const Version5 = () => {
  return (
      <>
        <Generator 
          version='v1'
          variante='variante4'
          title=""
          subtitle="Used by the world's most average companies"
          paragraphe=""
          logos={Logos}
        />
      </>
  )
}

export default Version5
