import { SchemaTypeDefinition } from 'sanity';


const venda: SchemaTypeDefinition = {
    name: 'sale',
    title: 'Sale',
    type: 'document',
    fields: [
      {
        name: 'id',
        title: 'ID',
        type: 'string',
        description: 'The ID of the sale',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'amount',
        title: 'Amount',
        type: 'number',
        description: 'The amount of the sale',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'description',
        title: 'Description',
        type: 'string',
        description: 'The description of the sale',
      },
      {
        name: 'datetime',
        title: 'Datetime',
        type: 'datetime',
        description: 'The datetime of the sale',
      },
      {
        name: 'paymentStatus',
        title: 'Payment Status',
        type: 'string',
        description: 'The payment status of the sale',
        options: {
          list: [
            { title: 'Unpaid', value: 'unpaid' },
            { title: 'Paid', value: 'paid' },
          ],
        },
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'paymentDatetime',
        title: 'Payment Datetime',
        type: 'datetime',
        description: 'The datetime of the payment',
      },
      {
        name: 'shippingMethod',
        title: 'Shipping Method',
        type: 'string',
        description: 'The shipping method (e.g., in-store pickup, shipping)',
      },
      {
        name: 'shippingInfo',
        title: 'Shipping Information',
        type: 'object',
        fields: [
          {
            name: 'address',
            title: 'Shipping Address',
            type: 'string',
            description: 'The shipping address',
          },
          {
            name: 'nome',
            title: 'Nome',
            type: 'string',
            description: 'The name of the recipient',
          },
          {
            name: 'nif',
            title: 'NIF',
            type: 'string',
            description: 'The NIF (tax identification number) of the recipient',
          },
          {
            name: 'email',
            title: 'Email',
            type: 'string',
            description: 'The email address of the recipient',
          },
          {
            name: 'phone',
            title: 'Phone',
            type: 'string',
            description: 'The phone number of the recipient',
          },
          {
            name: 'zip',
            title: 'ZIP',
            type: 'string',
            description: 'The ZIP code of the recipient',
          },
          {
            name: 'city',
            title: 'City',
            type: 'string',
            description: 'The city of the recipient',
          },
          {
            name: 'localidade',
            title: 'Localidade',
            type: 'string',
            description: 'The localidade of the recipient',
          },
          {
            name: 'country',
            title: 'Country',
            type: 'string',
            description: 'The country of the recipient',
          },
          {
            name: 'optin',
            title: 'Opt-in',
            type: 'boolean',
            description: 'Whether the recipient has opted in',
          },
        ],
      },
    ],
  };
  
  export default venda;
