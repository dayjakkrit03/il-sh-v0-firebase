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
}

export function ProductCard({
  id,
  name,
  price,
  originalPrice,
  image,
  rating,
  reviewCount,
  badge,
  inStock,
}: ProductCardProps) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-3 w-3 ${i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
      />
    ))
  }

  const discountPercentage = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0

  const getDiscountBadgeColor = (percentage: number) => {
    if (percentage >= 80) return "bg-red-700 text-white" // Dark red for 80%+
    if (percentage >= 60) return "bg-red-600 text-white" // Red for 60-79%
    if (percentage >= 40) return "bg-orange-500 text-white" // Orange for 40-59%
    if (percentage >= 20) return "bg-yellow-500 text-white" // Yellow for 20-39%
    return "bg-gray-500 text-white" // Default gray for less than 20%
  }

  return (
    <Card className="group hover:shadow-lg hover:-translate-y-2 transition-all duration-300 bg-card overflow-hidden p-0 flex flex-col h-full gap-2">
      <div className="relative overflow-hidden">
        <div className="relative aspect-[5/6]">
          <img
            src={image || "/placeholder.svg"}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />

          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="flex items-center gap-1 text-white text-[8px] sm:text-xs font-medium drop-shadow-lg">
              <Eye className="h-2 w-2 sm:h-3 sm:w-3 animate-bounce" />
              ดูรายละเอียด
            </div>
          </div>
        </div>

        <div className="absolute top-2 left-2 flex flex-col gap-1 z-10">
          {badge && (
            <Badge
              variant={badge === "Sale" ? "destructive" : "secondary"}
              className={`text-[8px] sm:text-xs ${
                badge === "Sale"
                  ? "bg-red-500 text-white"
                  : badge === "New"
                    ? "bg-green-500 text-white"
                    : "bg-orange-500 text-white"
              } px-1 sm:px-2 py-0.5 sm:py-1`}
            >
              {badge}
            </Badge>
          )}
          {discountPercentage > 0 && (
            <Badge
              variant="destructive"
              className={`text-[8px] sm:text-xs ${getDiscountBadgeColor(discountPercentage)} px-1 sm:px-2 py-0.5 sm:py-1`}
            >
              -{discountPercentage}%
            </Badge>
          )}
        </div>

        <Button
          size="sm"
          variant="ghost"
          className="absolute top-2 right-2 h-6 w-6 sm:h-8 sm:w-8 p-0 bg-white/80 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity z-10"
        >
          <Heart className="h-3 w-3 sm:h-4 sm:w-4" />
        </Button>

        {!inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-10">
            <Badge variant="secondary" className="bg-gray-600 text-white">
              สินค้าหมด
            </Badge>
          </div>
        )}
      </div>

      <div className="px-2 sm:px-4 pb-2 sm:pb-4 flex-1 flex flex-col">
        <h3 className="font-medium text-xs sm:text-sm line-clamp-2 text-card-foreground mb-1">{name}</h3>

        <div className="mt-auto">
          <div className="flex items-center gap-1 mb-1 sm:mb-2">
            <div className="flex">{renderStars(rating)}</div>
            <span className="text-xs text-muted-foreground">({reviewCount})</span>
          </div>

          <div className="flex items-center gap-1 sm:gap-2 mb-2 sm:mb-3">
            <span className="text-sm sm:text-lg font-bold text-primary">฿{price.toLocaleString()}</span>
            {originalPrice && (
              <span className="text-xs sm:text-sm text-muted-foreground line-through">
                ฿{originalPrice.toLocaleString()}
              </span>
            )}
          </div>

          <Button
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group-hover:animate-pulse text-xs sm:text-sm"
            size="sm"
            disabled={!inStock}
          >
            <ShoppingCart className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 group-hover:animate-bounce" />
            {inStock ? "ใส่ตะกร้า" : "สินค้าหมด"}
          </Button>
        </div>
      </div>
    </Card>
  )
}
