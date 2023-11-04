import React from 'react';
import img from '../Images/homi 1.png'

const AboutDsp = (props) => {
  return (
    <div>
        <section className='about-dsp'>
            <div className='txt'>
                <h3>About DSP {props.cohort}</h3>
                <p>{props.info}</p>
            </div>
            <div className='img'>
                <img src={img} alt="" />
            </div>
        </section>
    </div>
  )
}

export default AboutDsp