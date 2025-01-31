import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { FaTiktok } from "react-icons/fa";
const Sixth = () => {
  return (
    <div>
       <div>
                <h1 className='text-center  my-5 text-3xl font-bold'>Get<span className='text-orange-700'> In Touch</span></h1>
                <p className='text-center font-bold text-xl'>Our Friendly team would love to hear from you</p>

                <div className="flex bg-white border-2 rounded shadow-lg w-[1200px] my-5 h-[750px] m-auto" >

                    <div className='text-white w-[400px] h-[700px] m-5 p-5 tracking-wider leading-10  bg-sky-700 border-2 rounded-lg' >
                        <div>
                            <h1><CiLocationOn className='inline mr-2' />Our Address</h1>
                            <p className='mt-2 italic'>New Baneshwor,Kathmandu,Bagmati,<br />Nepal</p>
                        </div>

                        <div>
                            <h1><FaPhoneAlt className='inline mr-2' />Our contacts</h1>


                            <pre>Mobile             Landline</pre>
                            <pre>9841275897         014783972</pre>
                            <p>9841275897</p>
                        </div>


                        <div>
                            <h1><IoMdTime className='inline mr-2' />Our Service Time</h1>
                            <pre className='italic'>MON-FRI            SAT-SUN</pre>
                            <pre className='italic' >10am-8pm           CLosed</pre>


                        </div>


                        <p className='italic mt-11  font-bold'>Get in touch in social Networks</p>
                        <div className=' flex gap-5 text-2xl mt-5'>
                            <a href='https://www.facebbok.com'>< CiFacebook /></a>
                            <a href='https://www.tiktok.com'><FaTiktok /></a>
                            <a href='https://www.instagram.com'> <CiInstagram /></a>

                        </div>




                    </div>
                    <div className='m-5 border-2   border-collapse rounded-lg p-5 w-[700px] h-[700px]'>
                      
                        <form>
                            <div className=' flex    mx-[112px] ' >
                                <div className='mr-5'>
                                    <label htmlFor="firstname">Firstname</label><br />
                                    <input className='border rounded-lg' type="text" id="fname" name="fname" /><br />
                                </div>
                                <div className='ml-5' >
                                    <label htmlFor='lastname'>Last name</label><br />
                                    <input className='border rounded-lg' type='text' id='lname' name='lname' />
                                </div>

                            </div>
                            <div className=' flex flex-col mx-[112px]  my-5'>
                                <label htmlFor='email' >Email</label>
                                <input className='border rounded-lg' type='email' id='email' name='email' />

                                <label htmlFor='what can we' className='mt-5'>What can we do for you</label>
                                <select className='border rounded-lg' placeholder="Choose" id="cando" name="cando">
                                    <option value="" disabled selected>Choose</option>
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </select>


                                <label html for='phone' className='mt-5'>Phone Number</label>

                                <button
                                    type="button"
                                    className="flex items-center px-3 py-2 bg-gray-100 border-r border-gray-300"
                                >
                                    <img
                                        src="https://flagcdn.com/w40/np.png"
                                        alt="Nepal Flag"
                                        className="w-6 h-4 mr-2"
                                    />
                                    <span className="text-gray-700 font-medium">+977</span>
                                </button>
                                <input className='border rounded-lg' type="tel" placeholder="Enter phone number" pattern="[0-9]{10}" require

                                />
                                <label htmlFor='message' className='mt-5'>Message</label>
                                <textarea
                                    placeholder="Enter your message"
                                    className="border border-gray-300 rounded-lg p-3"
                                    rows="4"
                                ></textarea>
                                <button className=' mt-4 h-12 w-44  border-r-8 text-white rounded-lg border-2 bg-orange-700'>Send Message</button>





                            </div>




                        </form>

                    </div>



                </div>
            </div>
            <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56516.31397712412!2d85.3261328!3d27.708960349999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2044600!5e0!3m2!1sen!2snp!4v1735487557741!5m2!1sen!2snp"
                        className="w-full  h-[700px] border-0 rounded-lg shadow-lg"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>



        
    </div>
  )
}

export default Sixth