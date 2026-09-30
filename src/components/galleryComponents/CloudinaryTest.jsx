import {
  getGalleryImage,
  getFullscreenImage,
} from '../../lib/cloudinaryImages'

export default function CloudinaryTest() {
  const publicId =
    'third-eye-vision/gallery/weddings/05_lj1mxv'

  const thumbnail = getGalleryImage(publicId, 700)
  const fullscreen = getFullscreenImage(publicId, 2000)

  return (
    <div className="min-h-screen bg-[#0b0f0e] p-8 text-[#f6ebd2]">
      <h1 className="mb-8 text-2xl">
        Cloudinary Image Test
      </h1>

      <div className="space-y-10">
        {/* Thumbnail */}
        <div>
          <p className="mb-3 text-sm text-[#b99266]">
            Gallery — 700px
          </p>

          <img
            src={thumbnail}
            alt="Wedding thumbnail"
            className="h-auto w-full max-w-2xl"
          />
        </div>

        {/* Fullscreen */}
        <div>
          <p className="mb-3 text-sm text-[#b99266]">
            Fullscreen — 2000px
          </p>

          <img
            src={fullscreen}
            alt="Wedding fullscreen"
            className="h-auto w-full max-w-2xl"
          />
        </div>
      </div>
    </div>
  )
}