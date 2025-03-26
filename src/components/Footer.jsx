import React from 'react'
import { HashLink } from 'react-router-hash-link';
import { AiFillInstagram, AiFillLinkedin, AiFillTwitterSquare, AiFillGithub } from "react-icons/ai"
import '../style/footer.css'

const Footer = () => {
      return (
            <footer>
                  <main className='footer-main1'>
                        <HashLink to="/#home"><h2>CODE@SHREE</h2></HashLink>
                        <small>easy to code</small>
                  </main>
                  <main className='footer-main2'>

                        <div className='footer-animation' style={{animationDelay:'.25s'}}>
                              <a href="https://www.instagram.com" target='_blank'> <AiFillInstagram className='icon-footer' color="#ee2a7b" /></a>
                        </div>
                        <div className='footer-animation' style={{animationDelay:'.5s'}}>
                              <a href="https://www.linkedin.com" target='_blank'> < AiFillLinkedin className='icon-footer' color="#0077B5" /></a>
                        </div>
                        <div className='footer-animation' style={{animationDelay:'.75s'}}>
                              <a href="https://twitter.com" target='_blank'> <AiFillTwitterSquare className='icon-footer' color="#1DA1F2" /></a>
                        </div>
                        <div className='footer-animation' style={{animationDelay:'1s'}}>
                              <a href="https://github.com" target='_blank'> <AiFillGithub className='icon-footer' color="#333" /></a>
                        </div>

                  </main>
            </footer>
      )
}

export default Footer