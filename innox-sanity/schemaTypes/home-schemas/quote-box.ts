import { defineField, defineType } from 'sanity'

const illustrationVariants = [
  {title: 'Data Pulse', value: 'dataPulse'},
  {title: 'Workflow Grid', value: 'workflowGrid'},
  {title: 'Growth Arc', value: 'growthArc'},
  {title: 'Connection Mesh', value: 'connectionMesh'},
]

export default defineType({
  name: 'quoteBox',
  title: 'Quote Box Section',
  type: 'object',
  fields: [
    defineField({
      name: 'quotes',
      title: 'Quotes',
      type: 'array',
      description:
        'These quotes rotate automatically on the homepage. Add an optional image for each quote, or choose a preset animated illustration fallback.',
      validation: (Rule) => Rule.required().min(1),
      of: [
        defineField({
          name: 'quoteItem',
          title: 'Quote Item',
          type: 'object',
          fields: [
            defineField({
              name: 'quote',
              title: 'Quote Text',
              type: 'text',
              rows: 5,
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'author',
              title: 'Author',
              type: 'string',
            }),
            defineField({
              name: 'authorTitle',
              title: 'Author Title',
              type: 'string',
            }),
            defineField({
              name: 'company',
              title: 'Company',
              type: 'string',
            }),
            defineField({
              name: 'companyUrl',
              title: 'Company URL',
              type: 'url',
            }),
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {hotspot: true},
              description:
                'Optional. If no image is uploaded, the selected animated illustration will be shown instead.',
            }),
            defineField({
              name: 'imageAlt',
              title: 'Image Alt Text',
              type: 'string',
              description:
                'Recommended whenever an image is uploaded for this quote.',
            }),
            defineField({
              name: 'illustrationVariant',
              title: 'Fallback Illustration',
              type: 'string',
              initialValue: 'dataPulse',
              options: {
                list: illustrationVariants,
                layout: 'radio',
              },
              description:
                'Preset animated illustration used when no image is uploaded.',
            }),
          ],
          preview: {
            select: {
              title: 'quote',
              subtitle: 'author',
              company: 'company',
              media: 'image',
            },
            prepare({title, subtitle, company, media}) {
              const authorLine = [subtitle, company].filter(Boolean).join(' • ')

              return {
                title: title ? title.slice(0, 60) : 'Untitled quote',
                subtitle: authorLine || 'Quote item',
                media,
              }
            },
          },
        }),
      ],
    }),
  ],

  preview: {
    select: {
      quotes: 'quotes',
    },
    prepare({quotes}) {
      const firstQuote = quotes?.[0]?.quote
      const count = quotes?.length ?? 0

      return {
        title: firstQuote
          ? `Quotes: ${firstQuote.slice(0, 40)}...`
          : 'Quote Box Section',
        subtitle: `${count} rotating quote${count === 1 ? '' : 's'}`,
      }
    },
  },
})
