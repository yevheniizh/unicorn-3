import classnames from 'classnames';
import React from 'react';

export type TCardImageProps = JSX.IntrinsicElements['img'];

export const CardImage = ( { className, ...rest }: TCardImageProps ) => (
  <img className={classnames('block rounded-md aspect-square object-contain', className )} {...rest} />
);
