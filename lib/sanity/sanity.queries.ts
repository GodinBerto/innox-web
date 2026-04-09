import groq from 'groq';
import {
  homePageFields,
  modulePageContentFields,
  footerDataFields,
  functionalModulesListFields,
  movingModulesDataFields,
} from './sanity.fields';

export const homePageQuery = groq`
  *[_type == "homePage"][0]{
    ${homePageFields}
  }
`;

// Module Page Content queries
export const modulePageContentBySlugQuery = groq`
  *[_type == "modulePageContent" && moduleSlug == $slug][0]{
    ${modulePageContentFields}
  }
`;

export const allModulePageContentsQuery = groq`
  *[_type == "modulePageContent"]{
    ${modulePageContentFields}
  }
`;

// Footer Data query
export const footerDataQuery = groq`
  *[_type == "footerData"][0]{
    ${footerDataFields}
  }
`;

// Functional Modules List query
export const functionalModulesListQuery = groq`
  *[_type == "functionalModulesList"][0]{
    ${functionalModulesListFields}
  }
`;

// Moving Modules Data query
export const movingModulesDataQuery = groq`
  *[_type == "movingModulesData"][0]{
    ${movingModulesDataFields}
  }
`;

// Navigation modules query
export const modulesWithSubModulesQuery = groq`
  *[_type == "module"] | order(order asc){
    _id,
    name,
    icon,
    order,
    "slug": slug.current,
    subModules[]->{
      _id,
      name,
      icon,
      "slug": slug.current
    }
  }
`;

export const subModulePageContentBySlugsQuery = groq`
  *[
    _type == "subModule" &&
    slug.current == $submoduleSlug &&
    parentModule->slug.current == $moduleSlug
  ][0]{
    _id,
    name,
    "slug": slug.current,
    icon,
    imageUrl {
      asset->{
        _id,
        url
      }
    },
    functionalFeatures {
      title,
      description,
      features[] {
        _key,
        _type,
        icon,
        title,
        content
      }
    },
    FAQ[] {
      _key,
      _type,
      question,
      answer
    },
    improve {
      title,
      description,
      image {
        asset->{
          _id,
          url
        }
      },
      content[] {
        _key,
        _type,
        title,
        description,
        iconName
      }
    },
    mainCenter {
      sideSections[] {
        _key,
        _type,
        span,
        title,
        description,
        image,
        list[] {
          _key,
          _type,
          text
        }
      }
    },
    hero {
      title,
      description,
      buttonText,
      buttonLink,
      backgroundImage {
        asset->{
          _id,
          url
        }
      },
      dashboardFunctions[] {
        iconUrl,
        content
      },
      dashboardStat {
        value,
        description
      }
    }
  }
`;

// export const menuQuery = groq`
//   *[_type == "menu" && categry != "main" ] | order(order asc) {
//     ${menuFields},
//     category
//   }
// `;

// export const menuBySlugQuery = groq`
//   *[_type == "menu" && slug.current == $slug][0] {
//       ${menuFields},
//       category
//   }
// `;
// // export const menuSlugsQuery = groq`
// // *[_type == "menu" && defined(slug.current)][].slug.current
// // `;

// export const menuSlugsQuery = groq`
// *[_type == "menu" && defined(slug.current)]{
//   "slug": slug.current
// }
// `;
