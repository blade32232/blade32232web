import { ThemedComponentThis } from '@connectv/jss-theme';
import { RendererLike } from '@connectv/html';
import { CodedocTheme } from '@codedoc/core';

import { centerimage } from './style';


export interface ImageOptions {
  raise: string;
}


export function CenterImage(
  this: ThemedComponentThis<CodedocTheme>,
  options: ImageOptions,
  renderer: RendererLike<any, any>,
  content: any,
) {
  const classes = this.theme.classes(centerimage);

  return <div class={`${classes.centerimage}`}>
    {content}
  </div>;
}