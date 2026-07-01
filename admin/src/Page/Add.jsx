import React, { useState } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios'
 import { toast, ToastContainer } from 'react-toastify';

const Add = ({url}) => {


  const [image, setImage] = useState(false)

  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad"
  })

  const onChangeHandler = (event) => {
    //  name='name'
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }))
  }


  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name",data.name)
    formData.append("description",data.description)
    formData.append("price",Number(data.price))
    formData.append("category",data.category)
    formData.append("image",image)
    const response = await axios.post(`${url}/api/food/add`,formData);
    if(response.data.success){
      setData({
        name:"",
        description:"",
        price:"",
        category:"Salad"
      })
      setImage(false)
      toast.success(response.data.message)
    }else{
      toast.error(response.data.message)
    }
  }


  return (
    <div className='w-[70%] ml-[max(5vw,25px)] mt-[50px] text-[#6d6d6d] text-xl '>
      <ToastContainer/>
      <form onSubmit={onSubmitHandler} className='flex flex-col' >
        <div>
          <p>Upload</p>
          <label htmlFor="image">
            <img className='w-[120px]' src={image ? URL.createObjectURL(image) : assets.upload_area} alt="" />
          </label>
          <input onChange={(e) => setImage(e.target.files[0])}
            type="file" id="image" hidden required />
        </div>


        <div className='w-[max(40%,280px)] mt-5'>
          <p>Product name</p>
          <input onChange={onChangeHandler} value={data.name}
            className='input-field p-[10px]' type="text" name='name' placeholder='type here' />
        </div>

        <div className='w-[max(40%,280px)] mt-5'>
          <p>product description</p>
          <textarea onChange={onChangeHandler} value={data.description} 
          className='input-field p-[10px]' name="description" rows='6' placeholder='write content here' required></textarea>
        </div>

        <div className='flex gap-10 mt-5'>
          <div className='w-max-[120px]'>
            <p>Product Category</p>
            <select onChange={onChangeHandler} className='input-field' name="category">
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwish">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodle</option>
            </select>
          </div>


          <div>
            <p>Product price</p>
            <input onChange={onChangeHandler} value={data.price} className='input-field' type="Number" name='price' placeholder='$20' />
          </div>

        </div>

        <button className='mt-5 w-[120px] border-0 cursor-pointer bg-black text-white p-2 rounded-2xl' type='submit'>ADD</button>
      </form>
    </div>
  )
}

export default Add 