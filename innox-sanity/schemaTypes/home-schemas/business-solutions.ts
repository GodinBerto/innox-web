import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'businessSolutions',
  title: 'Business Solutions',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      initialValue: 'Business Solutions With',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'highlightedText',
      title: 'Highlighted Text',
      type: 'string',
      description: 'The text that appears with gradient styling (e.g., "InnoX")',
      initialValue: 'InnoX',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'solutions',
      title: 'Solutions',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'solution',
          fields: [
            defineField({
              name: 'emoji',
              title: 'Emoji',
              type: 'string',
              description: 'An emoji representing the solution (e.g., 🧑‍💼)',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              validation: (Rule) => Rule.required(),
            }),
          ],
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],

  preview: {
    select: {
      title: 'heading',
    },
    prepare({ title }) {
      return {
        title: `Business Solutions: ${title || 'Untitled'}`,
        subtitle: 'Business Solutions Section',
      }
    },
  },
})
