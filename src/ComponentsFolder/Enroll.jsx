import React from 'react';
import enroll1 from '../Images/enroll1.png';
import { Link } from 'react-router-dom';

const Enroll = (props) => {
  return (
    <div>
        <section className='enroll'>
            <div>
                <button type="button">{props.title}</button>
                <h2>{props.subtitle}</h2>
                <p>AltSchool Africa helps you learn the skills you need to build and grow the career you want.</p>
                <Link to={props.reg} ><button type="button" className='enrollment' >{props.btn}</button></Link>

            </div>
            <div>
                <img src={enroll1} alt="" />
            </div>
        </section>
    </div>
  )
}

export default Enroll