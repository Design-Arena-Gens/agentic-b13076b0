import ProductCard from '@/components/ProductCard'
import { products } from '@/data/products'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to Amazon Clone</h1>
          <p className="text-xl mb-8">Discover amazing products at unbeatable prices</p>
          <button className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg text-lg transition-colors">
            Shop Now
          </button>
        </div>
      </div>

      {/* Featured Products */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* Categories Section */}
      <div className="bg-gray-100 py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow cursor-pointer">
              <div className="text-4xl mb-3">💻</div>
              <h3 className="font-semibold">Electronics</h3>
            </div>
            <div className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow cursor-pointer">
              <div className="text-4xl mb-3">👕</div>
              <h3 className="font-semibold">Fashion</h3>
            </div>
            <div className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow cursor-pointer">
              <div className="text-4xl mb-3">🏠</div>
              <h3 className="font-semibold">Home</h3>
            </div>
            <div className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow cursor-pointer">
              <div className="text-4xl mb-3">⚽</div>
              <h3 className="font-semibold">Sports</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
