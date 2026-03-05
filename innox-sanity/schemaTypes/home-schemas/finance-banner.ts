import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'financeBanner',
  title: 'Finance Banner',
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
      initialValue: 'Take Control of Your Business Finances',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subheading',
      title: 'Subheading',
      type: 'text',
      initialValue: 'Automate budgeting, payroll, and accounting processes to gain full visibility into your organization\'s financial health',
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
      initialValue: 'left',
    }),
  ],

  preview: {
    select: {
      title: 'heading',
    },
    prepare({ title }) {
      return {
        title: `Finance Banner: ${title || 'Untitled'}`,
        subtitle: 'Finance Banner Section',
      }
    },
  },
})
