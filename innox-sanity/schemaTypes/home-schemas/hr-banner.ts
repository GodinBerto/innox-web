import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'hrBanner',
  title: 'HR Banner',
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
      initialValue: 'Smarter HR Starts Here',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subheading',
      title: 'Subheading',
      type: 'text',
      initialValue: 'Automate recruitment, payroll and performance tracking, all in one place.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'linkText',
      title: 'Link Text',
      type: 'string',
      initialValue: 'See it in Action',
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
        title: `HR Banner: ${title || 'Untitled'}`,
        subtitle: 'HR Banner Section',
      }
    },
  },
})
