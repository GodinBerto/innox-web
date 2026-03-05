import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'hero',
  title: 'Hero Section',
  type: 'object',
  fields: [
    defineField({
      name: 'staticText',
      title: 'Static Text',
      type: 'string',
      description: 'The text shown before the animated typewriter phrases.',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'phrases',
      title: 'Typewriter Phrases',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'phrase',
          fields: [
            defineField({
              name: 'text',
              title: 'Phrase Text',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'className',
              title: 'CSS Class Name',
              type: 'string',
              description: 'e.g. "text-blue-500 bg-blue-500"',
              validation: (Rule) => Rule.required(),
            }),
          ],
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),

    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'primaryCtaText',
      title: 'Primary CTA Text',
      type: 'string',
      initialValue: 'Book a Demo',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'primaryCtaLink',
      title: 'Primary CTA Link',
      type: 'string',
      initialValue: '/auth/sign-up',
      validation: (Rule) => Rule.required(),
    }),
  ],

  preview: {
    select: {
      title: 'staticText',
      subtitle: 'subtitle',
    },
    prepare({ title }) {
      return {
        title: `Hero: ${title ? title.slice(0, 40) + '...' : 'Untitled'}`,
        subtitle: 'Hero Section',
      }
    },
  },
})
