import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'powerBanner',
  title: 'Power Banner',
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
      initialValue: 'Safer Power Operations',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subheading',
      title: 'Subheading',
      type: 'text',
      initialValue: 'Manage assets, log system events, and capture live meter data on platform',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'linkText',
      title: 'Link Text',
      type: 'string',
      initialValue: 'View Power Modules',
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
      initialValue: 'right',
    }),
  ],

  preview: {
    select: {
      title: 'heading',
    },
    prepare({ title }) {
      return {
        title: `Power Banner: ${title || 'Untitled'}`,
        subtitle: 'Power Banner Section',
      }
    },
  },
})
