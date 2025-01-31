
import img1 from "../../assets/One_bg.jpg";
import Back1 from '../../assets/back1.png'
import Momo1 from '../../assets/momo1.png'
import Button from "../../Components/Button";
function First() {

  return (
    <div className="flex justify-around">
      <div className='border-red-300 mt-10'>
        <p>RESTAURANT</p>
        <h1 className="text-4xl leading-[48px]">The <span style={{backgroundImage:`url(${img1})`
        ,backgroundSize:"120px",
      }}
         className="inline-block h-10 text-center text-3xl text-white bg-center bg-contain bg-no-repeat w-32">#One
         </span><br/> Momo Restaurant</h1>
        <p className="text-2xl">More than 20+ Varities of momo available for you</p>
       
          <Button title='Explore food Menu'/>
       
      </div>
      
      <div className=" w-96 h-96 overflow-hidden relative flex justify-end left-40 ">
        <img src={Momo1} alt="" className="h-36 absolute z-30 top-16 right-16" />
        <img src={Back1} alt="" className="h-96 absolute -top-9 " />
      </div>

    </div>
  );
}

export default First;
