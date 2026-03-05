import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'manageAssets',
  title: 'Manage Assets Section',
  type: 'object',
  fields: [
    defineField({
      name: 'mainTitle',
      title: 'Main Title',
      type: 'string',
      initialValue: 'Manage Your Assets Efficiently',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mainDescription',
      title: 'Main Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Content Items',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'contentItem',
          fields: [
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
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              options: { hotspot: true },
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
      title: 'mainTitle',
    },
    prepare({ title }) {
      return {
        title: `Manage Assets: ${title || 'Untitled'}`,
        subtitle: 'Manage Assets Section',
      }
    },
  },
})
