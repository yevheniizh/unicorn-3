import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from './Accordion';

const meta: Meta<typeof Accordion> = {
  title: 'Example/Accordion',
  component: Accordion,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
    render: ( args ) => <Accordion {...args} />,
    args: {
        title: 'I am accordion!',
        children: <>
            <svg className='w-10 h-10' viewBox="0 0 29 29" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="m15.03 27.887-.53.234-.53-.234C7.16 23.677 0 14.096 0 8.774.023 4.416 3.562.88 7.91.88a7.901 7.901 0 0 1 6.59 3.554A7.901 7.901 0 0 1 21.09.88c4.348 0 7.887 3.537 7.91 7.895 0 5.322-7.159 14.904-13.97 19.113z" fill="red"/>
            </svg>
            <p>Lorem ipsum dolor sit <b>amet</b>, consectetur adipisicing elit. Alias pariatur, harum autem corrupti illo est aut. Dolorum saepe molestias sunt!</p>
        </>,
    },
};

export const InitiallyExpanded: Story = {
    render: ( args ) => <Accordion {...args} expandedOnInit />,
    args: {
        title: 'I am accordion!',
        expandedOnInit: true,
        children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias pariatur, harum autem corrupti illo est aut. Dolorum saepe molestias sunt!',
    },
  };
