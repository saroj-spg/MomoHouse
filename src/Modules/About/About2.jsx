import React from 'react';

import Play from '../../assets/videoplay.png';
import About2Image from '../../assets/about2.png';
import About3 from '../../assets/about3.png';
import About4 from '../../assets/about4.png';
import Ourservice from '../../assets/ourservice.png';


const About2 = () => {
  return (
    <>
      <div className=''>
        <img src={About2Image} alt="" />
        <div className="text-center relative -top-[300px] -left-[400px] text-white font-bold">
          <h1 className='text-4xl'>Process Behind the Making</h1>
          <p>See how only chiefs cook the best momos</p>
          <button className='h-12 w-52 mt-4 border-r-4 rounded-lg border-2 bg-sky-800'>
            <img src={Play} className='h-3 w-5 m-5' alt="Play Icon" />
            <span className='relative -top-11 -right-5'>Watch the video</span>
          </button>
        </div>
      </div>

      <div className='flex m-auto h-[600px] gap-5 mt-28'>
        <div className='w-[40%] ml-44'>
          <h1 className='text-2xl font-bold mb-10'>
            Our Momos are <span className='text-orange-700'>Made <br />with Love</span>
          </h1>
          <p className='leading-loose'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur corrupti
            consequatur fugiat delectus, reprehenderit id deserunt repellendus, blanditiis facilis
            ea adipisci incidunt alias et impedit nesciunt doloremque praesentium velit eligendi?
            Nisi optio nemo cum non, tempore aliquid. Aspernatur, laudantium ullam saepe magni
            accusamus, veritatis veniam sint id inventore cumque voluptatum pariatur nulla
            provident sequi voluptatibus! Quo cum saepe maiores quam?
          </p>
        </div>
        <img
          className='w-[200px] h-[200px] relative -bottom-[450px] -right-24 border-4 rounded-md'
          src="https://junifoods.com/wp-content/uploads/2023/11/Easy-Chicken-Momo-Dumplings-Sajilo-Kukhura-ko-Momo-%E0%A4%B8%E0%A4%9C%E0%A4%BF%E0%A4%B2%E0%A5%8B-%E0%A4%95%E0%A5%81%E0%A4%96%E0%A5%81%E0%A4%B0%E0%A4%BE%E0%A4%95%E0%A5%8B-%E0%A4%AE%E0%A4%AE.jpg"
          alt="Momo"
        />
        <img src={About3} alt="" className='mr-24 w-[50%]' />
      </div>

      <div className='flex flex-row-reverse m-auto h-[600px] gap-5 mt-28'>
        <div className='w-[40%] mr-44'>
          <h1 className='text-2xl font-bold mb-10'>
            Taste the difference with<br />
            <span className='text-orange-700'>Our handcrafted Momos</span>
          </h1>
          <p className='leading-loose'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur corrupti consequatur
            fugiat delectus, reprehenderit id deserunt repellendus, blanditiis facilis ea adipisci
            incidunt alias et impedit nesciunt doloremque praesentium velit eligendi? Nisi optio
            nemo cum non, tempore aliquid. Aspernatur, laudantium ullam saepe magni accusamus,
            veritatis veniam sint id inventore cumque voluptatum pariatur nulla provident sequi
            voluptatibus! Quo cum saepe maiores quam?
          </p>
        </div>
        <img
          className='w-[200px] h-[200px] relative -bottom-[450px] -left-24 border-4 rounded-md'
          src="https://junifoods.com/wp-content/uploads/2023/11/Easy-Chicken-Momo-Dumplings-Sajilo-Kukhura-ko-Momo-%E0%A4%B8%E0%A4%9C%E0%A4%BF%E0%A4%B2%E0%A5%8B-%E0%A4%95%E0%A5%81%E0%A4%96%E0%A5%81%E0%A4%B0%E0%A4%BE%E0%A4%95%E0%A5%8B-%E0%A4%AE%E0%A4%AE.jpg"
          alt="Momo"
        />
        <img src={About4} alt="" className='ml-24 w-[45%]' />
      </div>

      <div className='flex m-auto h-[600px] gap-5 mt-28'>
        <div className='w-[40%] ml-44'>
          <h1 className='text-2xl font-bold mb-10'>
            Our Momos are the<br /> perfect
            <span className='text-orange-700'> Blend of tradition</span> <br />
            and <span className='text-orange-700'>innovation</span>
          </h1>
          <p className='leading-loose'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur corrupti consequatur
            fugiat delectus, reprehenderit id deserunt repellendus, blanditiis facilis ea adipisci
            incidunt alias et impedit nesciunt doloremque praesentium velit eligendi? Nisi optio
            nemo cum non, tempore aliquid. Aspernatur, laudantium ullam saepe magni accusamus,
            veritatis veniam sint id inventore cumque voluptatum pariatur nulla provident sequi
            voluptatibus! Quo cum saepe maiores quam?
          </p>
        </div>
        <img
          className='w-[200px] h-[200px] relative -bottom-[450px] -right-24 border-4 rounded-md'
          src="https://junifoods.com/wp-content/uploads/2023/11/Easy-Chicken-Momo-Dumplings-Sajilo-Kukhura-ko-Momo-%E0%A4%B8%E0%A4%9C%E0%A4%BF%E0%A4%B2%E0%A5%8B-%E0%A4%95%E0%A5%81%E0%A4%96%E0%A5%81%E0%A4%B0%E0%A4%BE%E0%A4%95%E0%A5%8B-%E0%A4%AE%E0%A4%AE.jpg"
          alt="Momo"
        />
        <img src={Ourservice} alt="" className='mr-24 w-[30%]' />
      </div>

      
    </>
  );
};

export default About2;
