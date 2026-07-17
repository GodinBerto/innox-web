import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'ctaImage',
  title: 'CTA Image',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'altText',
      title: 'Alt Text',
      type: 'string',
      description: 'Optional alt text for the CTA image.',
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'url',
      description: 'Optional destination URL for the CTA image.',
    }),
  ],
})
