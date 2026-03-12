import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'modulePageContent',
  title: 'Module Page Content',
  type: 'document',
  fields: [
    defineField({
      name: 'moduleSlug',
      title: 'Module Slug',
      type: 'string',
      description: 'URL-friendly identifier matching the module (e.g., "power-apps", "hr-management")',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
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
          name: 'backgroundImage',
          title: 'Background Image',
          type: 'image',
          options: { hotspot: true },
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
          name: 'dashboards',
          title: 'Dashboard Images',
          type: 'array',
          of: [
            {
              type: 'image',
              options: { hotspot: true },
            },
          ],
        }),
      ],
    }),

    defineField({
      name: 'keyFeatures',
      title: 'Key Features',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'keyFeature',
          fields: [
            defineField({
              name: 'iconName',
              title: 'Icon Name',
              type: 'string',
              description: 'Icon name from your icon library (e.g., "zap", "shield")',
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
          name: 'contents',
          title: 'Content Items',
          type: 'array',
          of: [
            {
              type: 'object',
              name: 'contentItem',
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
                defineField({
                  name: 'image',
                  title: 'Image',
                  type: 'image',
                  options: { hotspot: true },
                }),
                defineField({
                  name: 'link',
                  title: 'Link',
                  type: 'string',
                }),
              ],
            },
          ],
        }),
      ],
    }),

    // Main Module Banner

    defineField({
      name: 'mainModuleBanner',
      title: 'Main Module Banner',
      type: 'object',
      fields: [
        defineField({
          name: 'content',
          title: 'Content',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'image',
          title: 'Image',
          type: 'image',
          options: { hotspot: true },
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),

    //Industry
    defineField({
      name: 'industry',
      title: 'Industry Section',
      type: 'object',
      fields: [
        defineField({
          name: 'mainTitle',
          title: 'Main Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'mainnDescription',
          title: 'Main Description',
          type: 'text',
        }),
        defineField({
          name: 'industryItems',
          title: 'Industry Items',
          type: 'array',
          of: [
            {
              type: 'object',
              name: 'industryItem',
              fields: [
                defineField({
                  name: 'iconName',
                  title: 'Icon Name',
                  type: 'string',
                  description: 'Icon name from your icon library (e.g., "zap", "shield")',
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
                  validation: (Rule) => Rule.required(),
                }),
              ],
            },
          ],
        }),
      ],
    }),

    // Sub Moodule Banner

    defineField({
      name: 'subModuleBanner',
      title: 'Sub Modue Banner',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'content',
          title: 'Content',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'buttonText',
          title: 'Button Text',
          // default: 'See It In Action',
          type: 'string',
        }),
        defineField({
          name: 'buttonLink',
          title: 'Button Link',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'image',
          title: 'Image',
          type: 'image',
          options: { hotspot: true },
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),

    // 
  ],

  preview: {
    select: {
      title: 'moduleSlug',
      subtitle: 'hero.title',
    },
    prepare({ title, subtitle }) {
      return {
        title: title || 'Untitled Module Page',
        subtitle: subtitle || 'No hero title',
      }
    },
  },
})
