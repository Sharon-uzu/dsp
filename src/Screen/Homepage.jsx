import React from 'react';
import pix1 from '../Images/homi 1.png';
import one from '../Images/one.png'
import two from '../Images/two.png'
import three from '../Images/three.png'
import four from '../Images/four.png';
import Slider from '../ComponentsFolder/Slider';
import MultiCarousel from '../ComponentsFolder/MultiCarousel';
import Footer from '../ComponentsFolder/Footer';
import Navbar from '../ComponentsFolder/Navbar';
import { Link } from 'react-router-dom';
import Contact from '../ComponentsFolder/Contact';


const Homepage = () => {
  return (
    <div>
        <Navbar/>
        <div className='emp'>
            <button type="button">Empowering the 21th generation techies</button>

            <h1>Your Learning Path to Endless Growth</h1>
            <p>AltSchool Africa helps you learn the skills you need to build and grow the career you want.</p>
            <a href="#programs"><button type='button' className='explore'>Explore programmes</button></a>

            <h2>Features</h2><br />
            <Slider/>
        </div>

        <div className="prog" id='programs'>
            <h3>Our Program</h3>
            <p>AltSchool Africa helps you learn the skills you need to buildand grow the career you want.</p>

            <div className='prog-cards'>
                <div className='prog-card'> 
                <img src={pix1} alt="" />
                <div className='prog-text'>
                    <h4>Paid Program</h4>
                    <p>AltSchool Africa helps you learn the skills you need to buildand grow the career you want.</p>
                    <a href='https://harvoxx.com' target='_blank'>Learn More</a>

                </div>

                </div>

                <div className='prog-card'>
                <img src={pix1} alt="" />
                <div className='prog-text'>
                    <h4>Digital Training program 100(DSP 100)</h4>
                    <p>AltSchool Africa helps you learn the skills you need to buildand grow the career you want.</p>
                   <Link to='/dsp100'> <a>Learn More</a></Link>

                </div>


                </div>

                <div className='prog-card'>
                <img src={pix1} alt="" />
                <div className='prog-text'>
                    <h4>Digital Training program 300(DSP 300)</h4>
                    <p>AltSchool Africa helps you learn the skills you need to buildand grow the career you want.</p>
                    <Link to='/dsp300'k><a>Learn More</a></Link>

                </div>


                </div>

            </div>
        </div>

        <div className="why">

            <h1>Why Harvoxx School</h1>

            <div className='why-flex'>

                <div className='left'>
                    <h3>This is where <span style={{color:'#2D378E'}}>dreams</span> come to life. With our carefully <span style={{color:'#E05476'}}>crafted</span> <span style={{color:'#DEA729'}}>learning</span> courses</h3>
                    <div className='list'>
                        <div>
                            <h6>200+</h6>
                            <p>Students</p>

                        </div>

                        <div>
                            <h6>200+</h6>
                            <p>Instructors</p>
                        </div>

                        <div>
                            <h6>200+</h6>
                            <p>Community</p>
                        </div>

                    </div>

                </div>


                <div className='right'>

                    <div className='why-card' style={{background: '#DDDDDD1A'}}>
                        <img src={one} alt="" />
                        <h5>Learn in Physical classes</h5>
                        <p>This is where dreams come to life. With our carefully crafted learning courses　</p>

                    </div>

                    <div className='why-card' style={{background: '#D6A95F1A'}}>
                    <img src={two} alt="" />
                    <h5>Learn in Physical classes</h5>
                    <p>This is where dreams come to life. With our carefully crafted learning courses　</p>


                    </div>

                    <div className='why-card' style={{background: '#B2B0F71A'}}>
                    <img src={three} alt="" />
                    <h5>Learn in Physical classes</h5>
                    <p>This is where dreams come to life. With our carefully crafted learning courses　</p>


                    </div>

                    <div className='why-card' style={{background: '#FFA9DC1A'}}>
                    <img src={four} alt="" />
                    <h5>Learn in Physical classes</h5>
                    <p>This is where dreams come to life. With our carefully crafted learning courses　</p>


                    </div>


                </div>

            </div>

            
        </div>


        <div className="where">
            <h2>Emerging Startups from our training</h2><br />

            <Slider/>
            <Slider/>
        </div>


        <div className="learners">
            <div className='learners-flex'>
                <div className='l-left'>
                    <h2>Learners say we know our onions</h2>
                    <p>No jokes - See proof here!</p>
                </div>
                <div className='l-right'>
                    <MultiCarousel/>
                </div>
                
            </div>
        </div>

        <Contact/>
        

        <Footer/>

        </div>
    
  )
}

export default Homepage