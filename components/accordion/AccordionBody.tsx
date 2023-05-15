import classnames from 'classnames';
import React from 'react';

export const AccordionBody = ( { className, children, ...rest }: JSX.IntrinsicElements['div'] ) => (
  <div
    className={classnames(
      'grid grid-rows-collapsed transition-all duration-500',
      'group-[.expanded]/accordion:grid-rows-expanded',
      className,
      )}
    {...rest}
  >
    <div className='overflow-hidden'>{children}</div>
  </div>
);