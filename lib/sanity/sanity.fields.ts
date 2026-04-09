import groq from 'groq';
export const homePageFields = groq`
  _id,
  _type,
  sections[]{
    ...,
  }
`;

// Module Page Content fields
export const modulePageContentFields = groq`
  _id,
  moduleSlug,
  hero {
    title,
    description,
    backgroundImage {
      asset->{
        _id,
        url
      },
      alt
    },
    buttonText,
    buttonLink,
    dashboards[] {
      _key,
      asset->{
        _id,
        url
      }
    }
  },
  keyFeatures[] {
    _key,
    iconName,
    content
  },
  mainCenter {
    header {
      title,
      description
    },
    contents[] {
      _key,
      title,
      description,
      link,
      image {
        asset->{
          _id,
          url
        }
      }
    }
  },

  mainModuleBanner {
    content,
    image {
      asset->{
        _id,
        url
      }
    },
  },

  industry {
    mainTitle,
    mainnDescription,
    industryItems[] {
      _key,
      iconName,
      title,
      description,
      image {
        asset->{
          _id,
          url
        }
      },
    },
  },

  subModuleBanner {
    content,
    image {
      asset->{
        _id,
        url
      }
    },
  },
`;

// Footer Data fields
export const footerDataFields = groq`
  _id,
  title,
  brandPrimary,
  brandSecondary,
  brandLink,
  quickLinks[] {
    title,
    links[] {
      label,
      href
    }
  },
  socialLinks[] {
    icon,
    label,
    href
  },
  legalDisclaimer,
  riskWarning
`;

// Functional Modules List fields
export const functionalModulesListFields = groq`
  _id,
  title,
  modules[] {
    name,
    link,
    icon
  }
`;

// Moving Modules Data fields
export const movingModulesDataFields = groq`
  _id,
  title,
  modulesGroupA[] {
    name,
    icon
  },
  modulesGroupB[] {
    name,
    icon
  }
`;
