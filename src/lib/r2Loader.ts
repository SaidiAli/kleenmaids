const R2_BASE_URL = 'https://site-contents.aptusagency.com/kleen'

export default function r2Loader({
  src,
}: {
  src: string
  width?: number
  height?: number
  quality?: number
}) {
  // Handle Cloudinary-style paths: /v1234567/kleenmaids/filename.ext
  const cloudinaryMatch = src.match(/\/kleenmaids\/([^/]+)$/)
  if (cloudinaryMatch) {
    return `${R2_BASE_URL}/${cloudinaryMatch[1]}`
  }

  // Already a full URL
  if (src.startsWith('http')) return src

  // Plain filename or /filename
  return `${R2_BASE_URL}/${src.replace(/^\//, '')}`
}
