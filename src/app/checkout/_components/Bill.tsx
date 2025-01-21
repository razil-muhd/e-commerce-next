'use client'
import useClients from '@/hook/useClients';
import { useCart } from '@mrvautin/react-shoppingcart';
import React from 'react'

const Bill = () => {
      const { totalShippingAmount,totalItemsAmount,cartTotal } = useCart();
      const client = useClients();
      if (!client) {
        return;
      }
  return (
    <div>
       <div className="flex justify-between px-12 py-6 ">
          <div>
            <h1 className="text-2xl font-semibold text-gray-800">Product</h1>
            <h1 className="text-lg text-gray-600">Shipping</h1>
            <h1 className="text-lg text-gray-600">Sub Total</h1>
            <h1 className="text-lg text-gray-600">Total</h1>
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-gray-800">Sub Total</h1>
            <h1 className="text-lg text-gray-600">{totalShippingAmount}</h1>
            <h1 className="text-lg text-gray-600">{Math.round(totalItemsAmount)}</h1>
            <h1 className="text-lg text-gray-600">{Math.round(cartTotal)}</h1>
          </div>
        </div>
    </div>
  )
}

export default Bill
