"use client"
import Navbar from "@/components/Navbar";
import {useState, useEffect} from 'react';

export default function Home() {

  const [productForm, setProductForm] = useState({});
  const [products, setProducts] = useState([]);

useEffect(() => {
  const fetchProducts = async()=>{
  const response= await fetch('/api/product')
       let rjson = await response.json()
       setProducts(rjson.products)
  }
  fetchProducts()
}, [])





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
    <div className="max-w-7xl mx-auto">
      <Navbar></Navbar>

      {/* display current */}

      <div className="text-center">
        <div>
          <input
            value={productForm?.Title || ""}
            name="Title"
            onChange={handleChange}
            type="text"
            placeholder="Title"
            className="input input-bordered input-primary w-full max-w-xs my-3"
          />
        </div>
        <div>
          <input
            value={productForm?.Description || ""}
            name="Description"
            onChange={handleChange}
            type="text"
            placeholder="Description"
            className="input input-bordered input-primary w-full max-w-xs my-3"
          />
        </div>

        <button onClick={addProduct} type="submit" className="btn btn-primary ">
          Add Blog
        </button>
      </div>

      <div>
        <h1 className="text-center font-bold text-3xl lg:text-5xl my-5">Display All Blogs</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-red-500 border-2">
          {products.map((product) => {
            return (
             
              <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                    alt="Shoes"
                    className="rounded-xl"
                  />
                </figure>
                <div
                  className="card-body items-center text-center"
                  key={product.Title}
                >
                  <h2 className="card-title">{product.Title}</h2>
                  <p>{product.Description}</p>
                  <div className="card-actions">
                    <button className="btn btn-primary">Read More</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}