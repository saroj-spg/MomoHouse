import React from "react";
import img1 from '../../assets/dot.png'
import img2 from '../../assets/allergyadvice.png'

const AdviceTwo = () => {
  return (
    <div
  className="bg-gray-50 p-8 relative"
  
  
>
  

      <h1 className="text-center mt-10">
        <span className="text-orange-500 text-xl font-bold">Ingredient's</span>
        Used
      </h1>
      <div
    style={{
      backgroundImage: `url(${img2})`,
      backgroundPosition: 'center', 
      backgroundSize: 'contain', 
      backgroundRepeat: 'no-repeat', 
    }} 
      className="fex flex-col flex-wrap gap-8 justify-center 
      ">
       
      <div
  className="bg-white p-6 border-2 border-blue-300 shadow-md rounded-md flex-1 w-[45%] m-auto items-center mb-6 "
  style={{
    backgroundImage: `url(${img1})`,
            backgroundPosition: 'top left', 
            backgroundSize: 'contain', 
            backgroundRepeat: 'no-repeat',
    

  }}
>
  <h2 className="text-lg font-semibold text-blue-600 mb-4">For the Dough</h2>
  <ul className="list-disc list-inside text-gray-700">
    <li>120gms refined flour</li>
    <li>1 tsp baking powder</li>
    <li>1 tbsp salt water (for kneading)</li>
  </ul>
</div>

        <div className="bg-white p-6  border-2 border-blue-300 shadow-md rounded-md flex-1 w-[45%] m-auto items-center  mb-6">
          <h2 className="text-lg font-semibold text-blue-600 mb-4">
            For the Chiken FIlling
          </h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>1 cup chicken(minced)</li>
            <li>1 small onion, finely chopped</li>
            <li>1/4 tsp black pepper powder</li>
            <li>1 tsb oil </li>
            <li>1/2 tsp garlic paste </li>
            <li>1/2 tsp soya sauce </li>
            <li>Salt </li>
            <li>1/4 tsp vinegar </li>
          </ul>
    
        </div>
        <div className="bg-white p-6   border-2 border-blue-300 shadow-md rounded-md flex-1 w-[45%] m-auto items-center  mb-6">
          <h2 className="text-lg font-semibold text-blue-600 mb-4">
            For the Vegeterian  Filling
          </h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>1 cup cabbage and caroots,grated</li>
            <li>2 tsbs onions, finely choped</li>
            <li>1/2 tsp garlic, finely chooped</li>
            <li> 1 tbsp oil </li>
            <li>1/4 rsb vinegar </li>
            <li>1/2 tsp soya sauce </li>
            <li>to taste salt </li>
            <li>to taste pepper </li>
            <li>1 tbsp cornflour </li>
          </ul>
        </div>
        <div className="bg-white p-6  border-2 border-blue-300 shadow-md rounded-md flex-1 w-[45%] m-auto items-center  mb-6"
        style={{
          backgroundImage: `url(${img1})`,
                  backgroundPosition: 'top right', 
                  backgroundSize: 'contain', 
                  backgroundRepeat: 'no-repeat',
          
      
        }}>
          <h2 className="text-lg font-semibold text-blue-600 mb-4">
            For chill sauce
          </h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>25 gram garlic, peeled</li>
            <li>6 gms whole red chillies</li>
            <li>3 tsbp vinegar</li>
            <li>1 tbsp vinegar </li>
            <li>1 tbsp oil </li>
            <li>to taste salt </li>
            <li>to taste sugar </li>
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdviceTwo;
