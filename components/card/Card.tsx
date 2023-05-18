import React from 'react';

import { CardDate } from './CardDate';
import { CardTitle, TCardTitleProps } from './CardTitle';
import { CardImage } from './CardImage';
import { CardWrapper, TCardWrapperProps } from './CardWrapper';
import { RenderIf } from '../RenderIf';
import { StaticImageData } from 'next/image';

type TCardProps = {
  minimized?: boolean;
  href: string;
  title: string;
  image: string | StaticImageData;
  date: string; } 
  & Pick<TCardTitleProps, 'font'>
  & TCardWrapperProps;

export const Card = ( { title, image, font, date, minimized = false, ...rest }: TCardProps ) => (
  <CardWrapper {...rest}>
    <RenderIf is={!minimized}>
      <CardImage src={`${image}`} />
    </RenderIf>
    <CardTitle font={font}>{title}</CardTitle>
    <CardDate>{date}</CardDate>
  </CardWrapper>
);
