import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'industry',
  title: 'Industry',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Industry Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'logo',
    },
  },
})
