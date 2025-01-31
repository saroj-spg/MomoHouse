import React from 'react'
import HeadChef from '../../assets/headchef.png'
import Chef1 from '../../assets/chef1.png'
import Chef2 from '../../assets/chef2.png'

const About4 = () => {
  return (
    <>
    <h1 className='text-center text-3xl bold'>Meet The <span className='text-orange-700'>Team</span></h1>
    <p className='text-center text-blue-800 bold space-x-10'>Our talented team members who delivers only the best results</p>
    <div className='flex w-[1200px] h-[600px] gap-5 mt-24 m-auto  '>
      <div className='w-[300px] h-500 ml-10'>
        <img src={HeadChef} alt="" className='w-[300px] h-[auto] border-2 rounded-lg' />
        <h1 className=' pl-3 relative -top-16 text-white bold text-2xl'>Head Chef</h1>
      </div>
      <div className='w-[300px] h-500 ml-10'>
        <img src={Chef1} alt="" className='w-[300px] h-[auto] border-2 rounded-lg' />
        <h1 className=' pl-3 relative -top-16 text-white bold text-2xl'>Assistant Chef</h1>
      </div>
      <div className='w-[300px] h-500 ml-10'>
        <img src={Chef2} alt="" className='w-[300px] h-[auto] border-2 rounded-lg' />
        <h1 className=' pl-3 relative -top-16 text-white bold text-2xl'>Assistant Chef</h1>
      </div>
      
    </div>
    </>

  )
}

export default About4