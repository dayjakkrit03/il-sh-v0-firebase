"use client"

import { Clock, Zap, Eye, ShoppingCart } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useState, useEffect } from "react"

export function FlashSale() {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 32,
    seconds: 0,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev

        if (seconds > 0) {
          seconds--
        } else if (minutes > 0) {
          minutes--
          seconds = 59
        } else if (hours > 0) {
          hours--
          minutes = 59
          seconds = 59
        } else if (days > 0) {
          days--
          hours = 23
          minutes = 59
          seconds = 59
        }

        return { days, hours, minutes, seconds }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-8 bg-gradient-to-r from-red-500 to-orange-500 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div className="flex items-center justify-center gap-2 sm:gap-4">
            <Zap className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-yellow-300" />
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold whitespace-nowrap">
              ⚡ Clearance Sale
            </h2>
            <Zap className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-yellow-300" />
          </div>
          <Button
            variant="outline"
            size="sm"
            className="bg-white/20 border-white/30 text-white hover:bg-white/30 hover:text-white text-xs sm:text-sm px-3 py-1 sm:px-4 sm:py-2 self-center sm:self-auto"
          >
            ดูทั้งหมด →
          </Button>
        </div>

        <div className="text-center mb-8">
          <p className="text-sm sm:text-base md:text-lg mb-4">ลดราคาพิเศษ สินค้าคุณภาพ ในราคาที่คุณไม่ควรพลาด!</p>
          <div className="flex items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm">
            <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
            <span>เหลือเวลาอีก:</span>
            <div className="flex items-center gap-0.5 sm:gap-1">
              <div className="flex flex-col items-center">
                <span className="bg-white/20 px-1 sm:px-2 py-0.5 sm:py-1 rounded text-white font-bold text-xs sm:text-sm">
                  {timeLeft.days.toString().padStart(2, "0")}
                </span>
                <span className="text-xs">วัน</span>
              </div>
              <span className="text-xs sm:text-sm">:</span>
              <div className="flex flex-col items-center">
                <span className="bg-white/20 px-1 sm:px-2 py-0.5 sm:py-1 rounded text-white font-bold text-xs sm:text-sm">
                  {timeLeft.hours.toString().padStart(2, "0")}
                </span>
                <span className="text-xs">ชั่วโมง</span>
              </div>
              <span className="text-xs sm:text-sm">:</span>
              <div className="flex flex-col items-center">
                <span className="bg-white/20 px-1 sm:px-2 py-0.5 sm:py-1 rounded text-white font-bold text-xs sm:text-sm">
                  {timeLeft.minutes.toString().padStart(2, "0")}
                </span>
                <span className="text-xs">นาที</span>
              </div>
              <span className="text-xs sm:text-sm">:</span>
              <div className="flex flex-col items-center">
                <span className="bg-white/20 px-1 sm:px-2 py-0.5 sm:py-1 rounded text-white font-bold text-xs sm:text-sm">
                  {timeLeft.seconds.toString().padStart(2, "0")}
                </span>
                <span className="text-xs">วินาที</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4">
          {[
            {
              name: "Ethernet PCI Network Card Gigabit",
              price: 690,
              originalPrice: 890,
              image: "/ethernet-pci-card.jpg?v=2",
              sku: "US-9015LSZH",
            },
            {
              name: "WiFi Router AC1200 Dual Band",
              price: 1100,
              originalPrice: 2000,
              image: "/wifi-router-white.jpg",
              sku: "WR-AC1200DB",
            },
            {
              name: "24 Port Managed Switch Gigabit",
              price: 5565,
              originalPrice: 15900,
              image: "/managed-switch-24port.jpg",
              sku: "SW-24PG001",
            },
            {
              name: "CAT6 UTP Cable 1250 305m",
              price: 644,
              originalPrice: 4290,
              image: "/cat6-cable-box.jpg",
              sku: "CB-CAT6-305",
            },
          ].map((product, index) => {
            const discountPercentage = Math.round(
              ((product.originalPrice - product.price) / product.originalPrice) * 100,
            )

            const getDiscountBadgeColor = (percentage: number) => {
              if (percentage >= 80) return "bg-red-700 text-white"
              if (percentage >= 60) return "bg-red-600 text-white"
              if (percentage >= 40) return "bg-orange-500 text-white"
              if (percentage >= 20) return "bg-yellow-500 text-white"
              return "bg-gray-500 text-white"
            }

            const getFrameBorderColor = (percentage: number) => {
              if (percentage >= 80) return "border-red-700"
              if (percentage >= 60) return "border-red-600"
              if (percentage >= 40) return "border-orange-500"
              if (percentage >= 20) return "border-yellow-500"
              return "border-gray-500"
            }

            return (
              <Card
                key={index}
                className="gap-1 sm:gap-2 bg-white text-foreground hover:shadow-lg hover:-translate-y-2 transition-all duration-300 overflow-hidden p-0 flex flex-col group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full aspect-[5/6] object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div
                    className={`absolute inset-0 border-2 sm:border-4 ${getFrameBorderColor(discountPercentage)} rounded-lg pointer-events-none`}
                  >
                    <div className="absolute top-1 sm:top-2 left-1 sm:left-2 right-1 sm:right-2 flex justify-between items-start">
                      <div className="flex flex-col items-start gap-0.5 sm:gap-1">
                        <img src="/logo-as-clear.jpg" alt="AS" className="w-6 h-6 sm:w-8 sm:h-8 rounded" />
                        <Badge className={`text-[6px] sm:text-xs ${getDiscountBadgeColor(discountPercentage)}`}>
                          -{discountPercentage}%
                        </Badge>
                      </div>
                      <img src="/logo-30-clear.jpg" alt="30" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full" />
                      <div className="flex items-center justify-center">
                        <img src="/logo-link-clear.jpg" alt="LINK" className="w-10 h-5 sm:w-12 sm:h-6 rounded" />
                      </div>
                    </div>
                    <div className="absolute bottom-1 sm:bottom-2 left-1 sm:left-2 right-1 sm:right-2 text-center">
                      <div className="bg-white/90 px-0.5 sm:px-2 py-0.5 sm:py-1 rounded text-[8px] sm:text-xs font-bold text-gray-800">
                        {product.sku}
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center gap-1 text-white text-xs sm:text-sm font-medium">
                      <Eye className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 group-hover:animate-bounce" />
                      <span>ดูรายละเอียด</span>
                    </div>
                  </div>
                </div>
                <div className="p-2 sm:p-4 flex-1 flex flex-col gap-1 sm:gap-2">
                  <h3 className="font-medium text-xs sm:text-sm mb-1 sm:mb-2 line-clamp-2 leading-tight">
                    {product.name}
                  </h3>
                  <div className="mt-auto">
                    <div className="flex items-center gap-1 sm:gap-2 mb-2 sm:mb-3">
                      <span className="text-sm sm:text-lg font-bold text-red-600">
                        ฿{product.price.toLocaleString()}
                      </span>
                      <span className="text-xs sm:text-sm text-muted-foreground line-through">
                        ฿{product.originalPrice.toLocaleString()}
                      </span>
                    </div>
                    <Badge className={`mb-2 sm:mb-3 text-xs ${getDiscountBadgeColor(discountPercentage)}`}>
                      ลด {discountPercentage}%
                    </Badge>
                    <Button
                      size="sm"
                      className="w-full bg-red-500 hover:bg-red-600 group-hover:animate-pulse text-xs sm:text-sm py-1 sm:py-2"
                    >
                      <ShoppingCart className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 group-hover:animate-bounce" />
                      ซื้อเลย
                    </Button>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
