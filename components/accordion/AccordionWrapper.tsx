import classnames from 'classnames';
import React, { useState } from 'react';

export type TAccordionWrapperProps = JSX.IntrinsicElements['li'];

export const AccordionWrapper = ( { className, ...rest }: TAccordionWrapperProps ) => {
  const [expanded, toggleExpanded] = useState( false );

  const onClick = () => toggleExpanded( !expanded );

  return (
    <li
      className={classnames( 'group/accordion', className, { expanded } )}
      onClick={onClick}
      {...rest}
    />
  );
};
