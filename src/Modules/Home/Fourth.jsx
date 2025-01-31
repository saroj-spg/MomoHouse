import React from "react";
import img from "../../assets/ourservice.png";
import play from "../../assets/videoplay.png";
import QualityFood from "../../assets/qualityfood.png";
import PrivateFood from "../../assets/privateparty.png";
import Categring from "../../assets/categring.png";
import Button from "../../Components/Button";
const Fourth = () => {
  return (
    <>
      <div className="mt-24  ">
        <h1 className="text-center text-3xl  mb-10 ">
          <span className="text-orange-600">We offer People</span> the service
          they want
        </h1>
        <div
          className="h-[800px] w-full  bg-contain bg-center bg-no-repeat text-center p-72 text-white "
          style={{ backgroundImage: `url(${img}) ` }}
        >
          <h1 className="text-4xl">Process Behind the Making</h1>
          <p>See how only chiefs cooks the best momos</p>
          <button className="h-12 w-52 mt-4 border-r-4   rounded-lg border-2 bg-sky-800">
            <img src={play} className="h-3 w-5 m-5"></img>
            <span className="relative -top-11 -right-5">Watch the video</span>
          </button>
        </div>
      </div>
      <div className=" mt-20 text-center items-center flex flex-col  justify-center  ">
        <div className="flex gap-16   ">
          <div className="  h-[200px]  ">
            <img src={QualityFood} alt="Quality Food" className="h-16 w-16 m-auto " />
            <h2 className="mt-4 text-lg font-semibold">Quality Food</h2>
            <p className="text-sm text-gray-600">
              Only the best food with top quality products and ingredients
            </p>
          </div>

          <div className=" h-[200px]">
            <img src={PrivateFood} alt="Private Party" className="h-16 w-16  m-auto " />
            <h2 className="mt-4 text-lg font-semibold">Private Party</h2>
            <p className="text-sm text-gray-600">
              Only the best food with top quality products and ingredients
            </p>
          </div>

          <div className="  h-[200px]">
            <img src={Categring} alt="Catering" className="h-16 w-16  m-auto " />
            <h2 className="mt-4 text-lg font-semibold">Catering</h2>
            <p className="text-sm text-gray-600">
              Only the best food with top quality products and ingredients
            </p>
          </div>
         
        </div>
        <Button title="  Explore Our Services"  />
       
      </div>
    </>
  );
};

export default Fourth;

