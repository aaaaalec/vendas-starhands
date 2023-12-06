"use client";

import React, {useState} from "react";
import ShippingInfoModal from "./ShippingInfoModal";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/components/ui/table";
import { Button } from "./ui/button";

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
    let formattedDate =
      date.getFullYear() +
      "-" +
      ("0" + (date.getMonth() + 1)).slice(-2) +
      "-" +
      ("0" + date.getDate()).slice(-2);
    return formattedDate;
  }

  const hasPaidStatus = props.vendas.some(venda => venda.paymentStatus === 'Paid');

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };
 
  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="px-2 md:px-6  w-full">
      <h1 className="border-b-2 border-white w-full">Vendas</h1>
      <Table className="overflow-auto table-auto">
        <TableHeader>
          <TableRow className="bg-red border-2 border-b-white ">
          <TableHead>Payment Status</TableHead>
         
              {hasPaidStatus ? (
               <>
           
            <TableHead>Payment Datetime</TableHead>
            <TableHead className="w-12 bg-white/20">Shipped</TableHead>
            </>
             ) : null}
            <TableHead>Amount</TableHead>
            <TableHead className="min-w-46 bg-white/20">Description</TableHead>
            <TableHead>Datetime</TableHead>
            <TableHead>Shipping Method</TableHead>
            <TableHead>Shipping Info</TableHead>
            <TableHead>ID</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {props.vendas.map((venda, index) => (
            <>
            
            <TableRow className={hasPaidStatus ? "" : "bg-red-500" }key={index}>
               <TableCell className=" bg-red-200/20">{venda.paymentStatus}</TableCell>
              {venda.paymentStatus === 'Paid' ? (
               <>
                <TableCell className=" bg-red-200/20">{formatDate(venda.paymentDatetime)}</TableCell>
              <TableCell className=" bg-red-200/20">
                <input
                  type="radio"
                  id={`shipped-${index}`}
                  name={`shipped-${index}`}
                />
                <label htmlFor={`shipped-${index}`}></label>
              </TableCell>
               </>
             ) : null}
              <TableCell className=" bg-red-200/20">{venda.amount}€</TableCell>
              <TableCell className=" bg-red-200/20">{venda.description}</TableCell>
              <TableCell className=" bg-red-200/20">{formatDate(venda.datetime)}</TableCell>
             
              <TableCell className=" bg-red-200/20">{venda.shippingMethod}</TableCell>
              <TableCell className=" bg-red-200/20">
              <Button className="hover:bg-red-500 bg-slate-500" onClick={handleModalOpen}>Show Shipping Info</Button>
               <ShippingInfoModal
        
            shippingInfo={venda.shippingInfo}
            isOpen={isModalOpen}
            onClose={handleModalClose}
          />
              </TableCell>
              <TableCell className=" bg-red-200/20">{venda.id}</TableCell>
            </TableRow>
           
         </> ))}
        </TableBody>
      </Table>
      
    </div>
  );
};

export default Vendas;
