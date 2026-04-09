import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'functionalFeature',
  title: 'Functional Feature',
  type: 'object',
  fields: [
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'string',
      description: 'Lucide icon name for this feature card',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Short feature heading shown on the card',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'text',
      rows: 3,
      description: 'Short supporting text shown under the feature title',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'content',
    },
  },
})
