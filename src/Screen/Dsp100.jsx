import React from 'react';
import Enroll from '../ComponentsFolder/Enroll';
// import CountDown from '../ComponentsFolder/CountDown';
import AboutDsp from '../ComponentsFolder/AboutDsp';
import CoursesOffered from '../ComponentsFolder/CoursesOffered';
import Memories from '../ComponentsFolder/Memories';
import Footer from '../ComponentsFolder/Footer';
import Navbar from '../ComponentsFolder/Navbar';
import CountDowndsp100 from '../ComponentsFolder/CountDowndsp100';
import Faq100 from '../ComponentsFolder/Faq100';

const Dsp100 = () => {
  return (
    <div>
        <Navbar/>
        <Enroll reg='/dsp100' btnClassName='hidden' btn='Coming Soon' title='Digital Training program 100 (DSP-100)' subtitle='Building this next generation of female techies'/>
        <CountDowndsp100 cohort='100'/>
        <AboutDsp cohort='100' info='Unlock the key to success and join a community of like-minded individuals in a state-of-the-art co-working environment. Take advantage of high-speed internet, peer support, and a vibrant space to help you thrive.Our hubs are designed to take your productivity and growth to new heights, where the rigour of online training is deepened through in-person experiences and practised in context.'/>
        <CoursesOffered/>
        <Memories/>
        <Faq100/>
        <Footer/>
        
    </div>
  )
}

export default Dsp100