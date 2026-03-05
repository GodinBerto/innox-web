import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'assetsBanner',
  title: 'Assets Banner',
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
      initialValue: 'Easily Track and Maintain Every Asset',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subheading',
      title: 'Subheading',
      type: 'text',
      initialValue: 'From inventory tracking to preventive maintenance, manage all your assets seamlessly in one integrated platform.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'linkText',
      title: 'Link Text',
      type: 'string',
      initialValue: 'Explore Asset Module',
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
        title: `Assets Banner: ${title || 'Untitled'}`,
        subtitle: 'Assets Banner Section',
      }
    },
  },
})
