import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'movingModules',
  title: 'Moving Modules Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'Modules',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'modulesGroupA',
      title: 'Modules Group A (Left Direction)',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'module',
          fields: [
            defineField({
              name: 'name',
              title: 'Module Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'icon',
              title: 'Module Icon',
              type: 'string',
              description: 'Lucide icon name for this module item',
            }),
          ],
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'modulesGroupB',
      title: 'Modules Group B (Right Direction)',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'module',
          fields: [
            defineField({
              name: 'name',
              title: 'Module Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'icon',
              title: 'Module Icon',
              type: 'string',
              description: 'Lucide icon name for this module item',
            }),
          ],
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],

  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title: `Moving Modules: ${title || 'Untitled'}`,
        subtitle: 'Moving Modules Section',
      }
    },
  },
})
