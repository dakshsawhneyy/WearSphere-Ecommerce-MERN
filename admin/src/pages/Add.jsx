import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { toast } from 'react-toastify'
import axios from 'axios'
import { backend_url } from '../App'

const Add = ({token}) => {

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
  const [sizes, setSizes] = useState([]);

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {

      const formData = new FormData()

      formData.append("name",name)
      formData.append("description",description)
      formData.append("price",price)
      formData.append("category",category)
      formData.append("subCategory",subCategory)
      formData.append("BestSeller",bestSeller)
      formData.append("sizes",JSON.stringify(sizes))

      // By this we have to add all 4 images to work so we can add and in front which means we can only add 2 and submit
      image1 && formData.append("image1",image1)
      image2 && formData.append("image2",image2)
      image3 && formData.append("image3",image3)
      image4 && formData.append("image4",image4)

      const response = await axios.post(backend_url + '/api/product/add',formData,{headers:{token}})

      if(response.data.success){
        toast.success(response.data.message)
        setName('')
        setDescription('')
        setImage1(false)
        setImage2(false)
        setImage3(false)
        setImage4(false)
        setPrice('')
      }else{
        toast.error(response.data.message)
      }
      // console.log(response)

    } catch (error) {
      toast.error(error)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className=''>
        <p className='text-xl'>Upload Image</p>
        <div className='flex gap-3 mt-3'>
          <label htmlFor="image1">
            <img src={!image1 ? assets.upload_area : URL.createObjectURL(image1)} className='w-24 cursor-pointer' alt="" />
            <input onChange={(e)=>setImage1(e.target.files[0])} type="file" id='image1' hidden />
          </label>
          <label htmlFor="image2">
            <img src={!image2 ? assets.upload_area : URL.createObjectURL(image2)} className='w-24 cursor-pointer' alt="" />
            <input onChange={(e)=>setImage2(e.target.files[0])} type="file" id='image2' hidden />
          </label>
          <label htmlFor="image3">
            <img src={!image3 ? assets.upload_area : URL.createObjectURL(image3)} className='w-24 cursor-pointer' alt="" />
            <input onChange={(e)=>setImage3(e.target.files[0])} type="file" id='image3' hidden />
          </label>
          <label htmlFor="image4">
            <img src={!image4 ? assets.upload_area : URL.createObjectURL(image4)} className='w-24 cursor-pointer' alt="" />
            <input onChange={(e)=>setImage4(e.target.files[0])} type="file" id='image4' hidden />
          </label>
        </div>
      </div>
      
      <div className='mt-5'>
        <p className='text-xl'>Product Name</p>
        <input type="text" placeholder='Type Here' value={name} onChange={(e)=>setName(e.target.value)} className='p-2 rounded mt-4 border-2 max-w-[400px] w-full border-[#C586A5]' required/>
      </div>
    
      <div className='mt-4 sm:mt-5'>
        <p className='text-xl'>Product Description</p>
        <textarea type="text" placeholder='Type Here' value={description} onChange={(e)=>setDescription(e.target.value)} className='p-2 rounded mt-4 max-w-[400px] w-full border-2 border-[#C586A5]' required/>
      </div>

      <div className='flex flex-col sm:flex-row gap-4 sm:gap-10'>
        <div>
          <p className='text-xl mt-2 sm:mt-4'>Product Category</p>
          <select onChange={(e)=>setCategory(e.target.value)} className='mt-1 p-3 border-2 border-[#C586A5] rounded w-full'>
            <option className='' value="Men">Men</option>
            <option className='' value="Women">Women</option>
            <option className='' value="kids">kids</option>
          </select>
        </div>

        <div>
          <p className='text-xl mt-2 sm:mt-4'>Sub Category</p>
          <select onChange={(e)=>setSubCategory(e.target.value)} className='mt-1 p-3 border-2 border-[#C586A5] rounded'>
            <option className='' value="Topwear">Topwear</option>
            <option className='' value="Bottomwear">Bottomwear</option>
            <option className='' value="Winterwear">Winterwear</option>
          </select>
        </div>

        <div className='sm:mt-4 mt-2'>
          <p className='text-xl'>Product Price</p>
          <input type="Number" onChange={(e)=>setPrice(e.target.value)} value={price} className='mt-1 p-3 border-2 w-[90px] border-[#C586A5] rounded' placeholder='25' required />
        </div>
      </div>

      <div className='flex-col flex  mt-6'>
        <p className='text-xl'>Product Sizes</p>
        <div className='flex gap-2'>
          <div onClick={()=>setSizes(prev => prev.includes("S") ? prev.filter(item => item !== "S") : [...prev,"S"])}>  {/* This means if s is not there using filter create an array and remove s from it and if s is not there add s in array*/}
            <p className= {`${sizes.includes("S") ? "bg-red-700 text-white" : "bg-pink-100  "} px-3 py-1 cursor-pointer`}>S</p>
          </div>
          <div onClick={()=>setSizes(prev => prev.includes("M") ? prev.filter(item => item !== "M") : [...prev,"M"])}>
            <p className= {`${sizes.includes("M") ? "bg-red-700 text-white" : "bg-pink-100  "} px-3 py-1 cursor-pointer`}>M</p>
          </div>
          <div onClick={()=>setSizes(prev => prev.includes("L") ? prev.filter(item => item !== "L") : [...prev,"L"])}>
            <p className= {`${sizes.includes("L") ? "bg-red-700 text-white" : "bg-pink-100  "} px-3 py-1 cursor-pointer`}>L</p>
          </div>
          <div onClick={()=>setSizes(prev => prev.includes("XL") ? prev.filter(item => item !== "XL") : [...prev,"XL"])}>
            <p className= {`${sizes.includes("XL") ? "bg-red-700 text-white" : "bg-pink-100  "} px-3 py-1 cursor-pointer`}>XL</p>
          </div>
          <div onClick={()=>setSizes(prev => prev.includes("XXL") ? prev.filter(item => item !== "XXL") : [...prev,"XXL"])}>
            <p className= {`${sizes.includes("XXL") ? "bg-red-700 text-white" : "bg-pink-100  "} px-3 py-1 cursor-pointer`}>XXL</p>
          </div>
        </div>
      </div>

      <div className='flex mt-3 gap-2'>
        <input onChange={()=>setBestSeller(prev => !prev)} checked={bestSeller} type="checkbox" id='bestseller' />  {/* On change make if it is true make it false and vice versa */}
        <p className=''>Add to BestSeller</p>
      </div>

      <button className='text-white mt-4 bg-black p-3 rounded'>Add Product</button>

    </form>
  )
}

export default Add
