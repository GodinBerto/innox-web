import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'module',
  title: 'Module',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Module Name',
      type: 'string',
      description: 'The display name of the module (e.g., "Power Apps", "HR Management")',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'URL-friendly identifier (e.g., "power-apps", "hr-management")',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
      description: 'Brief description of the module',
    }),

    defineField({
      name: 'icon',
      title: 'Module Icon',
      type: 'string',
      description: 'Icon name from your icon library (e.g., "zap", "users", "briefcase")',
    }),

    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which the module appears in lists',
    }),

    defineField({
      name: 'subModules',
      title: 'Sub Modules',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'subModule' }] }],
      description: 'The submodules that belong to this module',
    }),
  ],

  preview: {
    select: {
      title: 'name',
      subtitle: 'description',
    },
    prepare({ title, subtitle }) {
      return {
        title: title || 'Untitled Module',
        subtitle: subtitle ? subtitle.slice(0, 50) + '...' : 'No description',
      }
    },
  },
})
