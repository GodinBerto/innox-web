import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'businessAdministration',
  title: 'Business Administration Section',
  type: 'object',
  fields: [
    defineField({
      name: 'mainTitle',
      title: 'Main Title',
      type: 'string',
      initialValue: 'Streamlined Business Administration',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mainDescription',
      title: 'Main Description',
      type: 'text',
      initialValue: 'InnoX connects departments, documents, and tasks to make operations smoother',
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
      initialValue: 'right',
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
        title: `Business Administration: ${title || 'Untitled'}`,
        subtitle: 'Business Administration Section',
      }
    },
  },
})
