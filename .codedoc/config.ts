
import { configuration } from '@codedoc/core';

import { theme } from './theme';


export const config = /*#__PURE__*/configuration({
  theme,                                  // --> add the theme. modify `./theme.ts` for changing the theme.
  dest: {
    namespace: '/blade32232web'    // --> your github pages namespace. remove if you are using a custom domain.
  },
  page: {
    title: {
      base: 'Blade32232.github.io'        // --> the base title of your doc pages
    }
  },
  misc: {
    github: {
      user: 'blade32232',                 // --> your github username (where your repo is hosted)
      repo: 'blade32232web',       // --> your github repo name
    }
  },
});
