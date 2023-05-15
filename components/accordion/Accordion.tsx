import React from 'react';

import { AccordionBody } from './AccordionBody';
import { AccordionHeader } from './AccordionHeader';
import { AccordionWrapper, TAccordionWrapperProps } from './AccordionWrapper';

type TAccordionProps = {
  title: string;
} & TAccordionWrapperProps;

export const Accordion = ( { children, title, ...rest }: TAccordionProps ) => (
  <AccordionWrapper {...rest}>
    <AccordionHeader title={title} />
    <AccordionBody>{children}</AccordionBody>
  </AccordionWrapper>
);
