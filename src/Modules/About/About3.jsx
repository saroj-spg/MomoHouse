import React from 'react'
import About5 from '../../assets/about5.png'
import Girl from '../../assets/girl2.png'



const About3 = () => {
  return (
    <div className='flex mt-20 h-[700px]'>
        <div className='w-[full] h-[600px] ml-44'>
          <img src={About5} alt="" className='w-[900px] h-[500px] blur-sm' />
          <div className='ml-40 text-white relative -top-[330px] font-bold text-xl'>
            <p className='text-5xl'>"</p>
            <p className='w-[500px] text-justify leading-loose'>
              Momo is not just about sustenance, it's about bringing people together and creating
              memories. At our restaurant, we strive to create a warm and inviting atmosphere where
              our guests can enjoy delicious momo, great company, and unforgettable experiences
            </p>
            <p className='text-3xl'>Marcus Schleifer</p>
            <br />
            <p>CEO</p>
          </div>
        </div>
        <div className='width=[600px] h-[600px] mr-24' >
          <img src={Girl} alt="" className='w-full h-[500px] ' />

        </div>
      </div>
  )
}

export default About3