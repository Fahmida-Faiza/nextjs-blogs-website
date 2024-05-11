"use client"
import Navbar from "@/components/Navbar";
import {useState, useEffect} from 'react';

export default function Home() {

  const [productForm, setProductForm] = useState({});
  const addProduct = async (e) =>{
    e.preventDefault();
    try {
      const response= await fetch('/api/product',{
        method: 'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(productForm)
      });

      if(response.ok){
        console.log('product add successfully')
      } else{
        console.log('error adding')
      }
      
    } catch (error) {
      console.log('Error', error)
    }

  }

  const handleChange = (e) => {
    setProductForm({ ...productForm, [e.target.name]: e.target.value });
  };
 
  return (
    <>
      <Navbar></Navbar>

      {/* display current */}

      <div>
        <input
        name='Title'
        onChange={handleChange}
          type="text"
          placeholder="Type here"
          className="input input-bordered input-primary w-full max-w-xs"
        />
      </div>
      <div>
        <input 
        name='Description'
        onChange={handleChange}
          type="text"
          placeholder="Type here"
          className="input input-bordered input-primary w-full max-w-xs"
        />
      </div>

      <button onClick={addProduct} type="submit" className="btn btn-primary ">
        Add Product
      </button>
    </>
  );
}