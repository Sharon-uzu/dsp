import React from 'react';
import Navbar from './ComponentsFolder/Navbar';
import { Route, Routes } from 'react-router-dom';
import Homepage from './Screen/Homepage';
import Faq from './Screen/Faq';
import Dsp100 from './Screen/Dsp100';
import Dsp300 from './Screen/Dsp300';
import ApplicationForm from './Screen/ApplicationForm';
import Congrat from './Screen/Congrat';


function App() {
  return (

    <div>
      {/* <Navbar/> */}
        <Routes>
            
          <Route path='/' element={<Homepage />} />
          <Route path='/faq' element={<Faq />} />
          <Route path='/dsp100' element={<Dsp100 />} />
          <Route path='/dsp300' element={<Dsp300 />} />
          <Route path='/form' element={<ApplicationForm />} />
          <Route path='/congrat' element={<Congrat/>} />
          
        </Routes>

    </div>
  );
}

export default App;
