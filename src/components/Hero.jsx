import React from 'react'

const Hero = ({ hero }) => {
  //console.log(hero)
  return (
    <div>
      {hero && (<div>
        <h6>HERO</h6>
        <h1>{hero.name}</h1>
        <p>{hero.desc}</p>
      </div>)
      }
    </div>
  )

}

export default Hero