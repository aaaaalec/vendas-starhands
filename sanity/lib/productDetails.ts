import { SchemaTypeDefinition, FieldDefinition } from 'sanity';

const productDetails: FieldDefinition = {
 name: 'productDetails',
 title: 'Product Details',
 type: 'object',
 fields: [
   {
     name: 'productName',
     title: 'Product Name',
     type: 'string',
     description: 'The name of the product',
   },
   {
     name: 'pricePerItem',
     title: 'Price per Item',
     type: 'number',
     description: 'The price per item',
   },
   {
     name: 'totalPrice',
     title: 'Total Price',
     type: 'number',
     description: 'The total price for the quantity of this item',
     // Calculate the total price based on the quantity and price per item
     value: ({ document }) => document.quantity * document.pricePerItem,
   },
   {
     name: 'hadSale',
     title: 'Had Sale',
     type: 'boolean',
     description: 'Whether the item had a sale',
   },
   {
     name: 'quantity',
     title: 'Quantity',
     type: 'number',
     description: 'The quantity of the product in the sale',
   },
   {
     name: 'attributes',
     title: 'Attributes',
     type: 'array',
     of: [{ type: 'string' }],
     description: 'Other attributes of the product',
   },
   {
     name: 'productLink',
     title: 'Product Link',
     type: 'url',
     description: 'A link to the product on the website',
   },
 ],
};

export default productDetails;
