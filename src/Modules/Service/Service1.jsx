import React from 'react'
import Service1Img from '../../assets/service1.png'
const Service1 = () => {
  return (
<div className='flex gap-24' >
  <div  className=' justify-center ml-44 w-[500px] h-64 mt-24'>

<h1 className='text-3xl mb-24  '>Our Services</h1>
<p className='mb-5'>KNOWING YOUR CUSTOMER NEEDS</p>
<p className=  ' text-2xl font-bold text-orange-700'>We're more than just momos</p>
<p className='text-3xl bold'> We're full service dining experience</p>

</div>

<div className=' mt-24'>
<img src={Service1Img} alt=""  className='w-[50%]'/>

</div>
</div>
  )
}

export default Service1