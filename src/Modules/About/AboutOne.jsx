import React from 'react'
import About1Img from '../../assets/about1.png'
const AboutOne = () => {
  return (
    <div className='flex flex-row '>
    <div className='w-[600px] h-[185px] p-24 m-20 mt-16'>
      <h1 className='text-3xl mt-10 mb-10 font-allura font-bold'>About us</h1>
      <p className=' italicmy-4 text-slate-500'>WE PRIDE OURSELVES ON</p>
      <p className='text-orange-600 text-3xl m-auto'>Our authentic momo recipes</p>
      <p>passed down through</p>
      <p>generations</p>
    </div>
    <div className='w-[600px] h-[631px] ml-auto mt-24'>
      <img src={About1Img } alt="About us" className='h-[80%] w-[500px]' />
    </div>
  </div>
  )
}

export default AboutOne