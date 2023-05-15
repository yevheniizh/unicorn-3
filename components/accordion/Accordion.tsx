import classnames from 'classnames';
import React from 'react';

import styles from './Accordion.module.css';

/**
 * Displays Base According Component
 * @category Components
 */
export const Accordion = ( { className, ...rest }: JSX.IntrinsicElements['ul'] ) => (
  <ul className={classnames( styles.root, className )} {...rest} />
);
