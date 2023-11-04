import { type SchemaTypeDefinition } from 'sanity'
import venda from './lib/vendasSchema'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [venda],
}
