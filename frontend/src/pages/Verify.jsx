import React, { useContext, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
import { ShopContext } from '../context/ShopContext'

const Verify = () => {
  const { navigate, token, setCartItems, backendUrl } = useContext(ShopContext)
  const [searchParams] = useSearchParams()
  const success = searchParams.get('success')
  const orderId = searchParams.get('orderId')
  const userId = localStorage.getItem('userId') // ✅ Add this

  const verifyPayment = async () => {
    try {
      if (!token) return
      const response = await axios.post(
        `${backendUrl}/api/order/verifyStripe`,
        { success, orderId, userId }, // ✅ Include userId
        { headers: { token } }
      )

      if (response.data.success) {
        setCartItems({})
        toast.success("Payment verified successfully!")
        navigate('/orders')
      } else {
        toast.error("Payment failed or cancelled")
        navigate('/cart')
      }
    } catch (error) {
      console.log(error)
      toast.error("Verification failed: " + error.message)
    }
  }

  useEffect(() => {
    verifyPayment()
  }, [token])

  return (
    <div className="flex justify-center items-center h-[80vh] text-xl text-gray-600">
      Please wait, verifying your payment...
    </div>
  )
}

export default Verify
