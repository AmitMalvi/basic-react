
import React, { useState } from "react";


function Product(){

    const [email,setEmail] = useState('');
    const [pass,setPassword] = useState(0);

    const passHandle = (e)=>{
        setPassword(pass+1);
        console.log(pass);
    }


    return (
        <>
        <div className="mb-3">

            <h1>{pass}</h1>
  <label for="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
</div>
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>

  <button className="btn btn-danger" onClick={passHandle}>Click Me</button>
</div>

</>
    )
}


export default Product;