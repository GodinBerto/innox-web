import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'subModule',
  title: 'Sub Module',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Sub Module Name',
      type: 'string',
      description: 'The display name of the submodule (e.g., "eLog Book", "Recruitment")',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'URL-friendly identifier (e.g., "elog-book", "recruitment")',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'parentModule',
      title: 'Parent Module',
      type: 'reference',
      to: [{ type: 'module' }],
      description: 'The module this submodule belongs to',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'imageUrl',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Main image for the submodule',
    }),

    defineField({
      name: 'functionalFeatures',
      title: 'Functional Features',
      type: 'array',
      of: [defineArrayMember({ type: 'functionalFeature' })],
      description: 'List of functional feature cards for this submodule',
    }),

    // Hero Section
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        defineField({
          name: 'backgroundImage',
          title: 'Background Image',
          type: 'image',
          options: { hotspot: true },
        }),
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
        }),
        defineField({
          name: 'buttonText',
          title: 'Button Text',
          type: 'string',
          initialValue: 'Learn More',
        }),
        defineField({
          name: 'buttonLink',
          title: 'Button Link',
          type: 'string',
          initialValue: '/contact',
        }),
        defineField({
          name: 'dashboardFunctions',
          title: 'Dashboard Functions',
          type: 'array',
          of: [
            {
              type: 'object',
              name: 'dashboardFunction',
              fields: [
                defineField({
                  name: 'iconUrl',
                  title: 'Icon Name',
                  type: 'string',
                  description: 'Icon name (e.g., "notebook", "calendar", "shield")',
                }),
                defineField({
                  name: 'content',
                  title: 'Content',
                  type: 'string',
                }),
              ],
            },
          ],
        }),
        defineField({
          name: 'dashboardStat',
          title: 'Dashboard Stat',
          type: 'object',
          fields: [
            defineField({
              name: 'value',
              title: 'Value',
              type: 'string',
              description: 'e.g., "24/7", "99.9%", "300+"',
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'string',
            }),
          ],
        }),
      ],
    }),

    // Improve Outcomes Section
    defineField({
      name: 'improve',
      title: 'Improve Outcomes Section',
      type: 'improveSection',
    }),

    // Main Center Section
    defineField({
      name: 'mainCenter',
      title: 'Main Center Section',
      type: 'object',
      fields: [
        defineField({
          name: 'header',
          title: 'Header',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
            }),
          ],
        }),
        defineField({
          name: 'mainDashboardImage',
          title: 'Main Dashboard Image',
          type: 'image',
          options: { hotspot: true },
        }),
        defineField({
          name: 'sideSections',
          title: 'Side Sections',
          type: 'array',
          of: [
            {
              type: 'object',
              name: 'sideSection',
              fields: [
                defineField({
                  name: 'span',
                  title: 'Span',
                  type: 'string',
                  description:
                    'Optional column span hint (e.g., "1", "2", "full").',
                }),
                defineField({
                  name: 'title',
                  title: 'Title',
                  type: 'string',
                }),
                defineField({
                  name: 'description',
                  title: 'Description',
                  type: 'text',
                }),
                defineField({
                  name: 'image',
                  title: 'Image',
                  type: 'image',
                  options: { hotspot: true },
                }),
                defineField({
                  name: 'list',
                  title: 'List',
                  type: 'array',
                  of: [
                    {
                      type: 'object',
                      name: 'listItem',
                      fields: [
                        defineField({
                          name: 'text',
                          title: 'Text',
                          type: 'string',
                        }),
                      ],
                    },
                  ],
                }),
              ],
            },
          ],
        }),
      ],
    }),

    // Responsive Design Assets
    defineField({
      name: 'responsiveDesign',
      title: 'Responsive Design',
      type: 'object',
      fields: [
        defineField({
          name: 'mobileImage',
          title: 'Mobile Image',
          type: 'image',
          options: { hotspot: true },
        }),
        defineField({
          name: 'desktopImage',
          title: 'Desktop Image',
          type: 'image',
          options: { hotspot: true },
        }),
        defineField({
          name: 'tabletImage',
          title: 'Tablet Image',
          type: 'image',
          options: { hotspot: true },
        }),
      ],
    }),

    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which the submodule appears in lists',
    }),
  ],

  preview: {
    select: {
      title: 'name',
      subtitle: 'parentModule.name',
      media: 'imageUrl',
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title || 'Untitled Sub Module',
        subtitle: subtitle ? `Parent: ${subtitle}` : 'No parent module',
        media,
      }
    },
  },
})
