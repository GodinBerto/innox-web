import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'movingModulesData',
  title: 'Moving Modules Data',
  type: 'document',
  description: 'Standalone document for moving modules data with icon references',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'Moving Modules',
    }),

    defineField({
      name: 'modulesGroupA',
      title: 'Modules Group A (Left Direction)',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'movingModule',
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
    }),

    defineField({
      name: 'modulesGroupB',
      title: 'Modules Group B (Right Direction)',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'movingModule',
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
    }),
  ],

  preview: {
    select: {
      title: 'title',
      groupA: 'modulesGroupA',
      groupB: 'modulesGroupB',
    },
    prepare({ title, groupA, groupB }) {
      const countA = groupA?.length || 0
      const countB = groupB?.length || 0
      return {
        title: title || 'Moving Modules Data',
        subtitle: `Group A: ${countA}, Group B: ${countB}`,
      }
    },
  },
})
