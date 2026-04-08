import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'footerData',
  title: 'Footer Data',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Footer Title',
      type: 'string',
      initialValue: 'Site Footer',
    }),
    defineField({
      name: 'brandPrimary',
      title: 'Brand Primary Text',
      type: 'string',
      initialValue: 'Inno',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'brandSecondary',
      title: 'Brand Secondary Text',
      type: 'string',
      initialValue: 'X',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'brandLink',
      title: 'Brand Link',
      type: 'string',
      initialValue: '/',
    }),

    defineField({
      name: 'quickLinks',
      title: 'Navigation Groups',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'quickLinkColumn',
          title: 'Navigation Group',
          fields: [
            defineField({
              name: 'title',
              title: 'Group Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'links',
              title: 'Links',
              type: 'array',
              of: [
                {
                  type: 'object',
                  name: 'quickLink',
                  fields: [
                    defineField({
                      name: 'label',
                      title: 'Label',
                      type: 'string',
                      validation: (Rule) => Rule.required(),
                    }),
                    defineField({
                      name: 'href',
                      title: 'Link URL',
                      type: 'string',
                      validation: (Rule) => Rule.required(),
                    }),
                  ],
                },
              ],
            }),
          ],
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),

    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'socialLink',
          fields: [
            defineField({
              name: 'icon',
              title: 'Icon Name',
              type: 'string',
              description:
                'Icon identifier used in the footer social buttons.',
              options: {
                list: [
                  { title: 'Instagram', value: 'instagram' },
                  { title: 'YouTube', value: 'youtube' },
                  { title: 'Twitter / X', value: 'twitter' },
                  { title: 'Facebook', value: 'facebook' },
                  { title: 'LinkedIn', value: 'linkedin' },
                ],
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'href',
              title: 'Link URL',
              type: 'url',
              validation: (Rule) =>
                Rule.uri({
                  allowRelative: true,
                  scheme: ['http', 'https', 'mailto', 'tel'],
                }),
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'legalDisclaimer',
      title: 'Legal Disclaimer',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'riskWarning',
      title: 'Risk Warning',
      type: 'text',
      rows: 4,
    }),
  ],

  preview: {
    select: {
      title: 'title',
      brandPrimary: 'brandPrimary',
      brandSecondary: 'brandSecondary',
    },
    prepare({ title, brandPrimary, brandSecondary }) {
      return {
        title:
          title ||
          `${brandPrimary || ''}${brandSecondary || ''} Footer`.trim() ||
          'Footer Data',
      }
    },
  },
})
