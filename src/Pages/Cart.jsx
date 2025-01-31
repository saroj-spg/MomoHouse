import { useContext } from "react";
import { cartContext } from "../Context/CartProvider";
import { IoLocationSharp } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { NavLink } from "react-router-dom";





function Cart() {
  const { state, dispatch } = useContext(cartContext);
  const totalAmount=state.cartItems.reduce((acc,item)=>{
    return acc+item.qty* item.caloriesPerServing;
  },0)

  const shippingCharge=state.cartItems.reduce((acc,item)=>{
    return acc+item.qty*100;
  },0)

  const totalProduct=state.cartItems.reduce((acc,item)=>{
    return acc+item.qty;
  },0)

  return (
    <div>
      <div className="">
        {state.cartItems.length > 0 ? (
          <div className="">
            {state.cartItems.map((Item) => {
              return (
                <div
                  key={Item.id}
                  className="flex rounded my-10 shadow-md shadow-slate-500 gap-x-10 m-auto w-[80%]"
                >
                  <div>
                    <img className="h-28" src={Item.image} alt="" />
                  </div>

                  <div className="flex">
                    <div className="mt-5 w-[574px]">
                      <p className="text-2xl">{Item.name}</p>
                      <p>Rs.{Item.caloriesPerServing}</p>
                      <button
                        onClick={() => {
                          dispatch({
                            type: "Delete",
                            payload: { id: Item.id },
                          });
                        }}
                        className="text-2xl text-red-600 "
                      >
                       <MdDelete />
                      </button>
                    </div>
                    <div className="mt-5 space-x-3 w-60 flex">
                      <button
                        onClick={() => {
                          dispatch({
                            type: "Increment",
                            payload: { id: Item.id },
                          });
                        }}
                        className="bg-slate-300 w-8 h-8 text-white rounded-xl"
                      >
                        +
                      </button>
                      <span className="text-lg">{Item.qty}</span>
                      <button
                        onClick={() => {
                          dispatch({
                            type: "Decrement",
                            payload: { id: Item.id },
                          });
                        }}
                        className="bg-slate-300 w-8 h-8 text-white rounded-xl"
                      >
                        -
                      </button>
                     
                      
                    </div>
                    
                  </div>
                </div>
              );
            })}
            <button
                        onClick={() => {
                          dispatch({
                            type: "Clear",
                            payload: { id: Item.id },
                          });
                        }}
                        className="bg-red-600  m-auto ml-44 w-24 my-10 h-8  text-white rounded-xl"
                      >
                       Clear
                      </button>

            <div className="flex-col ">
              <div className="border-2 rounded shadow-lg h-[500px] w-[600px] leading-10 p-5 m-auto mb-24 text-xl">
                <div>
                  <h2>Location</h2>
                  <p className="mt-2">
                    <IoLocationSharp className="inline mr-5 font-bold text-xl" />
                    Add Shipping Address
                  </p>
                </div>
                <hr />
                <h1 className="text-2xl font-bold">Order Summary</h1>
                <pre>Subtotal({totalProduct} items)            Rs.{totalAmount}</pre>
                <pre>Shipping fee({totalProduct} items)        Rs.{shippingCharge}</pre>
                <pre>Total                        Rs.{totalAmount+shippingCharge}</pre>
                <div className="mt-5 justify-center">
                 <NavLink to='/payment'>
                  <button className="w-full rounded-xl p-4 text-white text-center border-2 bg-orange-600">
                    PROCEED TO CHECKOUT
                    
                  </button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        ) : (
          
          <div className=" w-96 text-center   m-auto mt-20 ">
            <NavLink to="/menu">
              <img
                className="h-56"
                src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-illustration-download-in-svg-png-gif-file-formats--wishlist-bucket-shopping-state-pack-design-development-illustrations-1800917.png?f=webp"
                alt=""
              />
            </NavLink>
            <p className="p-5 text-2xl ">
              Empty Cart{" "}
              <NavLink to="/menu" className="underline text-red-500">
                Shop Now
              </NavLink>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;

