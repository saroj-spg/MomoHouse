import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import QR from "../assets/qr.png"
import { IoMdPhonePortrait } from "react-icons/io";
import Footer from "../Components/Footer";
function Menu() {
  const [product, setProducts] = useState([]);
  const getProduct = async () => {
    try {
      let res = await fetch("https://dummyjson.com/recipes");
      res = await res.json();
      console.log(res);
      setProducts(res.recipes);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <>
      <div className="text-center m-auto mt-20">
        <h1 className="mb-11 font-allura text-3xl font-bold"> OurMenu</h1>
        <p className="text-orange-600 text-2xl font-bold">
          Our menu is more than just momos
        </p>
        <p className="text-2xl">
          with a variety of dishes to cater to all tastes and preferences.
        </p>
      </div>
      <div className="text-center m-auto mt-20">
        <h1 className="mb-2 font-allura text-3xl font-bold">
          Scan the QR code
        </h1>
        <p>You can also check the allergy advices using your phone as well</p>
        <img src={QR} alt="" className="m-auto" />
        <p className="text-orange-600 inline text-2xl">Scan</p>
        <span>ME! </span>
        <IoMdPhonePortrait className="m-auto inline" />
      </div>
      <h1 className="text-center  mt-20 text-3xl text-orange-600">
        BUFF <span className="text-black">MOMO'S</span>
      </h1>
      <div className="mt-10 flex m-auto mb-20 justify-center gap-2 flex-wrap"></div>

      <div>
        {product.length > 0 ? (
          <div className="border-2 border-red-700 flex flex-wrap">
            {product.map((item, index) => {
              return (
                <div
                  key={index}
                  className="rounded-2xl shadow-2xl p-2 flex items-center 
                justify-center flex-col w-52 gap-10 m-5 shadow-slate-600"
                >
                  <NavLink to={`/productDescription/${item.id}`}>
                    <img src={item.image} alt="" className="h-28 rounded-xl" />
                    <p>{item.name}</p>
                  </NavLink>
                </div>
              );
            })}
          </div>
        ) : (
          <div>
            <div className="mt-24 shadow rounded-md p-4 max-w-sm w-full mx-auto">
              <div className="animate-pulse flex space-x-4">
                <div className="rounded-full bg-slate-500 h-10 w-10"></div>
                <div className="flex-1 space-y-6 py-1">
                  <div className="h-2 bg-slate-500 rounded"></div>
                  <div className="space-y-3">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="h-2 bg-slate-500 rounded col-span-2"></div>
                      <div className="h-2 bg-slate-500 rounded col-span-1"></div>
                    </div>
                    <div className="h-2 bg-slate-500 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Menu;
