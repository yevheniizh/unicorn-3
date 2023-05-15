import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { AccordionContainer } from './AccordionContainer';
import { Default as AccordionDefault, InitiallyExpanded as AccordionInitiallyExpanded } from './Accordion.stories';

const meta: Meta<typeof AccordionContainer> = {
  title: 'Example/AccordionContainer',
  component: AccordionContainer,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof AccordionContainer>;

export const SeveralItems: Story = {
  args: {
    children: (
      <React.Fragment>
        <AccordionDefault.render {...AccordionDefault.args} title='Accordion 1' />
        <AccordionInitiallyExpanded.render {...AccordionInitiallyExpanded.args} title='Accordion 2' />
        <AccordionDefault.render {...AccordionDefault.args} title='Accordion 3' />
      </React.Fragment>
    )
  },
};
