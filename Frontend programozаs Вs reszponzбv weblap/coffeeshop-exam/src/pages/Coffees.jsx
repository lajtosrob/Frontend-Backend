import React, {useState} from 'react'
import Hero from '../components/Hero'
import homeHeroBg from '../assets/images/pexels-tom-swinnen-1309778.jpg'

import './css/Coffees.css'

const Coffees = () => {

  let heroTitle = "See our coffees"
  let heroText = "We offer an assortment of the best artisan coffees from around the globe delivered fresh to your door."
  
  return (
    <section>
      <Hero 
        image={homeHeroBg}
        title={heroTitle}
        text={heroText}>
      </Hero>
      
      <div className='container coffees'>
        <h1>Never trust anyone who doesn't drink coffee</h1>
        <div className='coffee-list' id="coffee-list">
        {/* TODO load coffee cards */}
        </div>
      </div>
    </section>
  )
}

export default Coffees