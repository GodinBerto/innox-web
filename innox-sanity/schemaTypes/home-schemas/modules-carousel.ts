import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'modulesCarousel',
  title: 'Modules Carousel',
  type: 'object',
  fields: [
    defineField({
      name: 'slides',
      title: 'Slides',
      type: 'array',
      of: [
        {
          name: 'slide',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Slide Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'buttonText',
              title: 'Button Text',
              type: 'string',
              initialValue: 'Explore Component',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'imageUrl',
              title: 'Slide Image',
              type: 'image',
              options: { hotspot: true },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'link',
              title: 'Slide Link',
              type: 'url',
              description: 'Optional URL when the button is clicked',
            }),
          ],
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],

  preview: {
    select: {
      title: 'slides.0.title',
    },
    prepare({ title }) {
      return {
        title: `Modules Carousel: ${title || 'Untitled Slide'}`,
        subtitle: 'Carousel Section',
      }
    },
  },
})
