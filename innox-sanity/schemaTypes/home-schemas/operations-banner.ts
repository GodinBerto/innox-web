import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'operationsBanner',
  title: 'Operations Banner',
  type: 'object',
  fields: [
    defineField({
      name: 'imageSrc',
      title: 'Background Image',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      initialValue: 'Simplify Operations',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subheading',
      title: 'Subheading',
      type: 'text',
      initialValue: 'Coordinate tasks and meetings across teams with connected tools that reduce clutter and boost efficiency',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'linkText',
      title: 'Link Text',
      type: 'string',
      initialValue: 'Streamline Admin Workflows',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'href',
      title: 'Link URL',
      type: 'string',
      initialValue: '#',
    }),
    defineField({
      name: 'direction',
      title: 'Content Direction',
      type: 'string',
      options: {
        list: [
          { title: 'Left', value: 'left' },
          { title: 'Right', value: 'right' },
        ],
      },
      initialValue: 'left',
    }),
  ],

  preview: {
    select: {
      title: 'heading',
    },
    prepare({ title }) {
      return {
        title: `Operations Banner: ${title || 'Untitled'}`,
        subtitle: 'Operations Banner Section',
      }
    },
  },
})
