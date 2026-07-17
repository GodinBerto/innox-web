import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'ctaImagesSection',
  title: 'CTA Images Section',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'ctaImages',
      title: 'CTA Images',
      type: 'array',
      of: [{ type: 'ctaImage' }],
      validation: (Rule) => Rule.required().min(1).max(6),
    }),
  ],
  preview: {
    select: {
      title: 'heading',
    },
    prepare({ title }) {
      return {
        title: title || 'CTA Images Section',
      }
    },
  },
})
