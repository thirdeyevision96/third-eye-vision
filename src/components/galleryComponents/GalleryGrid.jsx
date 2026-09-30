import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  X,
  ArrowLeft,
  ArrowRight,
  Plus,
} from 'lucide-react'

import Container from '../commonComponents/Container'
import { galleryCategories } from '../../data/galleryData'
import { fetchGallery } from '../../services/galleryApi'

const INITIAL_VISIBLE = 10
const LOAD_MORE_COUNT = 10

export default function GalleryGrid() {
  const [galleryItems, setGalleryItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const [activeCategory, setActiveCategory] =
    useState('all')

  const [visibleCount, setVisibleCount] =
    useState(INITIAL_VISIBLE)

  const [selectedIndex, setSelectedIndex] =
    useState(null)

  /*
  |--------------------------------------------------------------------------
  | Load gallery from API
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    async function loadGallery() {
      try {
        setLoading(true)
        setError('')

        const images = await fetchGallery()

        setGalleryItems(images)
      } catch (err) {
        console.error('Gallery loading error:', err)

        setError(
          'Unable to load gallery images.'
        )
      } finally {
        setLoading(false)
      }
    }

    loadGallery()
  }, [])

  /*
  |--------------------------------------------------------------------------
  | Filter images
  |--------------------------------------------------------------------------
  */

  const filteredImages = useMemo(() => {
    if (activeCategory === 'all') {
      return galleryItems
    }

    return galleryItems.filter(
      (item) =>
        item.category === activeCategory
    )
  }, [activeCategory, galleryItems])

  /*
  |--------------------------------------------------------------------------
  | Visible images
  |--------------------------------------------------------------------------
  */

  const visibleImages = useMemo(() => {
    return filteredImages.slice(
      0,
      visibleCount
    )
  }, [filteredImages, visibleCount])

  /*
  |--------------------------------------------------------------------------
  | Reset when category changes
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    setVisibleCount(INITIAL_VISIBLE)
    setSelectedIndex(null)
  }, [activeCategory])

  /*
  |--------------------------------------------------------------------------
  | Load more
  |--------------------------------------------------------------------------
  */

  const handleLoadMore = () => {
    setVisibleCount((current) =>
      Math.min(
        current + LOAD_MORE_COUNT,
        filteredImages.length
      )
    )
  }

  /*
  |--------------------------------------------------------------------------
  | Open viewer
  |--------------------------------------------------------------------------
  */

  const openViewer = (image) => {
    const index = filteredImages.findIndex(
      (item) => item.id === image.id
    )

    if (index !== -1) {
      setSelectedIndex(index)
    }
  }

  /*
  |--------------------------------------------------------------------------
  | Close viewer
  |--------------------------------------------------------------------------
  */

  const closeViewer = () => {
    setSelectedIndex(null)
  }

  /*
  |--------------------------------------------------------------------------
  | Previous image
  |--------------------------------------------------------------------------
  */

  const showPrevious = () => {
    setSelectedIndex((current) => {
      if (current === null) {
        return null
      }

      if (filteredImages.length === 0) {
        return null
      }

      return current === 0
        ? filteredImages.length - 1
        : current - 1
    })
  }

  /*
  |--------------------------------------------------------------------------
  | Next image
  |--------------------------------------------------------------------------
  */

  const showNext = () => {
    setSelectedIndex((current) => {
      if (current === null) {
        return null
      }

      if (filteredImages.length === 0) {
        return null
      }

      return current ===
        filteredImages.length - 1
        ? 0
        : current + 1
    })
  }

  /*
  |--------------------------------------------------------------------------
  | Selected image
  |--------------------------------------------------------------------------
  */

  const selectedImage =
    selectedIndex !== null
      ? filteredImages[selectedIndex]
      : null

  /*
  |--------------------------------------------------------------------------
  | Lock page scroll while viewer is open
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    if (selectedIndex === null) {
      return
    }

    const previousBodyOverflow =
      document.body.style.overflow

    const previousHtmlOverflow =
      document.documentElement.style.overflow

    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow =
      'hidden'

    return () => {
      document.body.style.overflow =
        previousBodyOverflow

      document.documentElement.style.overflow =
        previousHtmlOverflow
    }
  }, [selectedIndex])

  /*
  |--------------------------------------------------------------------------
  | Keyboard navigation
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    if (selectedIndex === null) {
      return
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeViewer()
      }

      if (event.key === 'ArrowLeft') {
        showPrevious()
      }

      if (event.key === 'ArrowRight') {
        showNext()
      }
    }

    window.addEventListener(
      'keydown',
      handleKeyDown
    )

    return () => {
      window.removeEventListener(
        'keydown',
        handleKeyDown
      )
    }
  }, [selectedIndex, filteredImages.length])

  /*
  |--------------------------------------------------------------------------
  | Masonry columns
  |
  | 4 columns desktop
  | 2 columns tablet
  | 1 column mobile
  |--------------------------------------------------------------------------
  */

  const [columnCount, setColumnCount] =
    useState(4)

  useEffect(() => {
    const updateColumnCount = () => {
      const width = window.innerWidth

      if (width < 640) {
        setColumnCount(1)
      } else if (width < 1024) {
        setColumnCount(2)
      } else {
        setColumnCount(4)
      }
    }

    updateColumnCount()

    window.addEventListener(
      'resize',
      updateColumnCount
    )

    return () => {
      window.removeEventListener(
        'resize',
        updateColumnCount
      )
    }
  }, [])

  /*
  |--------------------------------------------------------------------------
  | Build balanced masonry
  |--------------------------------------------------------------------------
  */

  const masonryColumns = useMemo(() => {
    const columns = Array.from(
      { length: columnCount },
      () => []
    )

    const columnHeights = Array.from(
      { length: columnCount },
      () => 0
    )

    /*
     * Approximate column width.
     *
     * The actual gallery container has a maximum width,
     * but the exact value is not important here because
     * we only need relative image heights.
     */

    const gap = 5

    let containerWidth = 1200

    if (typeof window !== 'undefined') {
      const viewportWidth =
        window.innerWidth

      if (viewportWidth < 640) {
        containerWidth =
          Math.min(
            viewportWidth - 32,
            1200
          )
      } else if (viewportWidth < 1024) {
        containerWidth =
          Math.min(
            viewportWidth - 48,
            1200
          )
      } else {
        containerWidth =
          Math.min(
            viewportWidth - 64,
            1200
          )
      }
    }

    const totalGap =
      gap * (columnCount - 1)

    const columnWidth =
      (containerWidth - totalGap) /
      columnCount

    visibleImages.forEach((image) => {
      const width =
        Number(image.width) || 1

      const height =
        Number(image.height) || 1

      const aspectRatio =
        height / width

      const estimatedHeight =
        columnWidth * aspectRatio

      /*
       * Find the shortest column.
       */

      let shortestColumn = 0

      for (
        let index = 1;
        index < columnCount;
        index++
      ) {
        if (
          columnHeights[index] <
          columnHeights[shortestColumn]
        ) {
          shortestColumn = index
        }
      }

      columns[shortestColumn].push(image)

      columnHeights[shortestColumn] +=
        estimatedHeight + gap
    })

    return columns
  }, [visibleImages, columnCount])

  /*
  |--------------------------------------------------------------------------
  | Render
  |--------------------------------------------------------------------------
  */

  return (
    <>
      <section className="bg-charcoal-950 py-14 sm:py-16 lg:py-20">
        <Container>
          {/* -------------------------------------------------------------- */}
          {/* FILTERS */}
          {/* -------------------------------------------------------------- */}

          <div
  className="
    sticky
    hide-scrollbar
    top-[72px]
    z-[40]
    -mx-4
    mb-8
    border-y
    border-gold-400/10
    bg-charcoal-950/95
    px-4
    py-3
    backdrop-blur-md
    sm:top-[80px]
    sm:-mx-0
    sm:mb-10
    sm:border-y-0
    sm:bg-transparent
    sm:px-0
    sm:py-0
    sm:backdrop-blur-none
  "
>
  <div
    className="
      hide-scrollbar
      overflow-x-auto
      overscroll-x-contain
    "
  >
    <div
      className="
        flex
        w-max
        gap-2
        sm:w-auto
        sm:flex-wrap
        sm:justify-center
        sm:gap-3
        bg-ivory-300
        rounded-full
        p-2
      "
    >
      {galleryCategories.map((category) => {
        const isActive =
          activeCategory === category.slug

        return (
          <button
            key={category.slug}
            type="button"
            onClick={() => {
              setActiveCategory(category.slug)
            }}
            className={`
              shrink-0
              whitespace-nowrap
              border
              px-4
              py-2.5
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.22em]
              transition-all
              duration-300
              sm:px-5
              rounded-full
              text-charcoal-700
              ${
                isActive
                  ? `
                    border-gold-400
                    bg-gold-400
                    text-charcoal-950
                  `
                  : `
                    border-gold-400/30
                    text-ivory/60
                    hover:border-gold-400/70
                    hover:text-gold-300
                  `
              }
            `}
          >
            {category.name}
          </button>
        )
      })}
    </div>
  </div>
</div>

          {/* -------------------------------------------------------------- */}
          {/* LOADING */}
          {/* -------------------------------------------------------------- */}

          {loading && (
            <div className="flex min-h-[350px] items-center justify-center">
              <div className="text-center">
                <div className="mx-auto h-px w-16 bg-gold-400" />

                <p className="mt-5 text-[9px] font-semibold uppercase tracking-[0.3em] text-gold-300">
                  Loading Gallery
                </p>
              </div>
            </div>
          )}

          {/* -------------------------------------------------------------- */}
          {/* ERROR */}
          {/* -------------------------------------------------------------- */}

          {error && !loading && (
            <div className="flex min-h-[350px] items-center justify-center">
              <div className="text-center">
                <p className="text-sm text-ivory/60">
                  {error}
                </p>

                <p className="mt-2 text-[9px] uppercase tracking-[0.2em] text-gold-400/70">
                  Please try again
                </p>
              </div>
            </div>
          )}

          {/* -------------------------------------------------------------- */}
          {/* GALLERY */}
          {/* -------------------------------------------------------------- */}

          {!loading &&
            !error &&
            visibleImages.length > 0 && (
              <>
                <div className="flex items-start gap-[5px]">
                  {masonryColumns.map(
                    (
                      column,
                      columnIndex
                    ) => (
                      <div
                        key={columnIndex}
                        className="flex min-w-0 flex-1 flex-col gap-[5px]"
                      >
                        {column.map(
                          (image) => (
                            <GalleryImage
                              key={image.id}
                              image={image}
                              onClick={() =>
                                openViewer(
                                  image
                                )
                              }
                            />
                          )
                        )}
                      </div>
                    )
                  )}
                </div>

                {/* -------------------------------------------------------- */}
                {/* LOAD MORE */}
                {/* -------------------------------------------------------- */}

                {visibleCount <
                  filteredImages.length && (
                  <div className="mt-12 flex justify-center">
                    <button
                      type="button"
                      onClick={
                        handleLoadMore
                      }
                      className="
                        group
                        inline-flex
                        items-center
                        gap-3
                        border
                        border-gold-400/50
                        px-7
                        py-3.5
                        text-[9px]
                        font-semibold
                        uppercase
                        tracking-[0.25em]
                        text-gold-300
                        transition-all
                        duration-300
                        hover:bg-gold-400
                        hover:text-charcoal-950
                      "
                    >
                      <Plus
                        size={15}
                        strokeWidth={1.5}
                        className="
                          transition-transform
                          duration-300
                          group-hover:rotate-90
                        "
                      />

                      Load More
                    </button>
                  </div>
                )}

                {/* -------------------------------------------------------- */}
                {/* IMAGE COUNT */}
                {/* -------------------------------------------------------- */}

                <p className="mt-5 text-center text-[9px] uppercase tracking-[0.2em] text-ivory/30">
                  Showing{' '}
                  {visibleImages.length}{' '}
                  of{' '}
                  {filteredImages.length}{' '}
                  images
                </p>
              </>
            )}

          {/* -------------------------------------------------------------- */}
          {/* EMPTY */}
          {/* -------------------------------------------------------------- */}

          {!loading &&
            !error &&
            visibleImages.length === 0 && (
              <div className="flex min-h-[300px] items-center justify-center">
                <p className="text-xs uppercase tracking-[0.25em] text-ivory/40">
                  No images found
                </p>
              </div>
            )}
        </Container>
      </section>

      {/* ================================================================== */}
      {/* FULLSCREEN VIEWER */}
      {/* ================================================================== */}

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="
              fixed
              inset-0
              z-[9998]
              h-[100dvh]
              w-screen
              overflow-hidden
              bg-[#050706]
            "
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.25,
            }}
          >
            {/* ------------------------------------------------------------ */}
            {/* VIEWER BELOW NAVBAR */}
            {/* ------------------------------------------------------------ */}

            <div
              className="
                absolute
                inset-x-0
                bottom-0
                top-[72px]
                flex
                flex-col
                bg-[#050706]
                sm:top-[80px]
              "
            >
              {/* ---------------------------------------------------------- */}
              {/* VIEWER HEADER */}
              {/* ---------------------------------------------------------- */}

              {/* <div
                className="
                  flex
                  h-[58px]
                  shrink-0
                  items-center
                  justify-between
                  border-b
                  border-gold-400/20
                  px-5
                  sm:px-8
                "
              >
                <div>
                  <p className="text-[8px] uppercase tracking-[0.3em] text-gold-400">
                    Our Gallery
                  </p>

                  <p className="mt-1 text-xs text-ivory/60">
                    {selectedImage.title}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={closeViewer}
                  aria-label="Close image viewer"
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-gold-400/40
                    text-gold-300
                    transition-all
                    duration-300
                    hover:bg-gold-400
                    hover:text-charcoal-950
                  "
                >
                  <X
                    size={17}
                    strokeWidth={1.5}
                  />
                </button>
              </div> */}

              {/* ---------------------------------------------------------- */}
              {/* IMAGE */}
              {/* ---------------------------------------------------------- */}

              <div
                className="
                  flex
                  min-h-0
                  flex-1
                  items-center
                  justify-center
                  overflow-hidden
                  px-4
                  py-5
                  sm:px-8
                  touch-pan-y
                "
              >
                <AnimatePresence
                  mode="wait"
                >
                  <motion.img
                    key={selectedImage.id}
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    draggable={false}
                    drag="x"
                    dragConstraints={{
                      left: 0,
                      right: 0,
                    }}
                    dragElastic={0.18}
                    onDragEnd={(event, info) => {
                      const swipeDistance = 80

                      if (info.offset.x < -swipeDistance) {
                        showNext()
                      }

                      if (info.offset.x > swipeDistance) {
                        showPrevious()
                      }
                    }}
                    className="
                      block
                      max-h-full
                      max-w-full
                      select-none
                      object-contain
                      touch-pan-y
                      cursor-grab
                      active:cursor-grabbing
                      sm:cursor-default
                    "
                    initial={{
                      opacity: 0,
                      scale: 0.97,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      x: 0,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.97,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                  />
                </AnimatePresence>
              </div>

              {/* ---------------------------------------------------------- */}
              {/* VIEWER CONTROLS */}
              {/* ---------------------------------------------------------- */}

              <div
                className="
                  flex
                  h-[82px]
                  shrink-0
                  items-center
                  justify-center
                  gap-5
                  border-t
                  border-gold-400/20
                "
              >
                <button
                  type="button"
                  onClick={showPrevious}
                  aria-label="Previous image"
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-gold-400/50
                    text-gold-300
                    transition-all
                    duration-300
                    hover:bg-gold-400
                    hover:text-charcoal-950
                  "
                >
                  <ArrowLeft
                    size={18}
                    strokeWidth={1.5}
                  />
                </button>

                <span className="min-w-[70px] text-center text-[9px] uppercase tracking-[0.2em] text-ivory/50">
                  {selectedIndex + 1}{' '}
                  /{' '}
                  {filteredImages.length}
                </span>

                <button
                  type="button"
                  onClick={showNext}
                  aria-label="Next image"
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-gold-400/50
                    text-gold-300
                    transition-all
                    duration-300
                    hover:bg-gold-400
                    hover:text-charcoal-950
                  "
                >
                  <ArrowRight
                    size={18}
                    strokeWidth={1.5}
                  />
                </button>

<div
                className="
                  absolute
                  right-[1rem]
                "
              >
                <button
                  type="button"
                  onClick={closeViewer}
                  aria-label="Close image viewer"
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-gold-400/40
                    text-gold-300
                    transition-all
                    duration-300
                    hover:bg-gold-400
                    hover:text-charcoal-950
                  "
                >
                  <X
                    size={17}
                    strokeWidth={1.5}
                  />
                </button>
              </div>
                
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

/*
|--------------------------------------------------------------------------
| Gallery Image
|--------------------------------------------------------------------------
*/

function GalleryImage({
  image,
  onClick,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
        group
        relative
        block
        w-full
        overflow-hidden
        bg-transparent
        p-0
        text-left
      "
    >
      <img
        src={image.image}
        alt={image.title}
        loading="lazy"
        draggable={false}
        className="
          block
          h-auto
          w-full
          max-w-full
          object-contain
          transition-transform
          duration-700
          ease-out
          group-hover:scale-[1.02]
        "
      />

      {/* Hover overlay */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-black/0
          transition-all
          duration-500
          group-hover:bg-black/20
        "
      />

      {/* Image title */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          bg-gradient-to-t
          from-black/75
          via-black/20
          to-transparent
          px-4
          pb-4
          pt-12
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      >
        <p className="text-[9px] uppercase tracking-[0.2em] text-ivory">
          {image.title}
        </p>
      </div>
    </button>
  )
}