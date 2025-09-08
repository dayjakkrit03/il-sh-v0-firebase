import { ProductCard } from "./product-card"
import { ChevronRight } from "lucide-react"

const sampleProducts = [
  {
    id: "1",
    name: "Fiber Optic Cable Single Mode 300m",
    price: 2190,
    originalPrice: 2590,
    image: "/fiber-optic-cable-orange.jpg",
    rating: 4.5,
    reviewCount: 128,
    badge: "Sale" as const,
    inStock: true,
    freeShipping: true,
  },
  {
    id: "2",
    name: "24 Port Gigabit Switch",
    price: 3590,
    image: "/network-switch-24-port.jpg",
    rating: 4.8,
    reviewCount: 89,
    badge: "Hot" as const,
    inStock: true,
    isWishlisted: true,
    freeShipping: false,
  },
  {
    id: "3",
    name: "RJ-45 Cat6 Cable 305m",
    price: 1890,
    originalPrice: 2190,
    image: "/ethernet-cable-cat6-blue.jpg",
    rating: 4.3,
    reviewCount: 256,
    badge: "Sale" as const,
    inStock: true,
    isWishlisted: true,
    freeShipping: true,
  },
  {
    id: "4",
    name: "Solar Cable Roof PV Panel 100m",
    price: 2890,
    image: "/red-solar-cable.jpg",
    rating: 4.6,
    reviewCount: 45,
    inStock: true,
    freeShipping: false,
  },
  {
    id: "5",
    name: "Telephone Cable 4 Pair Indoor 305m",
    price: 890,
    originalPrice: 1090,
    image: "/telephone-cable-4-pair.jpg",
    rating: 4.2,
    reviewCount: 167,
    badge: "Sale" as const,
    inStock: true,
    freeShipping: true,
  },
  {
    id: "6",
    name: '19" Server Rack Cabinet 42U',
    price: 12900,
    image: "/server-rack-cabinet-black.jpg",
    rating: 4.9,
    reviewCount: 23,
    badge: "New" as const,
    inStock: true,
    freeShipping: true,
  },
  {
    id: "7",
    name: "UTP Cat 5e LAN Cable 305m",
    price: 1290,
    originalPrice: 1590,
    image: "/utp-cat5e-cable-blue.jpg",
    rating: 4.1,
    reviewCount: 312,
    badge: "Sale" as const,
    inStock: true,
    freeShipping: true,
  },
  {
    id: "8",
    name: "OP-Data Fiber Media Converter 10/100",
    price: 2247,
    originalPrice: 2890,
    image: "/fiber-media-converter.jpg",
    rating: 4.4,
    reviewCount: 67,
    badge: "Sale" as const,
    inStock: false,
    freeShipping: false,
  },
]

export function ProductGrid() {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-foreground">สินค้าแนะนำ</h2>
          <a href="#" className="flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm">
            <span>ดูทั้งหมด</span>
            <ChevronRight className="h-5 w-5" />
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {sampleProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  )
}
