import React from 'react';

import { AccordionItemBody } from './AccordionItemBody';
import { AccordionItemHeader } from './AccordionItemHeader';
import { AccordionItemWrapper, TAccordionItemWrapperProps } from './AccordionItemWrapper';

type TAccordionItemProps = {
  title: string;
} & TAccordionItemWrapperProps;

export const AccordionItem = ( { children, title, ...rest }: TAccordionItemProps ) => (
  <AccordionItemWrapper {...rest}>
    <AccordionItemHeader title={title} />
    <AccordionItemBody>{children}</AccordionItemBody>
  </AccordionItemWrapper>
);
