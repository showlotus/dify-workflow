// Next.js Image 组件在 Vite 中的兼容实现

import React from 'react'

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string
  alt: string
  width?: number | string
  height?: number | string
  fill?: boolean
  quality?: number
  priority?: boolean
  loading?: 'lazy' | 'eager'
  placeholder?: 'blur' | 'empty'
  blurDataURL?: string
  unoptimized?: boolean
  onLoadingComplete?: (result: { naturalWidth: number; naturalHeight: number }) => void
}

/**
 * Next.js Image 的兼容实现
 * 将 Next.js 的 Image API 转换为标准 img 标签
 */
const Image = React.forwardRef<HTMLImageElement, ImageProps>(
  (
    {
      src,
      alt,
      width,
      height,
      fill,
      quality,
      priority,
      loading = 'lazy',
      placeholder,
      blurDataURL,
      unoptimized,
      onLoadingComplete,
      style,
      ...props
    },
    ref
  ) => {
    const handleLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
      if (onLoadingComplete) {
        const img = e.currentTarget
        onLoadingComplete({
          naturalWidth: img.naturalWidth,
          naturalHeight: img.naturalHeight,
        })
      }
    }

    const imgStyle: React.CSSProperties = {
      ...style,
    }

    if (fill) {
      imgStyle.position = 'absolute'
      imgStyle.height = '100%'
      imgStyle.width = '100%'
      imgStyle.left = 0
      imgStyle.top = 0
      imgStyle.right = 0
      imgStyle.bottom = 0
      imgStyle.objectFit = 'cover'
    }

    return (
      <img
        ref={ref}
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : loading}
        style={imgStyle}
        onLoad={handleLoad}
        {...props}
      />
    )
  }
)

Image.displayName = 'Image'

export default Image

