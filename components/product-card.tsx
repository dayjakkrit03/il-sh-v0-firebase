
import { Star, ShoppingCart, Heart, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

interface ProductCardProps {
  id: string
  name: string
  price: number
  originalPrice?: number
  image: string
  rating: number
  reviewCount: number
  badge?: "Sale" | "New" | "Hot"
  inStock: boolean
  isWishlisted?: boolean
  freeShipping?: boolean
}

export function ProductCard({
  id,
  name,
  price,
  originalPrice,
  image,
  rating,
  reviewCount,
  inStock,
  badge,
  isWishlisted,
  freeShipping,
}: ProductCardProps) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
      />
    ))
  }

  const discountPercentage = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0

  return (
    <Card className="group p-0 border rounded-lg overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full bg-card">
      <div className="relative overflow-hidden">
        <div className="relative aspect-[1/1]">
          <img
            src={image || "/placeholder.svg"}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="text-white text-center">
              <Eye className="h-8 w-8 mx-auto mb-2 animate-wiggle" />
              <p className="font-bold">ดูรายละเอียด</p>
            </div>
          </div>
        </div>

        {discountPercentage > 0 && (
            <Badge
              variant="destructive"
              className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs font-semibold z-10"
            >
              -{discountPercentage}%
            </Badge>
          )}

        <div className="absolute top-2 right-2 flex items-center gap-1 z-10">
          {badge && badge !== "Sale" && (
            <Badge
              className={`px-2 py-1 text-xs font-semibold ${badge === "Hot" ? "bg-orange-500 text-white" : "bg-green-500 text-white"}`}
            >
              {badge}
            </Badge>
          )}
          <div className="h-8 w-8 bg-gray-200/80 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-300 transition-colors">
            <Heart className={`h-4 w-4 ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
          </div>
        </div>
        
        {freeShipping && (
          <Badge
              className="absolute bottom-2 right-2 bg-green-500 text-white px-2 py-1 text-xs font-semibold"
            >
              ส่งฟรี
          </Badge>
        )}

        {!inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-10">
            <Badge variant="secondary" className="bg-gray-600 text-white">
              สินค้าหมด
            </Badge>
          </div>
        )}
      </div>

      <div className="p-3 flex-1 flex flex-col">
        <h3 className="font-medium text-sm text-gray-800 line-clamp-2 mb-2 h-10">{name}</h3>

        <div className="mt-auto">
          <div className="flex items-center gap-1 mb-2">
            <div className="flex">{renderStars(rating)}</div>
            <span className="text-xs text-muted-foreground">({reviewCount})</span>
          </div>

          <div className="flex items-baseline gap-2 mb-3">
            <span className="text-primary font-bold text-xl">฿{price.toLocaleString()}</span>
            {originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                ฿{originalPrice.toLocaleString()}
              </span>
            )}
          </div>

          <Button
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold group-hover:animate-wiggle"
            size="sm"
            disabled={!inStock}
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            {inStock ? "ใส่ตะกร้า" : "สินค้าหมด"}
          </Button>
        </div>
      </div>
    </Card>
  )
}
