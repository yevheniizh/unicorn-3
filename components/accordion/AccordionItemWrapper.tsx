import classnames from 'classnames';
import React, { useState } from 'react';

import styles from './Accordion.module.css';

export type TAccordionItemWrapperProps = JSX.IntrinsicElements['li'];

export const AccordionItemWrapper = ( { className, ...rest }: TAccordionItemWrapperProps ) => {
  const [expanded, toggleExpanded] = useState( false );

  const onClick = () => toggleExpanded( !expanded );

  return (
    <li
      className={classnames( styles.item, className, { [styles.expanded]: expanded } )}
      onClick={onClick}
      {...rest}
    />
  );
};
