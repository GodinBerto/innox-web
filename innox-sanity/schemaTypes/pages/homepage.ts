import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({
      name: 'sections',
      title: 'Page Sections',
      type: 'array',
      of: [
        { type: 'hero' },
        { type: 'modulesCarousel' },
        { type: 'businessSolutions' },
        { type: 'streamline' },
        { type: 'managePeople' },
        { type: 'hrBanner' },
        { type: 'manageAssets' },
        { type: 'assetsBanner' },
        { type: 'documentManager' },
        { type: 'legalBanner' },
        { type: 'financeAccounting' },
        { type: 'financeBanner' },
        { type: 'powerAssets' },
        { type: 'powerBanner' },
        { type: 'businessAdministration' },
        { type: 'operationsBanner' },
        { type: 'quoteBox' },
        { type: 'visualizedIllustration' },
        { type: 'movingModules' },
        { type: 'onePlatformBanner' },
        { type: 'faqSection' },
        { type: 'dividerContent' },
      ],
    }),
  ],
})
