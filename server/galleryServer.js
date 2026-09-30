import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { v2 as cloudinary } from 'cloudinary'

dotenv.config()

const app = express()
const PORT = 5000

app.use(cors( {
  origin: 'https://thirdeyevision96.vercel.app'
}))
app.use(express.json())

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

app.get('/api/gallery', async (req, res) => {
  try {
    const result = await cloudinary.api.resources({
      type: 'upload',
      resource_type: 'image',
      prefix: 'third-eye-vision/gallery/',
      max_results: 500,
    })

    const images = result.resources.map((resource) => {
      const pathParts = resource.public_id.split('/')

      const category =
        pathParts.length >= 4
          ? pathParts[pathParts.length - 2]
          : 'other-events'

      return {
        id: resource.asset_id,
        publicId: resource.public_id,
        title: pathParts[pathParts.length - 1],
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
      }
    })

    res.json({
      success: true,
      images,
    })
  } catch (error) {
    console.error('Cloudinary Gallery Error:', error)

    res.status(500).json({
      success: false,
      message: 'Unable to load gallery images.',
    })
  }
})

app.listen(PORT, () => {
  console.log(`Gallery API running at http://localhost:${PORT}`)
})