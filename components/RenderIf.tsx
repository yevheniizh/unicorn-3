import { PropsWithChildren } from 'react';

export const RenderIf = ( {
  children,
  is,
}: PropsWithChildren<{ is: boolean }> ) => (
  is ? <>{children}</> : null
);
