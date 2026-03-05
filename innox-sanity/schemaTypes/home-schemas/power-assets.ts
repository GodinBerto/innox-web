import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'powerAssets',
  title: 'Power Assets Section',
  type: 'object',
  fields: [
    defineField({
      name: 'mainTitle',
      title: 'Main Title',
      type: 'string',
      initialValue: 'Smarter Power & Utility Operations',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mainDescription',
      title: 'Main Description',
      type: 'text',
      initialValue: 'InnoX equips energy teams with tools for reliability, and infrastructure visibility',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'position',
      title: 'Content Position',
      type: 'string',
      options: {
        list: [
          { title: 'Left', value: 'left' },
          { title: 'Right', value: 'right' },
        ],
      },
      initialValue: 'left',
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
        title: `Power Assets: ${title || 'Untitled'}`,
        subtitle: 'Power Assets Section',
      }
    },
  },
})
