export default function Container({ children, className = '', as: Tag = 'div' }) {
  return (
    <Tag className={`mx-auto w-full max-w-8xl px-5 sm:px-8 lg:px-12 xl:px-16 ${className}`}>
      {children}
    </Tag>
  )
}
