import classnames from 'classnames';
import React from 'react';

export type TCardTitleProps = {
  font?: 'sans' | 'serif' | 'mono';
} & Pick<JSX.IntrinsicElements['h2'], 'className' | 'children'>

export const CardTitle = ( { className, font = 'serif' , ...rest }: TCardTitleProps ) => (
  <h2 className={classnames('block capitalize text-xl break-words', className, `font-${font}` )} {...rest} />
);