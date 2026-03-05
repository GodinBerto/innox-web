import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'documentManager',
  title: 'Document Manager Section',
  type: 'object',
  fields: [
    defineField({
      name: 'mainTitle',
      title: 'Main Title',
      type: 'string',
      initialValue: 'Simplify Legal Case and Document Management.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mainDescription',
      title: 'Main Description',
      type: 'text',
      initialValue: 'InnoX empowers legal teams to manage cases, track timelines, and organize documents with ease.',
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
        title: `Document Manager: ${title || 'Untitled'}`,
        subtitle: 'Document Manager Section',
      }
    },
  },
})
