const API_URL =
  import.meta.env.VITE_API_URL ||
  'http://localhost:5000/api/gallery'

export async function fetchGallery() {
  const response = await fetch(API_URL)

  if (!response.ok) {
    throw new Error('Failed to load gallery')
  }

  const data = await response.json()

  if (!data.success) {
    throw new Error(
      data.message || 'Failed to load gallery'
    )
  }

  return data.images
}