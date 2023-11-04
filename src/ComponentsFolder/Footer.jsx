import React from 'react';
import logo from '../Images/harvoxx.png';
import { Link} from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram} from "react-icons/fa";

const Footer = () => {
  return (
    <div className='foot'>
        <footer>
            <div>
                <img src={logo} alt="" />
            </div>

            <div>
                <ul>
                    <h4>Our Program</h4>
                    
                    <Link to='/dsp100'><li>DSP 100</li></Link>
                    <Link to='/dsp300'><li>DSP 100</li></Link>
                    <a href='https://harvoxx.com'><li>Paid Training</li></a>
                </ul>

            </div>

            <div>
                <ul>
                    <h4>Socials</h4>
                    <a href=''><li><FaFacebook className='fas'/>Facebook</li></a>
                    <a href=''><li><FaTwitter className='fas'/> Twitter</li></a>
                    <a href=''><li><FaInstagram className='fas'/>Instagram</li></a>
                </ul>
            </div>

            <div>

                <ul>
                    <h4>Companies</h4>
                    {/* <li>Hire out Grad</li> */}
                    {/* <li>Collaborate with us</li> */}
                </ul>

            </div>

        </footer>
    </div>
  )
}

export default Footer