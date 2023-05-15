import classnames from 'classnames';
import React from 'react';

import styles from './Accordion.module.css';

export const AccordionItemBody = ( { className, children, ...rest }: JSX.IntrinsicElements['div'] ) => (
  <div className={classnames( styles.body, className )} {...rest}>
    <div>{children}</div>
  </div>
);
