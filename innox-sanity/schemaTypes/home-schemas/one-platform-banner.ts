import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'onePlatformBanner',
  title: 'One Platform Banner',
  type: 'object',
  fields: [
    defineField({
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'text',
      title: 'Banner Text',
      type: 'string',
      initialValue: 'One Integrated Platform Endless Possibilities',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'height',
      title: 'Banner Height',
      type: 'number',
      initialValue: 417,
      description: 'Height of the banner in pixels',
    }),
  ],

  preview: {
    select: {
      title: 'text',
    },
    prepare({ title }) {
      return {
        title: `One Platform: ${title ? title.slice(0, 40) + '...' : 'Untitled'}`,
        subtitle: 'One Platform Banner Section',
      }
    },
  },
})
