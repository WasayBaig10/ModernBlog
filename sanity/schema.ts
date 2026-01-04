import { type SchemaTypeDefinition } from 'sanity'
import post from './schemaTypes/post'
import author from './schemaTypes/author'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, author],
}
