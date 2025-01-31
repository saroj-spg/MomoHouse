import React, { useEffect, useState } from 'react'
import Button from '../../Components/Button'

const Third = () => {

  const [products, setProducts] = useState([])
  const [filterproducts, setFilterProduct] = useState([]);
  const getData = async () => {
    const response = await fetch('https://dummyjson.com/recipes?');
    const data = await response.json();
    console.log(data.recipes);
    setProducts(data.recipes);
  }

  useEffect(() => {
    getData();
  }, []);

  const getFilterProducts = (country) => {
    const filterItem = products.filter((product) => {
      return product.cuisine == country;

    });
    setFilterProduct(filterItem);
  }
  return (
    <div className=' flex flex-col items-center leading-10'>
      <div className='text-center'  >
        <h1 className='text-2xl'>Our Most <span className='text-orange-600 '>Popular</span>  Recipes</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius ducimus atque magni illum eaque </p>
      </div>
      {/* Italian */}

      <div className='border-2 gap-x-10 text-xl mt-2'>
        <button onClick={() => getFilterProducts("Mexican")}
          className='border-2 hover:border-black py-1 w-24 rounded-full bg-slate-200'>Mexican</button>
        <button onClick={() => getFilterProducts("Indian")}
          className='border-2 hover:border-black w-24 py-1 rounded-full bg-slate-200' >Indian</button>
        <button onClick={() => getFilterProducts("American")}
          className='hover:border-2 border-black w-24 py-1 rounded-full bg-slate-200'>American</button>
          <button onClick={() => getFilterProducts("Italian")}
          className='hover:border-2 border-black w-24 py-1 rounded-full bg-slate-200'>Italian</button>
          <button onClick={() => getFilterProducts("Asian")}
          className='hover:border-2 border-black w-24 py-1 rounded-full bg-slate-200'>Asian</button>
      </div>
      <div className='  w-[80%] flex flex-wrap gap-5 mt-5 py-2 items-center justify-center shadow-md '>

        {filterproducts.length > 0 ? (
          filterproducts.map((item, index) => {
            return (
              <div
                key={index}
                className=" 
               flex flex-col  items-center justify-center p-4 w-56 text-center
                h-44 shadow-md shadow-slate-400   "
              >
                <img src={item.image} className="h-24  w-24 " alt="" />
                <p>{item.name}</p>
                <p>Rs.{item.caloriesPerServing}</p>
              </div>
            );
          })
        ) : products.length > 0 ? (
          products.map((item, index) => {
            return (
              <div
                key={index}
                className=" 
                 flex flex-col  items-center justify-center p-4 w-56 text-center
                  h-44 shadow-md shadow-slate-400   "
              >
                <img src={item.image} className="h-24  w-24 " alt="" />
                <p>{item.name}</p>
                <p>Rs.{item.caloriesPerServing}</p>
              </div>
            );
          })
        ) : (
          <div>Loading...</div>
        )}
      </div>
      <Button title="Explore Our  Menu" />
    </div>
  );
}


export default Third