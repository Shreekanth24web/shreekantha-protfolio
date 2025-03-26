import React from 'react'
import { AiFillHtml5, AiFillGithub } from "react-icons/ai"
import { SiCss3, SiJavascript, SiBootstrap, SiReact } from "react-icons/si"
import { Link } from 'react-router-dom'
import "../style/home.css"
import hand_png from './Asstes/images/hand_icon.png'
import profile_img from './Asstes/images/img-03.jpg'
const Home = () => {
      return (

            <div>

                  <div className='home1' id='home'>
                        <div className='home1-inner'>
                              <h1>CODE@SHREE</h1>
                              <p>easy to code</p>
                        </div>
                  </div>

                  <main className='main' id='about' >

                        <div className='home2'>

                              <div className='home2-part'>

                                    <div>
                                          <div className='home2-hand'>
                                                <h1>Hi</h1>
                                                <img src={hand_png} alt="hand_icon.png" /> <h1>,</h1>
                                          </div>
                                          <div className='home2-hand-name'>
                                                <h1>I'm  <span>Shreekantha</span>,</h1>
                                          </div>
                                          <div className='home2-hand-name'>
                                                <h1>Front-end Developer</h1>
                                          </div>
                                    </div>
                                    <div className='home2-profile-img'>
                                          <img src= {profile_img} alt="Profile_img" />
                                    </div>
                              </div>
                              <div className='home2-hand-about'>
                                    <div>
                                          <p>
                                                With proficiency in <span>HTML, CSS, JavaScript, Bootstrap</span> and  <span>React.js</span>, i have developed practical skills in front-end technology.
                                                with these experience i'm creating clone websites, displaying form data into table,
                                                fetching data from APIs, implementing OTP generation with verification,
                                                and building e-commerce platforms.
                                          </p>
                                    </div>
                              </div>
                              <button className='btn'>HIRE ME</button>
                              <Link to='/projects' className='btn-project'>SEE MY PROJECTS</Link>
                        </div>
                  </main>


                  <div className='home3' id='skills'>

                        <div className='home3-inner'>
                              <h1>Skills</h1>
                              <div className='skills'>
                                    <div className='skill' style={{ animationDelay: '.25s' }}>
                                          <AiFillHtml5 className='icon' color="#E54D26" />
                                          <p>HTML</p>
                                    </div>
                                    <div className='skill' style={{ animationDelay: '.5s' }}>
                                          <SiCss3 className='icon' color="#2965f1" />
                                          <p>CSS</p>
                                    </div>
                                    <div className='skill' style  ={{ animationDelay: '.75s' }}>
                                          <SiJavascript className='icon' color="#F0DB4F" />
                                          <p>JAVASCRIPT</p>
                                    </div>
                                    <div className='skill' style={{ animationDelay: '1s' }}>
                                          <SiBootstrap className='icon' color="#563D7C" />
                                          <p>BOOTSTRAP</p>
                                    </div>
                                    <div className='skill' style={{ animationDelay: '1.2s' }}>
                                          <SiReact className='icon' color="#61DAFB" />
                                          <p>REACT JS</p>
                                    </div>
                                    <div className='skill' style={{ animationDelay: '1.7s' }}>
                                          <AiFillGithub className='icon' color="#333" />
                                          <p>GIT-HUB</p>
                                    </div>
                              </div>
                        </div>
                  </div>

                  <main className='main-home4'>

                        <div className='home4'  >

                              <div className='home4-skill'>
                                    <div>
                                          <AiFillHtml5 className='icon' color="#E54D26" />
                                          <p>HTML</p>
                                    </div>
                                    <div className="home4-skill-progress">
                                          <progress value="90" max="100"></progress>

                                    </div>

                              </div>
                              <div className='home4-skill'>
                                    <div>
                                          <SiCss3 className='icon' color="#2965f1" />
                                          <p>CSS</p>
                                    </div>

                                    <div className="home4-skill-progress">
                                          <progress value="60" max="100"></progress>
                                    </div>
                              </div>
                              <div className='home4-skill' >
                                    <div>
                                          <SiJavascript className='icon' color="#F0DB4F" />
                                          <p>JAVASCRIPT</p>
                                    </div>
                                    <div className="home4-skill-progress">
                                          <progress value="60" max="100"></progress>
                                    </div>
                              </div>
                              <div className='home4-skill'>
                                    <div>
                                          <SiBootstrap className='icon' color="#563D7C" />
                                          <p>BOOTSTRAP</p>
                                    </div>
                                    <div className="home4-skill-progress">
                                          <progress value="60" max="100"></progress>
                                    </div>
                              </div>
                              <div className='home4-skill'>
                                    <div>
                                          <SiReact className='icon' color="#61DAFB" />
                                          <p>REACT JS</p>
                                    </div>
                                    <div className="home4-skill-progress">
                                          <progress value="65" max="100"></progress>
                                    </div>
                              </div>
                              <div className='home4-skill'>
                                    <div>
                                          <AiFillGithub className='icon' color="#333" />
                                          <p>GIT-HUB</p>
                                    </div>
                                    <div className="home4-skill-progress">
                                          <progress value="60" max="100"></progress>
                                    </div>
                              </div>

                        </div>
                  </main>


            </div>
      )
}

export default Home