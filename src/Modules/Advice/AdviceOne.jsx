import React from 'react'
import Service1 from '../../assets/Service1.png'
import img1 from '../../assets/dot.png'
const AdviceOne = () => {
  return (
    <div className='flex justify-center gap-24'>
        <div className='w-[40%] p-3 m-4 leading-10 '>
            <h1 className='my-4 tex-2xl font-bold'>Allergy Advice</h1>
            <p className='my-4 text-slate-500'>AT OUR RESTURANAT</p>
            <p className='text-xl font-bold text-justify'>
                We use only the freshest and highest<br/> quality indegredients in all our dishes,<br/><span className='text-orange-600'>and offer transparency in our ingredient <br/>labeling.</span> 
                             </p>
        </div>
        <div className='w-[40%] mt-4'>
            <img
            src={Service1} alt="" className='w-[400px]' />
        </div>

    </div>
  )
}

export default AdviceOne