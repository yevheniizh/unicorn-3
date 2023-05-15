import classnames from 'classnames';
import React from 'react';

export type TAccordionHeaderProps = {
  title: string;
} & JSX.IntrinsicElements['div'];

export const AccordionHeader = ( { className, title, ...rest }: TAccordionHeaderProps ) => (
  <div
    className={classnames( 
      'flex justify-start items-center gap-2 cursor-pointer border-2 rounded border-transparent hover:border-teal-500 active:hover:bg-teal-100',
      className,
    )}
    {...rest}
  >
    <span
      className={classnames(
        'flex justify-center items-center w-8 h-8 text-bold transition-all duration-500',
        'group-[.expanded]/accordion:rotate-90',
      )}
    >
      &#8827;
    </span>
    <h3 className='w-full text-lg mr-2'>{title}</h3>
  </div>
);
