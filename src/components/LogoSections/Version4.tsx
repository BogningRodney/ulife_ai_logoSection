import React from 'react'
import Generator from '../uikit/Generator/Generator'

let Logos = [
  'webflow.svg',
  'relume.svg',
  'webflow.svg',
  'relume.svg',
  'webflow.svg'
]

const Version4 = () => {
  return (
      <>
        <Generator
          version='v2'
          variante='variante1'
          title="Medium length section heading goes here"
          subtitle=""
          paragraphe="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
          logos={Logos}
        />
      </>
  )
}

export default Version4
