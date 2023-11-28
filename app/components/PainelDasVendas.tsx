"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState, useEffect } from "react";
import { serialize } from "cookie";
import { parseCookies } from 'nookies';
import Vendas from './Vendas';

type Props = {
    vendas: any;
    };

const PainelDasVendas = ({vendas}: Props) => {
  const router = useRouter();
  const [password, setPassword] = useState(false);
  const [filteredVendas, setFilteredVendas] = useState([]);

  
  //useEffect(() => {
    //const vendasFiltered = vendas.filter(venda => {
     // return venda.shippingMethod === "shipping" && /* Add condition to check if the item is shipped */;
    //});
   // setFilteredVendas(vendasFiltered);
 //}, [vendas]);
 


   // Check if the user is already logged in
   useEffect(() => {
    console.log("nookies")
    const cookies = parseCookies();
    console.log(cookies)
    const loggedIn = cookies['hasAccess'];
    console.log(loggedIn)
    if (loggedIn) {
      setPassword(true);
    }
  }, []);

  const handlePasswordSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const enteredPassword = (
      event.target as HTMLFormElement
    ).querySelector<HTMLInputElement>('input[name="password"]')?.value;

    

    // Send a POST request to the API route with the entered password
    const response = await fetch("/api/pass", {
      method: "POST",
      body: JSON.stringify({ password: enteredPassword }),
    });

    if (response.ok) {
      // Set a cookie to remember that the user is authorized
      const cookie = serialize(process.env.PASSWORD_COOKIE_NAME!, "true", {
        httpOnly: true,
        path: "/",
      });
      document.cookie = cookie;

      // Redirect to the protected content
      setPassword(true);
    } else {
      // Show an error message or redirect to an unauthorized page
      console.log("Incorrect password");
    }
  };

  return (
    <div className="w-full h-screen">
      {!password ? (
        <>
         <div className="w-full h-screen flex flex-col justify-center items-center">

      
          <div className=" text-3xl mb-8">Entre Palavra-Passe</div>

          <form
            className="w-full flex justify-center"
            onSubmit={handlePasswordSubmit}
          >
            <input
              className=" h-10  pl-6 bg-white text-black rounded-l-xl transition-all duration-150 w-[210px] sm:w-[300px] border-b-5 focus:rounded-l-3xl focus:outline-none"
              type="password"
              name="password"
            />
            <button className="bg-orange-300 rounded-r-xl w-32" type="submit">
              Submit
            </button>
          </form>
          </div>
        </>
      ) : (
        // Render the protected content
        <div className="w-full h-screen flex flex-col justify-start items-start">
          <h1 className="m-2 md:m-6 text-xl">Painel das Vendas</h1>
          <Vendas vendas={vendas}/>
        </div>
      )}
    </div>
  );
};

export default PainelDasVendas;
