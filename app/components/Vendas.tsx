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
  return (
    <div className='px-2 md:px-6  w-full'>
        <h1 className='border-b-2 border-white w-full'>Vendas</h1>
        <table>
      <thead>
        <tr>
        <th>Shipped</th>
         
          <th>Amount</th>
          <th>Description</th>
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
             <td>
              <input type="radio" id={`shipped-${index}`} name={`shipped-${index}`} />
              <label htmlFor={`shipped-${index}`}>Shipped</label>
            </td>
           
            <td>{venda.amount}</td>
            <td>{venda.description}</td>
            <td>{venda.datetime}</td>
            <td>{venda.paymentStatus}</td>
            <td>{venda.paymentDatetime}</td>
            <td>{venda.shippingMethod}</td>
            <td>{JSON.stringify(venda.shippingInfo)}</td>
            <td>{venda.id}</td>
           
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  )
}

export default Vendas