
import React, { useEffect } from 'react'
import axios from 'axios';
import { useState } from 'react';
const getdata=()=>{
    return axios.get(`https://sephorajsonserver.onrender.com/Cart`)
   
  }

export const Cart = () => {
  const [data,setData]=useState()
  console.log(data)
  useEffect(()=>{
      getdata().then(res=>setData(res.data)
   )
      .catch((err)=>{console.log(err)})
  },[])
  return(<div>
        {
  data?.map((it)=> <div>
            <img src={it.imagePath} alt={it.name} />,
        <h1 as='h4' fontSize='md'>{it.name}</h1>,
        <h1 fontSize='md'>&#8377; { it.mrpRange.min}</h1>,
        </div>
  )
        }
    </div>
)
}