import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'functionalModulesList',
  title: 'Functional Modules List',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'Functional Modules',
    }),

    defineField({
      name: 'modules',
      title: 'Modules',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'functionalModule',
          fields: [
            defineField({
              name: 'name',
              title: 'Module Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'link',
              title: 'Link Slug',
              type: 'string',
              description: 'URL-friendly slug for the module (e.g., "human-resource-management")',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'icon',
              title: 'Icon',
              type: 'string',
              description: 'Lucide icon name (e.g., "lucide-user-cog", "lucide-wallet")',
            }),
          ],
        },
      ],
    }),
  ],

  preview: {
    select: {
      title: 'title',
      modules: 'modules',
    },
    prepare({ title, modules }) {
      return {
        title: title || 'Functional Modules List',
        subtitle: `${modules?.length || 0} modules`,
      }
    },
  },
})
