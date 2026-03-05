import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'managePeople',
  title: 'Manage People Section',
  type: 'object',
  fields: [
    defineField({
      name: 'mainTitle',
      title: 'Main Title',
      type: 'string',
      initialValue: 'Manage Your People with Ease',
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
        title: `Manage People: ${title || 'Untitled'}`,
        subtitle: 'Manage People Section',
      }
    },
  },
})
