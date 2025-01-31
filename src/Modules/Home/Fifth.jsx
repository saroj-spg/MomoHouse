import React from 'react'
import HappyGirl from '../../assets/happygirl.png'

const Fifth = () => {
  return (
    <div className=' flex bg-white py-10'>


<div className="m-auto  items-center ">
    <h2 className='text-bold text-3xl'>200+ <span className='text-yellow-700'>Happy Customers</span></h2>
    <p className='text-blue-950 text-bold text-3xl'>What our Customer say about us</p>
    <p className=' w-[500px] italic text-2xl leading-relaxed  p-5  my-24'> "Only the best momo you can find in the market . Different varities of momo to choose from . will be visiting again soon".</p>
    <p>-Lisa Dias</p>
</div>
<img src={HappyGirl}  className="w-[456px] h-[576px] m-auto" />
    </div>
  )

  
}

export default Fifth
