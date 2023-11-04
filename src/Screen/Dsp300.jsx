import React from 'react';
import Enroll from '../ComponentsFolder/Enroll';
import CountDown from '../ComponentsFolder/CountDown';
import AboutDsp from '../ComponentsFolder/AboutDsp';
import pix from '../Images/shine-young-people-discussing-work-issues-1 1.png';
import CoursesOffered from '../ComponentsFolder/CoursesOffered';
import Memories from '../ComponentsFolder/Memories';
import Footer from '../ComponentsFolder/Footer';
import Navbar from '../ComponentsFolder/Navbar';
import Faq300 from '../ComponentsFolder/Faq300';


const Dsp300 = () => {
  return (
    <div>
      <Navbar/>
      <Enroll reg='/form' btn='Enroll' title='Digital Training program 300 (DSP-300)' subtitle='Building this next generation of techies' src='shine-young-people-discussing-work-issues-1 1.png'/>
      <CountDown cohort='300'/>
      <AboutDsp cohort='300' info='Unlock the key to success and join a community of like-minded individuals in a state-of-the-art co-working environment. Take advantage of high-speed internet, peer support, and a vibrant space to help you thrive.Our hubs are designed to take your productivity and growth to new heights, where the rigour of online training is deepened through in-person experiences and practised in context.'/>
      <CoursesOffered/>
      <Memories/>
      <Faq300/>
      <Footer/>
    </div>
  )
}

export default Dsp300