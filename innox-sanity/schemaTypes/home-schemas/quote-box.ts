import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'quoteBox',
  title: 'Quote Box Section',
  type: 'object',
  fields: [
    defineField({
      name: 'quote',
      title: 'Quote Text',
      type: 'text',
      description: 'The main quote text to display',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
      description: 'Optional author of the quote',
    }),
    defineField({
      name: 'authorTitle',
      title: 'Author Title',
      type: 'string',
      description: 'Optional title/role of the author',
    }),
  ],

  preview: {
    select: {
      title: 'quote',
    },
    prepare({ title }) {
      return {
        title: `Quote: ${title ? title.slice(0, 40) + '...' : 'Untitled'}`,
        subtitle: 'Quote Box Section',
      }
    },
  },
})
