import classnames from 'classnames';
import React from 'react';

import styles from './Accordion.module.css';

export type TAccordionItemHeaderProps = {
  title: string;
} & JSX.IntrinsicElements['div'];

export const AccordionItemHeader = ( { className, title, ...rest }: TAccordionItemHeaderProps ) => (
  <div className={classnames( styles.header, className )} {...rest}>
    <span className={styles.icon} />
    <h3 className={styles.title}>{title}</h3>
  </div>
);
