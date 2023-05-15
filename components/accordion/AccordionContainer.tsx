import classnames from 'classnames';
import React from 'react';

/**
 * Displays Base According Component
 * @category Components
 */
export const AccordionContainer = ( { className, ...rest }: JSX.IntrinsicElements['ul'] ) => (
  <ul className={classnames( 'w-80 h-24 m-2 grid grid-cols-1 divide-y', className )} {...rest} />
);
