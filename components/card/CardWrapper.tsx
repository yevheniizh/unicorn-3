import Link from 'next/link';
import classnames from 'classnames';
import React, {PropsWithChildren} from 'react';

export type TCardWrapperProps = PropsWithChildren<{
  href: string;
}> & Pick<JSX.IntrinsicElements['section'], 'className'>;

export const CardWrapper = ( { children, className, href }: TCardWrapperProps ) => {
  return (
    <Link href={href}>
      <section 
        className={classnames(
          'flex flex-col gap-2 p-2 max-w-xs drop-shadow-2xl cursor-pointer border-2 rounded',
          'hover:scale-95 transition-transform origin-center',
          className,
        )}
      >
        {children}
      </section>
    </Link>
  );
};
