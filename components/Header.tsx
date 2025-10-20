'use client'

import Link from 'next/link'
import { useCart } from '@/context/CartContext'
import { useState } from 'react'

export default function Header() {
  const { getCartCount } = useCart()
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50">
      <div className="bg-gray-800 py-2">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold hover:text-orange-400 transition-colors">
            <span className="text-orange-400">Amazon</span> Clone
          </Link>

          <div className="flex-1 max-w-2xl mx-8">
            <div className="flex">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 px-4 py-2 rounded-l-md text-gray-900 focus:outline-none"
              />
              <button className="bg-orange-400 hover:bg-orange-500 px-6 py-2 rounded-r-md transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>

          <nav className="flex items-center gap-6">
            <Link href="/" className="hover:text-orange-400 transition-colors">
              Home
            </Link>
            <Link href="/cart" className="flex items-center gap-2 hover:text-orange-400 transition-colors relative">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {getCartCount() > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                  {getCartCount()}
                </span>
              )}
            </Link>
          </nav>
        </div>
      </div>

      <div className="bg-gray-700 py-2">
        <div className="max-w-7xl mx-auto px-4 flex gap-6 text-sm">
          <button className="hover:text-orange-400 transition-colors">All Categories</button>
          <button className="hover:text-orange-400 transition-colors">Today's Deals</button>
          <button className="hover:text-orange-400 transition-colors">Electronics</button>
          <button className="hover:text-orange-400 transition-colors">Fashion</button>
          <button className="hover:text-orange-400 transition-colors">Home & Kitchen</button>
          <button className="hover:text-orange-400 transition-colors">Sports</button>
        </div>
      </div>
    </header>
  )
}
