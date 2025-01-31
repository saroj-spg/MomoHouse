import React from "react";
 import Person from "../../assets/person.png";
 import Button from "../../Components/Button"; 

 const Second = () => {
   return (
     <div className="flex items-center justify-center w-full p-8 border-2">
       <div className="w-1/2 flex justify-center">
         <div className="relative">
           <div className=" rounded-full h-[320px] w-[320px] absolute -z-10"></div>
           <img
             src={Person}
             alt="Customer Image"
             className="h-[400px] w-[320px] rounded"
           />
         </div>
       </div>

      
       <div className="w-1/2 flex flex-col space-y-6">
        
         <h1 className="text-4xl font-bold text-gray-800">
           Why Customers <span className="text-orange-600">Love Us</span>
         </h1>

        
         <p className="text-lg text-gray-600 leading-relaxed">
         Lorem ipsum dolor sit amet consectetur. Sed diam dolor vivamus nibh 
         fermentum vulputate tortor. Egestas facilisi luctus turpis arcu 
         dignissim. Amet neque enim etiam purus id. Tortor sit orci blandit
          cursus turpis.
          Lorem ipsum dolor sit amet consectetur. Sed diam dolor vivamus nibh 
         fermentum vulputate tortor. Egestas facilisi luctus turpis arcu 
         dignissim. Amet neque enim etiam purus id. Tortor sit orci blandit
          cursus turpis.
         </p>
         <div>
           <Button title= "Explore Our Story"/>
         </div>
       </div>
     </div>
   );
 };

 export default Second;
