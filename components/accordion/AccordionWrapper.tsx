import classnames from 'classnames';
import React, { useState } from 'react';

export type TAccordionWrapperProps = {
  expandedOnInit?: boolean;
} & JSX.IntrinsicElements['li'];

export const AccordionWrapper = ( { className, expandedOnInit = false, ...rest }: TAccordionWrapperProps ) => {
  const [expanded, toggleExpanded] = useState( expandedOnInit );

  const onClick = () => toggleExpanded( !expanded );

  return (
    <li
      className={classnames( 'group/accordion list-none', className, { expanded } )}
      onClick={onClick}
      {...rest}
    />
  );
};
