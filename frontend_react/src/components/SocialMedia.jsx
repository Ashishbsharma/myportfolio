import React from 'react';
import {BsTwitter,BsInstagram} from 'react-icons/bs';
import { FaFacebookF} from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className="app__social">
        <div>
            
            <a href="https://twitter.com/home" target="_blank" rel="noopener noreferrer"><BsTwitter /></a>
        </div>
        <div>
            <FaFacebookF/>
        </div>
        <div>
           <a href="https://www.instagram.com/thesarcasticpatil/" target="_blank" rel="noopener noreferrer"><BsInstagram/></a> 
        </div>
    </div>
  )
}

export default SocialMedia