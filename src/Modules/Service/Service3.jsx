import React from 'react'
import PartyPrivate from '../../assets/privateparty.png'
import Catergring from '../../assets/categring.png'
import Service from '../../assets/service.png'
import Qr from '../../assets/Qr.png'
const Service3 = () => {
  return (
<>
<div className='flex gap-24 w-[full] h-[600px] '>
  <div  className='w-[40%]  ml-24'>
<img src={PartyPrivate} className=''
 alt="" />
 <h1 className='text-2xl mt-3 font-extrabold'>Private Party</h1>
<p className='leading-loose'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate animi nesciunt fugit quis iure eveniet eum quos, libero perferendis voluptatum modi, laudantium officiis! Placeat illo voluptate eligendi! Modi, culpa eveniet!</p>

<div className='flex gap-24 w-full'>
  <h1 className='font-extrabold text-sky-950 text-xl mt-24'>Scan the QR COde</h1><span>
  <img src={Qr} className='w-[60%] ml-44 '/></span>
</div>

  </div>
  <div className='w-[700px] h-[700px]'>

    <img src={Service} alt="" className='w-[500px] ml-44 border-2 rounded-lg ' />
  </div>
</div>

{/* Catergring */}

<div className='flex  flex-row-reverse gap-24 w-[full] h-[600px] '>
  <div  className='w-[40%]  mr-24'>
<img src={Catergring} className=''
 alt="" />
 <h1 className='text-2xl mt-3 font-extrabold'>Catergring</h1>
<p className='leading-loose'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate animi nesciunt fugit quis iure eveniet eum quos, libero perferendis voluptatum modi, laudantium officiis! Placeat illo voluptate eligendi! Modi, culpa eveniet!</p>

<div className='flex gap-24 w-full'>
  <h1 className='font-extrabold text-sky-950 text-xl mt-24'>Scan the QR COde</h1><span>
  <img src={Qr} className='w-[60%] ml-44 '/></span>
</div>

  </div>
  <div className='w-[700px] h-[700px]'>

    <img src={Service} alt="" className='w-[500px] border-2 rounded-lg ' />
  </div>
</div>

<div className=' m-auto text-center justify-center  leading-loose' >

  <h1 className='font-bold text-2xl'>Got any Queries?</h1>
  <p >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore suscipit rerum similique optio dolorum e!</p>
  <button className='border-2 w-[150px]  mt-5 rounded-xl bg-sky-950 p-3 mb-5 text-white'>Get in touch</button>
</div>

</>
  )
}

export default Service3