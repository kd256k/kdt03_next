'use client'
import { useState } from 'react'

const getGradient = (name: string) => {
    const gradients = [
    "from-orange-200 to-red-300",
    "from-yellow-200 to-orange-300",
    "from-green-200 to-teal-300",
    "from-blue-200 to-indigo-300",
    "from-pink-200 to-rose-300",
    "from-purple-200 to-violet-300",
  ]
  const index = name.charCodeAt(0) % gradients.length
  return gradients[index]
} 

export default function RestaurantImage({ src, title }: { src: string | null, title: string }) {
  const [error, setError] = useState(false)

  if (!src || error) {
    return (
      <div className={`h-full flex items-center justify-center bg-gradient-to-br ${getGradient(title)}`}>
        <span className="text-5xl font-bold text-white drop-shadow-md">{title.slice(0, 5)}</span>
      </div>
    )
  }

  return (
    <img src={src} alt={title} className="w-full h-full object-cover" onError={() => setError(true)} />
  )
}