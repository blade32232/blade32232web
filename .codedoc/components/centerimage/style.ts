import { themedStyle } from '@connectv/jss-theme';  // @see [Connective JSS Theme](https://github.com/CONNECT-platform/connective-jss-theme)
import { CodedocTheme } from '@codedoc/core';


export const centerimage = themedStyle<CodedocTheme>(theme => ({
centerimage: {
},

'p': {
    margin: 'auto',
    display: 'block',
}

}))