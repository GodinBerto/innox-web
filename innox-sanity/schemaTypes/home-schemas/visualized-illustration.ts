import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'visualizedIllustration',
  title: 'Visualized Illustration Section',
  type: 'object',
  fields: [
    defineField({
      name: 'headingStart',
      title: 'Heading Start',
      type: 'string',
      initialValue: 'Your All-in-One Platform,',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'headingHighlight',
      title: 'Heading Highlight',
      type: 'string',
      description: 'The text that appears with gradient styling',
      initialValue: 'Visualized',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'dashboardImage',
      title: 'Dashboard Image',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'backgroundImage',
      title: 'Background Wave Image',
      type: 'image',
      options: { hotspot: true },
      description: 'Optional wavy background image',
    }),
  ],

  preview: {
    select: {
      title: 'headingStart',
      subtitle: 'headingHighlight',
    },
    prepare({ title, subtitle }) {
      return {
        title: `Illustration: ${title || 'Untitled'} ${subtitle || ''}`,
        subtitle: 'Visualized Illustration Section',
      }
    },
  },
})
