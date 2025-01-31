import React, { useState } from 'react'

const Signup = () => {
  const [name,setName]=useState();
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
  const [cpassword,setCPassword]=useState();
  const [phone,setPhone]=useState();

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(cpassword!==password){
      return alert("password donot match");
    }
    if(password<8){
      return alert("password must be 8 characters");
    }
    
    //console.log(name,email,password,phone);
    
    
    alert("  sucessfully signup");
    setName("");
    setEmail("");
    setPassword("");
    setCPassword("");
    setPhone("");
  }

  return (
    <div className="flex pt-7 justify-center">
      <div className=' shadow-2xl  shadow-slate-500'>
        <img  className=' h-72 ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjt6kYNwFy4_gStca5N_ZMrGu0SjfwN9IvGQ&s" alt="" />
      </div>
       <div>
          <form onSubmit={handleSubmit}
          className="border-2 border-gray-300 bg-white w-[500px]   p-5  m-auto gap-y-1 flex flex-col rounded-md shadow-lg">
          <h1 className="text-center font-bold">Sign Up</h1>
            
          <label htmlFor="email" className="text-gray-700 font-semibold mb-1">
             Name
            </label>
            <input
onChange={(e)=>{
  setName(e.target.value);
}}
              type="name"
              value={name}
              id="name"
              required
              placeholder="Enter your name"
              className="h-10 border border-gray-300 rounded-md shadow-sm outline-none focus:ring-2 focus:ring-blue-500 p-2 mb-4"
            />
            <label htmlFor="name" className="text-gray-700 font-semibold mb-1">
              Email
            </label>
            <input
            onChange={(e)=>{
              setEmail(e.target.value);
            }}
              type="email"
              id="email"
               value={email}
              required
              placeholder="Enter your Email"
              className="h-10 border border-gray-300 rounded-md shadow-sm outline-none focus:ring-2 focus:ring-blue-500 p-2 mb-4"
            />
             <label htmlFor="phone" className="text-gray-700 font-semibold mb-1">
              Phone
            </label>
            <input
            onChange={(e)=>{
              setPhone(e.target.value);
            }}
              type="tel"
              id="phone"
               value={phone}
              required
              placeholder="Enter your Phone number"
              className="h-10 border border-gray-300 rounded-md shadow-sm outline-none focus:ring-2 focus:ring-blue-500 p-2 mb-4"
            />
            <label htmlFor="password" className="text-gray-700 font-semibold mb-1">
              Password
            </label>
            <input
            onChange={(e)=>{
              setPassword(e.target.value);
            }}
              type="password"
              id="password"
              value={password}
              required
              placeholder="Enter your Password"
              className="h-10 border border-gray-300 rounded-md shadow-sm outline-none focus:ring-2 focus:ring-blue-500 p-2 mb-4"
            />
            <label htmlFor="confirm-password" className="text-gray-700 font-semibold mb-1">
             ConfirmPassword
            </label>
            <input
            onChange={(e)=>{
              setCPassword(e.target.value);
            }}
              type="password"
              id="cpassword"
              value={cpassword}
              required
              placeholder="Confirm your Password"
              className="h-10 border border-gray-300 rounded-md shadow-sm outline-none focus:ring-2 focus:ring-blue-500 p-2 mb-4"
            />

            <input
              type="submit"
              value="SignUp"
              required
              className="h-10 bg-blue-500 text-white font-semibold rounded-md shadow-sm cursor-pointer hover:bg-blue-600 transition mb-4"
            />
            
   <p className=' font-bold text-center my-2'>Already have Account?</p>
            <input
  type=""
  
  value="Login"
  className="h-10 bg-blue-500 text-white text-center font-semibold rounded-md shadow-sm cursor-pointer hover:bg-blue-600 transition mb-4"
  onClick={() => window.location.href = '/login'} 
/>

            
          </form>
          </div>
        </div>
  )
}

export default Signup