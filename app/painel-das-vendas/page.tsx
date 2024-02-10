import PainelDasVendas from "../components/PainelDasVendas";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";

export const revalidate = 0;

export default async function Page() {
  const vendas = await client.fetch(
    groq`*[_type == "sale"] | order(datetime desc) [0...100] {
      _id,
      amount,
      description,
      datetime,
      paymentStatus,
      shippingMethod,
      products,
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
  );

  return (
    <div>
      <PainelDasVendas vendas={vendas} />
    </div>
  );
}
