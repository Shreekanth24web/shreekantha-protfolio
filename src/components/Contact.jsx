import React from 'react'
import '../style/contact.css'
const Contact = () => {
      return (
            <div className='contact'>
                  <div className='contact-inner'>

                        <div className='contact-head'>
                              <h1>Contact</h1>
                        </div>


                        <form>
                              <div className='form-group'>
                                    <label htmlFor="">Fullname</label>
                                    <input type="text" placeholder='Enter Fullname' />
                              </div>
                              <div className='form-group'>
                                    <label htmlFor="">Email-id</label>
                                    <input type="email" placeholder='Email-Id' />
                              </div>

                              <div className='form-group'>
                                    <label htmlFor="">Phone</label>
                                    <input type="text" placeholder='phone' />
                              </div>
                              <div className='form-group'>
                                    <label htmlFor="">Any Queries</label>
                                    <textarea name="queries"  placeholder='tell about your query' id="" cols="60" ></textarea>
                              </div>
                              <div className='form-submit'>
                                    <button type='submit'>SEND</button>
                              </div>
                        </form>


                  </div>
            </div>
      )
}

export default Contact