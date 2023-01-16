import React from 'react'

export const useFallbackImg = (img: string, fallback: string) => {
  const [src, setSrc] = React.useState(img)

  const onError = (event: React.SyntheticEvent<HTMLImageElement>) => {
    setSrc(fallback)
  }

  return { src, onError }
}
