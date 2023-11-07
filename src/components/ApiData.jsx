import { useEffect, useState } from "react";
import React from 'react';

const ApiData = () => {
    const [data, setData]=useState([]);

    const getData = async () =>{
        try {
            const res=  await fetch('https://fakestoreapi.com/products');
            const SData = await res.json();
            console.log(SData);
            setData(SData);
        }
        catch (err){
            console.log(err);
        }
    }

    useEffect(()=>{
        getData();
    },[])

  return (
    <>

    {data.map((crr) => {
        return(

    <div className='ProductCard'>
    <div className='card'>
  <img src={crr.image} class="card-img-top" alt="ImageNotFound" className='ProductDis'/>
  <div class="card-body">
    <p class="card-text">{crr.category}</p>
    <h5 class="card-title">${crr.price}</h5>
  </div>
</div>
    </div>
        )
    })}

    </>
  )
}

export default ApiData