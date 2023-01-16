import type { DetailedHTMLProps, FC, ImgHTMLAttributes } from 'react'
import React from 'react'
import { useFallbackImg } from 'hooks/useFallbackImg'

type DefaultImagePropsType = DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>

type ImagePropsType = DefaultImagePropsType & {
  fallback: string
}

export const Image: FC<ImagePropsType> = ({src, fallback, ...restProps}) => {
  const imgProps = useFallbackImg(src as string, fallback)

  return <img {...imgProps} {...restProps} />
}
