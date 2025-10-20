// https://res.cloudinary.com/zurri-cloud/image/upload/v1756019569/kleenmaids/yqebepxlocyvujhfhtkq.png
// https://res.cloudinary.com/zurri-cloud/image/upload/v1756019568/kleenmaids/rmyfifprz0kj6gaugn9i.jpg

export default function cloudinaryLoader({
    src,
    width,
    height,
    quality,
  }: {
    src: string
    width: number
    height?: number
    quality?: number
  }) {
    const params = ['f_auto', 'c_limit', `w_${width}`, `q_${quality || 'auto'}`]
    if (height) {
      params.push(`h_${height}`)
    }
    return `https://res.cloudinary.com/zurri-cloud/image/upload/${params.join(
      ','
    )}${src}`
  }