import cloudinary from './cloudinary'

export function getGalleryImage(publicId, width = 700) {
  return cloudinary
    .image(publicId)
    .format('auto')
    .quality('auto')
    .resize(`w_${width}`)
    .toURL()
}

export function getFullscreenImage(publicId, width = 2000) {
  return cloudinary
    .image(publicId)
    .format('auto')
    .quality('auto')
    .resize(`w_${width}`)
    .toURL()
}