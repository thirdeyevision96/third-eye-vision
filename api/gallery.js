import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

export default async function handler(req, res) {
  try {
    const result = await cloudinary.api.resources({
      type: 'upload',
      prefix: 'third-eye-vision/gallery/',
      resource_type: 'image',
      max_results: 500,
    })

    const images = result.resources.map((resource) => {
      const parts = resource.public_id.split('/')

      const category =
        parts.length >= 4
          ? parts[parts.length - 2]
          : 'other-events'

      return {
        id: resource.asset_id,
        publicId: resource.public_id,
        category,
        image: cloudinary.url(resource.public_id, {
          secure: true,
          transformation: [
            {
              quality: 'auto',
              fetch_format: 'auto',
            },
          ],
        }),
        width: resource.width,
        height: resource.height,
        createdAt: resource.created_at,
      }
    })

    res.status(200).json({
      success: true,
      images,
    })
  } catch (error) {
    console.error('Cloudinary Gallery API Error:', error)

    res.status(500).json({
      success: false,
      message: 'Unable to load gallery images.',
    })
  }
}