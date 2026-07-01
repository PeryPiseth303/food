import React from 'react'
import { useContext } from 'react'
import {UNSAFE_getPatchRoutesOnNavigationFunction, useNavigate, useSearchParams} from 'react-router-dom'
import { StoreContext } from './context/StoreContext'
import axios from 'axios'
import { useEffect } from 'react'
const Verify = () => {

    const [searchParams,setSearchParams] = useSearchParams()
    const success = searchParams.get("success")
    const orderId = searchParams.get("orderId")
    const {url} = useContext(StoreContext)
    const navigate = useNavigate()

    const verifyPayment = async() =>{
        const response = await axios.post(url+"/api/order/verify",{success,orderId})
        if(response.data.success){
            navigate("/myorders")
        }
        else{
            navigate("/")
        }
    }

    useEffect(()=>{
        verifyPayment()
    },[])


  return (
    <div className='min-h-[60vh] grid mt-10'>
        <div className="w-24 h-24 border-4 border-gray-300 border-t-red-500 rounded-full animate-spin place-self-center">

        </div>
    </div>
  )
}

export default Verify