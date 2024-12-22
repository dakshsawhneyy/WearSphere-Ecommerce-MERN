import React, { useState } from 'react'
import { assets } from '../assets/assets'

const Add = () => {

  // making state variables to store images
  const [image1, setImage1] = useState(false)
  const [image2, setImage2] = useState(false)
  const [image3, setImage3] = useState(false)
  const [image4, setImage4] = useState(false)

  // making state variables to store items
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Men")
  const [subCategory, setSubCategory] = useState("Topwear")
  const [bestSeller, setBestSeller] = useState(false)
  const [sizes, setSizes] = useState(false)

  return (
    <form>
      <div className=''>
        <p className='text-xl'>Upload Image</p>
        <div className='flex gap-3 mt-3'>
          <label htmlFor="image1">
            <img src={assets.upload_area} className='w-24' alt="" />
            <input type="file" id='image1' hidden />
          </label>
          <label htmlFor="image1">
            <img src={assets.upload_area} className='w-24' alt="" />
            <input type="file" id='image2' hidden />
          </label>
          <label htmlFor="image1">
            <img src={assets.upload_area} className='w-24' alt="" />
            <input type="file" id='image3' hidden />
          </label>
          <label htmlFor="image1">
            <img src={assets.upload_area} className='w-24' alt="" />
            <input type="file" id='image4' hidden />
          </label>
        </div>
      </div>
      
      <div className='mt-5'>
        <p className='text-xl'>Product Name</p>
        <input type="text" placeholder='Type Here' className='p-2 rounded mt-4 border-2 max-w-[400px] w-full border-[#C586A5]' required/>
      </div>
    
      <div className='mt-4 sm:mt-5'>
        <p className='text-xl'>Product Name</p>
        <textarea type="text" placeholder='Type Here' className='p-2 rounded mt-4 max-w-[400px] w-full border-2 border-[#C586A5]' required/>
      </div>

      <div className='flex flex-col sm:flex-row gap-4 sm:gap-10'>
        <div>
          <p className='text-xl mt-2 sm:mt-4'>Sub Category</p>
          <select className='mt-1 p-3 border-2 border-[#C586A5] rounded'>
            <option className='' value="Topwear">Topwear</option>
            <option className='' value="Bottomwear">Bottomwear</option>
            <option className='' value="Winterwear">Winterwear</option>
          </select>
        </div>
        <div>
          <p className='text-xl mt-2 sm:mt-4'>Sub Category</p>
          <select className='mt-1 p-3 border-2 border-[#C586A5] rounded'>
            <option className='' value="Topwear">Topwear</option>
            <option className='' value="Bottomwear">Bottomwear</option>
            <option className='' value="Winterwear">Winterwear</option>
          </select>
        </div>
        <div className='sm:mt-4 mt-2'>
          <p className='text-xl'>Product Price</p>
          <input type="Number" className='mt-1 p-3 border-2 w-[90px] border-[#C586A5] rounded' placeholder='25' required />
        </div>
      </div>
      <div className='flex-col flex  mt-6'>
        <p className='text-xl'>Product Sizes</p>
        <div className='flex gap-2'>
          <div>
            <p className='bg-slate-200 px-3 py-1 cursor-pointer'>S</p>
          </div>
          <div>
            <p className='bg-slate-200 px-3 py-1 cursor-pointer'>M</p>
          </div>
          <div>
            <p className='bg-slate-200 px-3 py-1 cursor-pointer'>L</p>
          </div>
          <div>
            <p className='bg-slate-200 px-3 py-1 cursor-pointer'>XL</p>
          </div>
          <div>
            <p className='bg-slate-200 px-3 py-1 cursor-pointer'>XXL</p>
          </div>
        </div>
      </div>
      

      <div className='flex mt-3'>
        <input type="checkbox" />
        <p>Add to BestSeller</p>
      </div>

      <button className='mt-4 bg-black text-white p-3 rounded'>Add Product</button>

    </form>
  )
}

export default Add
