'use client';

import React from 'react'

type Venda = {
  id: string;
  amount: number;
  description: string;
  datetime: string;
  paymentStatus: string;
  paymentDatetime: string;
  shippingMethod: string;
  shippingInfo: {
    shippingAddress: string;
    name: string;
    nif: string;
    email: string;
    phone: string;
    zip: string;
    city: string;
    localidade: string;
    country: string;
    optin: boolean;
  };
};

type Props = {
  vendas: Venda[];
};

const Vendas = (props: Props) => {

  function formatDate(datetime: string) {
    let date = new Date(datetime);
    let formattedDate = date.getFullYear() + '-' + 
                       ('0' + (date.getMonth()+1)).slice(-2) + '-' + 
                       ('0' + date.getDate()).slice(-2);
    return formattedDate;
  }


  return (
    <div className='px-2 md:px-6  w-full'>
        <h1 className='border-b-2 border-white w-full'>Vendas</h1>
        <table className='overflow-auto table-auto'>
      <thead>
        <tr className='bg-red border-2 border-b-white '>
        <th className='w-12 bg-white/20'>Shipped</th>
          <th>Amount</th>
          <th className='min-w-46 bg-white/20'>Description</th>
          <th>Datetime</th>
          <th>Payment Status</th>
          <th>Payment Datetime</th>
          <th>Shipping Method</th>
          <th>Shipping Info</th>
          <th>ID</th>
        </tr>
      </thead>
      <tbody>
        {props.vendas.map((venda, index) => (
          <tr key={index}>
             <td className=' bg-red-200/20'>
              <input type="radio" id={`shipped-${index}`} name={`shipped-${index}`} />
              <label htmlFor={`shipped-${index}`}></label>
            </td>
            <td className=' bg-red-200/20'>{venda.amount}€</td>
            <td className=' bg-red-200/20'>{venda.description}</td>
            <td className=' bg-red-200/20'>{formatDate(venda.datetime)}</td>
            <td className=' bg-red-200/20'>{venda.paymentStatus}</td>
            <td className=' bg-red-200/20'>{venda.paymentDatetime}</td>
            <td className=' bg-red-200/20'>{venda.shippingMethod}</td>
            <td className=' bg-red-200/20'>{JSON.stringify(venda.shippingInfo)}</td>
            <td className=' bg-red-200/20'>{venda.id}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  )
}

export default Vendas
