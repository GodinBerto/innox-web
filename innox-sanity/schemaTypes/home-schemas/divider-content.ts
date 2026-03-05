import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'dividerContent',
  title: 'Divider Content Section',
  type: 'object',
  fields: [
    defineField({
      name: 'text',
      title: 'Text',
      type: 'string',
      initialValue: 'Book Demo',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'link',
      title: 'Link URL',
      type: 'string',
      description: 'Optional link for the text',
    }),
    defineField({
      name: 'showIcon',
      title: 'Show Arrow Icon',
      type: 'boolean',
      initialValue: true,
    }),
  ],

  preview: {
    select: {
      title: 'text',
    },
    prepare({ title }) {
      return {
        title: `Divider: ${title || 'Untitled'}`,
        subtitle: 'Divider Content Section',
      }
    },
  },
})
