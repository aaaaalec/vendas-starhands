import PainelDasVendas from "../components/PainelDasVendas";
import { groq } from "next-sanity"
import { client } from "@/sanity/lib/client"

export default async function Page() {
  const vendas = await client.fetch(
    groq`*[_type == "sale"]{
      _id,
      amount,
      description,
      datetime,
      paymentStatus,
      shippingMethod,
      shippingInfo{
        address,
        city,
        country,
        email,
        localidade,
        nif,
        nome,
        optin,
        phone,
        zip
      }
    }`,
    {
      next: { revalidate: 1 },
    }
  )
  
  return (
    <div>
     <PainelDasVendas vendas={vendas}/>
    </div>
  );
};


