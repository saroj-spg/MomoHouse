import React from 'react';
import { useSearchParams } from 'react-router-dom';

const Success = () => {
  const [searchparams] = useSearchParams(); 
  const res = searchparams.get("data");
  console.log(res);
  const decoded = atob(res || "");
  let x = JSON.parse(decoded || "{}");
  return (
    <div className='  flex flex-col justify-center rounded-xl border-2 w-96 shadow-xl m-auto p-2 mt-20'>
        <img src="https://urbanutilities.co.za/wp-content/uploads/2019/08/Payment-success.png" alt="" />
   
    <h1>Payment success</h1>
      <p>TotalAmount: Rs.{x.total_amount}</p>
      <p>Status.{x.status}</p>
      <p>Transaction_id{x.transaction_code}</p>
    </div>
  );
}

export default Success;
