import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

const List = ({url}) => {

  const [list, setList] = useState([])

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`)
    if (response.data.success) {
      setList(response.data.data)
    } else {
      toast.error("Eorror")
    }
  }

  const removeFood = async (foodId) => {
    const response = await axios.post(`${url}/api/food/remove`, { id: foodId })
    await fetchList();
    if (response.data.success) {
      toast.success(response.data.message)
    } 
    else {
      toast.error("Error")
    }
  }

  useEffect(() => {
    fetchList()
  }, [])

  return (
    <div className='p-6 md:p-10'>
      <p className='text-2xl font-semibold mb-6'>All Food List</p>

      <div className='w-full overflow-x-auto'>

        {/* Header */}
        <div className='grid grid-cols-[80px_2fr_1fr_1fr_80px] 
        items-center gap-4 px-4 py-3 
        bg-gray-100 border border-gray-200 
        text-sm font-semibold text-gray-700 rounded-t'>

          <p>Image</p>
          <p>Name</p>
          <p>Category</p>
          <p>Price</p>
          <p className='text-center'>Action</p>
        </div>

        {/* Rows */}
        {list.map((item) => (
          <div
            key={item._id}className='grid grid-cols-[80px_2fr_1fr_1fr_80px] items-center gap-4 px-4 py-3
          border border-gray-200 border-t-0 text-sm hover:bg-gray-50 transition'>

            {/* Image */}
            <div className='flex justify-center'>
              <img
                src={`${url}/image/` + item.image}
                alt=''
                className='w-12 h-12 object-cover rounded-md'
              />
            </div>

            {/* Name */}
            <p className='text-gray-800 font-medium truncate'>
              {item.name}
            </p>

            {/* Category */}
            <p className='text-gray-600'>
              {item.category}
            </p>

            {/* Price */}
            <p className='text-gray-800 font-medium'>
              ${item.price}
            </p>

            {/* Action */}
            <p
              onClick={() => removeFood(item._id)}
              className='cursor-pointer text-red-500 hover:text-red-700 font-bold text-center'
            >
              ✕
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default List