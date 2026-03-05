import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'functionalFeature',
  title: 'Functional Feature',
  type: 'object',
  fields: [
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'string',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'string',
    }),
  ],
})
