import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'streamline',
  title: 'Streamline Section',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      initialValue: 'Streamline Your Business Operations With',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'highlightedText',
      title: 'Highlighted Text',
      type: 'string',
      description: 'The text that appears with gradient styling (e.g., "InnoX")',
      initialValue: 'InnoX',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
      initialValue: 'Get Started',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'buttonLink',
      title: 'Button Link',
      type: 'string',
      initialValue: '#',
    }),
    defineField({
      name: 'images',
      title: 'Background Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
        },
      ],
      validation: (Rule) => Rule.max(3),
      description: 'Up to 3 images for the animated background display',
    }),
  ],

  preview: {
    select: {
      title: 'heading',
    },
    prepare({ title }) {
      return {
        title: `Streamline: ${title || 'Untitled'}`,
        subtitle: 'Streamline Section',
      }
    },
  },
})
