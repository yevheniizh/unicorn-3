import classnames from 'classnames';
import React from 'react';

export const CardDate = ( { className, ...rest }: JSX.IntrinsicElements['span'] ) => (
  <span className={classnames('w-full text-xs text-slate-500', className )} {...rest} />
);